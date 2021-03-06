<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\GrupoUsuarioSearch */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="grupo-usuario-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'id_grupo') ?>

    <?= $form->field($model, 'no_grupo') ?>

    <?= $form->field($model, 'ic_permissao') ?>

    <?= $form->field($model, 'ic_excluido') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-outline-secondary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
