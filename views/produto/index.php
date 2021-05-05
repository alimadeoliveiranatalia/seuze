<?php

use yii\helpers\Html;
use yii\grid\GridView;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $searchModel app\models\ProdutoSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="produto-index">

    <h1><?= Html::encode($this->title) ?></h1>
 
        <?= Html::a('Inserir Produto', ['create'], ['class' => 'btn btn-success']) ?>
    <?php $form = ActiveForm::begin([
        'action'=>['index'],
        'method'=>'get',
        'fieldConfig'=>['template'=>'{input}', 'options'=>['tag'=>false]]
    ]);?>
    <div class="card tools">
        <div class="input-group" style='width:80% ;height:45px'>
            <?= $form->field($searchModel,'busca')->textInput(); ?>
            <div class="input-group-append">
                <?= Html::submitButton('<i class="fas fa-search"></i>',['class'=>'btn btn-default'])?>
            </div><!--./input-group-append-->
        </div><!--./input-group-->
    </div><!--./card-tools-->
    <?php ActiveForm::end();?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            [   'header' => 'Código',
                'value' =>'id_produto'
            ],
            [   'header' => 'Categoria',
                'value' =>'categoriaFk.no_descricao'
            ],
            [   'header' => 'Produto',
                'value' =>'no_produto'
            ],
            [   'header' => 'Preço Venda',
                'value' =>'vr_venda'
            ],
            [   'header' => 'Vencimento',
                'value' =>function ($model){
                    $data = str_replace('-','/',$model->dt_vencimento);
                    return $data;
                }
            ],
            [   'header' => 'Fornecedor',
                'value' =>'fornecedorFk.no_fornecedor'
            ],
            [   'header' => 'Quantidade Estoque',
                'value' =>'nu_estoque_atual'
            ],
            ['header'=>'Ação','class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>


</div>
