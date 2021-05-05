<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\Cliente */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="cliente-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'ic_cadastral')->textInput() ?>

    <?= $form->field($model, 'id_usuario_fk')->textInput() ?>

    <?= $form->field($model, 'dt_login')->textInput() ?>

    <?= $form->field($model, 'no_cliente')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'co_cpf')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'co_rg')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'no_logradouro')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'co_logradouro')->textInput() ?>

    <?= $form->field($model, 'dt_cadastro')->textInput() ?>

    <?= $form->field($model, 'ic_excluido')->textInput() ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
