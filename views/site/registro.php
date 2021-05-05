<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

?>
<?php $form = ActiveForm::begin();?>
    <?= $form->field($model,'id_grupo')?>
    <?= $form->field($model,'no_grupo')?>
    <div class="form-group"><?=Html::submitButton('Enviar',['class'=>'btn btn-primary'])?></div>
<?php ActiveForm::end();?>