<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\ReceitaSearch */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="receita-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'id_receita') ?>

    <?= $form->field($model, 'id_usuario_fk') ?>

    <?= $form->field($model, 'dt_login') ?>

    <?= $form->field($model, 'id_cliente_fk') ?>

    <?= $form->field($model, 'no_descricao') ?>

    <?php // echo $form->field($model, 'ic_situacao') ?>

    <?php // echo $form->field($model, 'vr_receita') ?>

    <?php // echo $form->field($model, 'vr_pago') ?>

    <?php // echo $form->field($model, 'vr_acrescimo') ?>

    <?php // echo $form->field($model, 'vr_desconto') ?>

    <?php // echo $form->field($model, 'vr_juros') ?>

    <?php // echo $form->field($model, 'vr_multa') ?>

    <?php // echo $form->field($model, 'dt_vencimento') ?>

    <?php // echo $form->field($model, 'dt_pagamento') ?>

    <?php // echo $form->field($model, 'ic_cat_receita') ?>

    <?php // echo $form->field($model, 'ic_repeticao') ?>

    <?php // echo $form->field($model, 'no_recebedor') ?>

    <?php // echo $form->field($model, 'de_observacao') ?>

    <?php // echo $form->field($model, 'ic_excluido') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-outline-secondary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
