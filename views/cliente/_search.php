<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\ClienteSearch */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="cliente-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'id_cliente') ?>

    <?= $form->field($model, 'ic_cadastral') ?>

    <?= $form->field($model, 'id_usuario_fk') ?>

    <?= $form->field($model, 'dt_login') ?>

    <?= $form->field($model, 'no_cliente') ?>

    <?php // echo $form->field($model, 'co_cpf') ?>

    <?php // echo $form->field($model, 'co_rg') ?>

    <?php // echo $form->field($model, 'no_logradouro') ?>

    <?php // echo $form->field($model, 'co_logradouro') ?>

    <?php // echo $form->field($model, 'dt_cadastro') ?>

    <?php // echo $form->field($model, 'ic_excluido') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-outline-secondary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
