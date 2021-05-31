<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\Vendas */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="vendas-form">

    

    <?= $form->field($model, 'id_usuario_fk')->textInput() ?>

    <?= $form->field($model, 'dt_login')->textInput() ?>

    <?= $form->field($model, 'dt_venda')->textInput() ?>

    <?= $form->field($model, 'vr_total')->textInput(['maxlength' => true]) ?>

    

    <?= $form->field($model, 'vr_desconto')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'vr_acrescimo')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'ic_situacao_venda')->textInput() ?>

    <?= $form->field($model, 'id_cliente_fk')->textInput() ?>

    <?= $form->field($model, 'ic_excluido')->textInput() ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    

</div>
