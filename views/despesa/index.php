<?php

use phpDocumentor\Reflection\DocBlock\Tags\Return_;
use yii\helpers\Html;
use yii\grid\GridView;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $searchModel app\models\DespesaSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Despesas';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="despesa-index">

    <h1><?= Html::encode($this->title) ?></h1>
        <?= Html::a('Cadastrar Despesa', ['create'], ['class' => 'btn btn-success']) ?>

    <?php $form = ActiveForm::begin([
        'action'=>['index'],
        'method'=>'get',
        'fieldConfig'=>['template'=>'{input}','options'=>['tag'=>false]]
    ]) ?>
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
            ['header'=>'Código',
             'value'=>'id_despesa'
            ],
            ['header'=>'Vencimento',
             'value'=>'dt_vencimento'
            ],
            ['header'=>'Situação',
             'format'=>'raw',
             'value'=>function($model){
                if($model->ic_situacao==0){
                    return 'PENDENTE';
                }
                else{
                   return 'PAGO'; 
                }
             }
            ],
            ['header'=>'Despesa',
             'value'=>'no_descricao'
            ],
            ['header'=>'Valor',
             'value'=>'vr_despesa'
            ],
            
            ['header' => 'Ação','class'=>'yii\grid\ActionColumn'],
        ],
    ]); ?>


</div>
