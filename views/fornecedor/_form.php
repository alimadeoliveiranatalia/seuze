<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\Fornecedor */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="fornecedor-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'ic_tipo_fornecedor')->textInput() ?>

    <?= $form->field($model, 'ic_cadastral')->textInput() ?>

    <?= $form->field($model, 'no_fornecedor')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'endereco')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'bairro')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'contato')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'id_usuario_fk')->textInput() ?>

    <?= $form->field($model, 'dt_login')->textInput() ?>

    <?= $form->field($model, 'ic_excluido')->textInput() ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
