<?php
namespace app\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Produto;
use Egulias\EmailValidator\Result\Result;

/**
 * ProdutoSearch represents the model behind the search form of `app\models\Produto`.
 */
class ProdutoSearch extends Produto
{
    /**
     * {@inheritdoc}
     */
    public $busca;
    public function rules()
    {
        return [
            [['id_produto', 'id_categoria_fk', 'id_usuario_fk', 'ic_cadastral', 'id_fornecedor_fk', 'nu_estoque_atual', 'nu_estoque_min'], 'integer'],
            [['cod_barra', 'dt_login', 'no_produto', 'de_descricao', 'unid_medida','busca','dt_vencimento'], 'safe'],
            [['vr_compra', 'vr_venda', 'vr_comissao', 'vr_desconto'], 'number'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    /**
     * Creates data provider instance with search query applied
     *
     * @param array $params
     *
     * @return ActiveDataProvider
     */
    public function search($params)
    {
        $query = Produto::find();

        // add conditions that should always apply here

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }
        $query->joinWith('categoriaFk');
        $query->joinWith('fornecedorFk');

        // grid filtering conditions
        $query->andFilterWhere([
            'id_produto' => $this->id_produto,
            'id_categoria_fk' => $this->id_categoria_fk,
            'id_usuario_fk' => $this->id_usuario_fk,
            'dt_login' => $this->dt_login,
            'ic_cadastral' => $this->ic_cadastral,
            'id_fornecedor_fk' => $this->id_fornecedor_fk,
            'vr_compra' => $this->vr_compra,
            'vr_venda' => $this->vr_venda,
            'vr_comissao' => $this->vr_comissao,
            'vr_desconto' => $this->vr_desconto,
            'nu_estoque_atual' => $this->nu_estoque_atual,
            'nu_estoque_min' => $this->nu_estoque_min,
            'dt_vencimento'=> $this->dt_vencimento
        ]);
        if(strtotime($this->busca)){
            $data = explode('-',$this->busca);
            $ano = $data[0];
            $mes = $data[1];
            $dia = $data[2];
            $result = checkdate($mes,$dia,$ano);
            if ($result ==1){
                $this->dt_vencimento = $this->busca;
            }
            else{
                return 'Data Inválida';
            }
            
        }
        $query->orFilterWhere(['like', 'cod_barra', $this->busca])
            ->orFilterWhere(['like', 'no_produto', strtoupper($this->busca)])
            ->orFilterWhere(['like', 'categoria.no_descricao', strtoupper($this->busca)])
            ->orFilterWhere(['like', 'fornecedor.no_fornecedor', strtoupper($this->busca)])
            ->orFilterWhere(['like','dt_vencimento',$this->dt_vencimento]);

        return $dataProvider;
    }
}
