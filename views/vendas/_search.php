<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\VendasSearch */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="vendas-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'id_venda') ?>

    <?= $form->field($model, 'id_usuario_fk') ?>

    <?= $form->field($model, 'dt_login') ?>

    <?= $form->field($model, 'dt_venda') ?>

    <?= $form->field($model, 'vr_total') ?>

    <?php // echo $form->field($model, 'ic_form_pg') ?>

    <?php // echo $form->field($model, 'vr_desconto') ?>

    <?php // echo $form->field($model, 'vr_acrescimo') ?>

    <?php // echo $form->field($model, 'ic_situacao_venda') ?>

    <?php // echo $form->field($model, 'id_cliente_fk') ?>

    <?php // echo $form->field($model, 'ic_excluido') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-outline-secondary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
