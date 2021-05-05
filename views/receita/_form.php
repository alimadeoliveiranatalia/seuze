<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\Receita */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="receita-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'id_usuario_fk')->textInput() ?>

    <?= $form->field($model, 'dt_login')->textInput() ?>

    <?= $form->field($model, 'id_cliente_fk')->textInput() ?>

    <?= $form->field($model, 'no_descricao')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'ic_situacao')->textInput() ?>

    <?= $form->field($model, 'vr_receita')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'vr_pago')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'vr_acrescimo')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'vr_desconto')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'vr_juros')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'vr_multa')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'dt_vencimento')->textInput() ?>

    <?= $form->field($model, 'dt_pagamento')->textInput() ?>

    <?= $form->field($model, 'ic_cat_receita')->textInput() ?>

    <?= $form->field($model, 'ic_repeticao')->textInput() ?>

    <?= $form->field($model, 'no_recebedor')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'de_observacao')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'ic_excluido')->textInput() ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
