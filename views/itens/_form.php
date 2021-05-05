<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\ItensDaVenda */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="itens-da-venda-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'id_venda_fk')->textInput() ?>

    <?= $form->field($model, 'id_produto_fk')->textInput() ?>

    <?= $form->field($model, 'vr_unit_prod')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'nu_quantidade')->textInput() ?>

    <?= $form->field($model, 'ic_excluido')->textInput() ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
