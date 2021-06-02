<?php
namespace app\controllers;
use Yii;
use app\models\Vendas;
use app\models\VendasSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\db\Query;
use app\models\Cliente;
use app\models\Produto;
use app\models\ItensDaVenda;

/**
 * VendasController implements the CRUD actions for Vendas model.
 */
class VendasController extends Controller
{
    /**
     * {@inheritdoc}
     */
    public $layout = 'pdv/main.php';
    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::class,
                'actions' => [
                    'delete' => ['POST'],
                ],
            ],
        ];
    }

    /**
     * Lists all Vendas models.
     * @return mixed
     */
    public function actionIndex()
    {
        $searchModel = new VendasSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single Vendas model.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($id)
    {
        return $this->render('view', [
            'model' => $this->findModel($id),
        ]);
    }

    /**
     * Creates a new Vendas model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new Vendas();
        $model->dt_venda = date('d-m-Y');
        $itens = new ItensDaVenda();

        if ($model->load(Yii::$app->request->post())) {
            $model->id_usuario_fk = \Yii::$app->user->id;
            $model->save(false);
            if(isset($_POST['ItensDaVenda'])){
                $itens->load(yii::$app->post());
            }
            return $this->redirect(['index']);
        }
        return $this->render('create', [
            'model' => $model,
            'itens' => $itens
        ]);
    }

    /**
     * Updates an existing Vendas model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($id)
    {
        $venda = Vendas::findOne($id);
        if(!$venda){
            throw new NotFoundHttpException('Venda não encontrada.');
        }
        $itens = ItensDaVenda::findOne($venda->id_venda_fk);
            if(!$itens){
                throw new NotFoundHttpException('Itens da venda não encontrado');
            }
        $venda->scenario = 'update';
        $itens->scenario = 'update';

        if ($venda->load(Yii::$app->request->post()) && $itens->load(Yii::$app->request->post())) {
            $isValid = $venda->validate();
            $isValid = $itens->validate() && $isValid;
            if($isValid){
                $venda->save(false);
                $itens->save(false);
                return $this->redirect(['vendas/_pdv','id'=>$id]);
            }
        }
        return $this->render('update', [
            'venda' => $venda,
            'itens' => $itens
        ]);
    }

    /**
     * Deletes an existing Vendas model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionDelete($id)
    {
        $this->findModel($id)->delete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the Vendas model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return Vendas the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Vendas::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
    public function actionClienteList($q=null,$id=null){
        
        \yii::$app->response->format = yii\web\response::FORMAT_JSON;
        $out = ['results'=>['id'=>'','nome'=>'','cpf'=>'']];
        if(!is_null($q)){
            $query = new Query;
            $query->select('id_cliente,no_cliente')->from('cliente');
            $comamder = $query->createCommand();
            $dados = $comamder->queryAll();
            $out['results'] = array_values($dados);
        }
        elseif($id>0){
            $cliente = Cliente::findOne($id);
            $out['results'] = ['id'=>$id, 'nome'>$cliente->no_cliente];
        }
        return $out;
    }
    public function actionProdutoList($prod = null, $id = null){
        \yii::$app->response->format = \yii\web\response::FORMAT_JSON;
        $out = ['results'=>['id'=>'','produto'=>'','valor'=>'','quantidade'=>'']];
        if(!is_null($prod)){
            $query = new Query;
            $query->select('id_produto,no_produto,vr_venda')->from('produto')
            ->where(['like','cod_barra',strtoupper($prod)])->andWhere(['=','ic_excluido',false]);
            $comamder = $query->createCommand();
            $dados = $comamder->queryAll();
            $out['results'] = array_values($dados);
            return $out;
        }
        elseif($id>0){
            $produto = Produto::findOne($id);
            $out['results'] = ['id'=>$id, 'produto'=>$produto->no_produto, 'valor'=>$produto->vr_venda, 'quant'=>$produto->nu_estoque_atual];
            return $out;
        }
        $model = new Produto();
        $item = new ItensDaVenda();
        return $this->render('_itens',['model'=>$model,'item'=>$item]);
    }
}
