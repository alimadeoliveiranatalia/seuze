<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $searchModel app\models\ReceitaSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Receitas';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="receita-index">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Create Receita', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'id_receita',
            'id_usuario_fk',
            'dt_login',
            'id_cliente_fk',
            'no_descricao',
            //'ic_situacao',
            //'vr_receita',
            //'vr_pago',
            //'vr_acrescimo',
            //'vr_desconto',
            //'vr_juros',
            //'vr_multa',
            //'dt_vencimento',
            //'dt_pagamento',
            //'ic_cat_receita',
            //'ic_repeticao',
            //'no_recebedor',
            //'de_observacao:ntext',
            //'ic_excluido',

            ['class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>


</div>
