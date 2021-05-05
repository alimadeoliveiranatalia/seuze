<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $searchModel app\models\VendasSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Vendas';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="vendas-index">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Create Vendas', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'id_venda',
            'id_usuario_fk',
            'dt_login',
            'dt_venda',
            'vr_total',
            //'ic_form_pg',
            //'vr_desconto',
            //'vr_acrescimo',
            //'ic_situacao_venda',
            //'id_cliente_fk',
            //'ic_excluido',

            ['class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>


</div>
