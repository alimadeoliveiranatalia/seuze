<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\DespesaSearch */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="despesa-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'id_despesa') ?>

    <?= $form->field($model, 'id_usuario_fk') ?>

    <?= $form->field($model, 'dt_login') ?>

    <?= $form->field($model, 'no_descricao') ?>

    <?= $form->field($model, 'ic_situacao') ?>

    <?php // echo $form->field($model, 'vr_despesa') ?>

    <?php // echo $form->field($model, 'vr_pago') ?>

    <?php // echo $form->field($model, 'vr_acrescimo') ?>

    <?php // echo $form->field($model, 'vr_desconto') ?>

    <?php // echo $form->field($model, 'vr_juros') ?>

    <?php // echo $form->field($model, 'vr_multa') ?>

    <?php // echo $form->field($model, 'dt_vencimento') ?>

    <?php // echo $form->field($model, 'dt_pagamento') ?>

    <?php // echo $form->field($model, 'ic_cat_despesa') ?>

    <?php // echo $form->field($model, 'ic_forma_pg') ?>

    <?php // echo $form->field($model, 'ic_repeticao') ?>

    <?php // echo $form->field($model, 'no_recebedor') ?>

    <?php // echo $form->field($model, 'de_observacao') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-outline-secondary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
