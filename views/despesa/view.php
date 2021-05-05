<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model app\models\Despesa */

$this->title = $model->no_descricao;
$this->params['breadcrumbs'][] = ['label' => 'Despesas', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="despesa-view">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            'no_descricao',
            'ic_situacao',
            'vr_despesa',
            'vr_pago',
            'vr_acrescimo',
            'vr_desconto',
            'vr_juros',
            'vr_multa',
            'dt_vencimento',
            'dt_pagamento',
            'ic_cat_despesa',
            'ic_forma_pg',
            'ic_repeticao',
            'no_recebedor',
            'de_observacao:ntext',
        ],
    ]) ?>
    <p>
        <?= Html::a('Update', ['update', 'id' => $model->id_despesa], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('Delete', ['delete', 'id' => $model->id_despesa], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => 'Are you sure you want to delete this item?',
                'method' => 'post',
            ],
        ]) ?>
        <?= Html::a('Voltar', ['index'], ['class' => 'btn btn-primary']) ?>
    </p>

</div>
