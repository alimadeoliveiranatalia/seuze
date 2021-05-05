<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\Categoria */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="categoria-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'no_descricao')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'id_usuario_fk')->textInput() ?>

    <?= $form->field($model, 'dt_login')->textInput() ?>

    <?= $form->field($model, 'ic_excluido')->textInput() ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
