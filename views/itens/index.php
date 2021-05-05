<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $searchModel app\models\ItensDaVendaSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Itens Da Vendas';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="itens-da-venda-index">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Create Itens Da Venda', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'id_item_venda',
            'id_venda_fk',
            'id_produto_fk',
            'vr_unit_prod',
            'nu_quantidade',
            //'ic_excluido',

            ['class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>


</div>
