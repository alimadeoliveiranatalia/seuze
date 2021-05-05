<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\UsuarioSistema */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="usuario-sistema-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'id_grupo_fk')->textInput() ?>

    <?= $form->field($model, 'no_usuario')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'no_acesso')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'co_senha')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'ic_p_acesso')->textInput() ?>

    <?= $form->field($model, 'dt_login')->textInput() ?>

    <?= $form->field($model, 'ic_excluido')->textInput() ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
