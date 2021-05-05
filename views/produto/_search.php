<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\ProdutoSearch */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="produto-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'id_produto') ?>

    <?= $form->field($model, 'cod_barra') ?>

    <?= $form->field($model, 'id_categoria_fk') ?>

    <?= $form->field($model, 'id_usuario_fk') ?>

    <?= $form->field($model, 'dt_login') ?>

    <?php // echo $form->field($model, 'ic_cadastral') ?>

    <?php // echo $form->field($model, 'no_produto') ?>

    <?php // echo $form->field($model, 'de_descricao') ?>

    <?php // echo $form->field($model, 'unid_medida') ?>

    <?php // echo $form->field($model, 'id_fornecedor_fk') ?>

    <?php // echo $form->field($model, 'vr_compra') ?>

    <?php // echo $form->field($model, 'vr_venda') ?>

    <?php // echo $form->field($model, 'vr_comissao') ?>

    <?php // echo $form->field($model, 'vr_desconto') ?>

    <?php // echo $form->field($model, 'nu_estoque_atual') ?>

    <?php // echo $form->field($model, 'nu_estoque_min') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-outline-secondary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
