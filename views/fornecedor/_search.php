<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\FornecedorSearch */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="fornecedor-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'id_fornecedor') ?>

    <?= $form->field($model, 'ic_tipo_fornecedor') ?>

    <?= $form->field($model, 'ic_cadastral') ?>

    <?= $form->field($model, 'no_fornecedor') ?>

    <?= $form->field($model, 'endereco') ?>

    <?php // echo $form->field($model, 'bairro') ?>

    <?php // echo $form->field($model, 'contato') ?>

    <?php // echo $form->field($model, 'id_usuario_fk') ?>

    <?php // echo $form->field($model, 'dt_login') ?>

    <?php // echo $form->field($model, 'ic_excluido') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-outline-secondary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
