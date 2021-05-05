<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\ItensDaVendaSearch */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="itens-da-venda-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'id_item_venda') ?>

    <?= $form->field($model, 'id_venda_fk') ?>

    <?= $form->field($model, 'id_produto_fk') ?>

    <?= $form->field($model, 'vr_unit_prod') ?>

    <?= $form->field($model, 'nu_quantidade') ?>

    <?php // echo $form->field($model, 'ic_excluido') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-outline-secondary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
