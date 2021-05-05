<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\Despesa */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="despesa-form">

    <?php $form = ActiveForm::begin(); ?>

    
    <?= $form->field($model, 'no_descricao')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'ic_situacao')->dropDownList(['0'=>'PENDENTE','1'=>'PAGO']) ?>

    <?= $form->field($model, 'vr_despesa')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'vr_pago')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'vr_acrescimo')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'vr_desconto')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'vr_juros')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'vr_multa')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'dt_vencimento')->textInput() ?>

    <?= $form->field($model, 'dt_pagamento')->textInput() ?>

    <?= $form->field($model, 'ic_cat_despesa')->dropDownList(['0'=>'CUSTOS FIXOS','1'=>'FORNECEDORES','2'=>'INVESTIMENTOS']) ?>

    <?= $form->field($model, 'ic_forma_pg')->dropDownList(['0'=>'DINHEIRO','1'=>'PIX','2'=>'DÉBITO','3'=>'CRÉDITO','4'=>'FIADO']) ?>

    <?= $form->field($model, 'ic_repeticao')->textInput() ?>

    <?= $form->field($model, 'no_recebedor')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'de_observacao')->textarea(['rows' => 6]) ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
