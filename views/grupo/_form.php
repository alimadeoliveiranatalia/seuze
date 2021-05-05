<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\GrupoUsuario */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="grupo-usuario-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'no_grupo')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'ic_permissao')->textInput() ?>

    <?= $form->field($model, 'ic_excluido')->textInput() ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
