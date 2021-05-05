<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model app\models\Receita */

$this->title = $model->id_receita;
$this->params['breadcrumbs'][] = ['label' => 'Receitas', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="receita-view">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Update', ['update', 'id' => $model->id_receita], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('Delete', ['delete', 'id' => $model->id_receita], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => 'Are you sure you want to delete this item?',
                'method' => 'post',
            ],
        ]) ?>
    </p>

    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            'id_receita',
            'id_usuario_fk',
            'dt_login',
            'id_cliente_fk',
            'no_descricao',
            'ic_situacao',
            'vr_receita',
            'vr_pago',
            'vr_acrescimo',
            'vr_desconto',
            'vr_juros',
            'vr_multa',
            'dt_vencimento',
            'dt_pagamento',
            'ic_cat_receita',
            'ic_repeticao',
            'no_recebedor',
            'de_observacao:ntext',
            'ic_excluido',
        ],
    ]) ?>

</div>
