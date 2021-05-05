<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\Produto */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="produto-form">


    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'cod_barra')->textInput(['maxlength' => true,'placeholder'=>'Informe o código de barras do produto']) ?>

    <?= $form->field($model, 'id_categoria_fk')->dropDownList($model->categorias) ?>

    <?= $form->field($model, 'ic_cadastral')->dropDownList([0=>'INATIVO',1=>'ATIVO']) ?>

    <?= $form->field($model, 'no_produto')->textInput(['maxlength' => true,'placeholder'=>'Informe uma descrição resumida do produto']) ?>

    <?= $form->field($model, 'de_descricao')->textarea(['rows' => 6,'placeholder'=>'Descreva o produto']) ?>

    <?= $form->field($model, 'unid_medida')->textInput(['maxlength' => true,'placeholder'=>'Ex: unid,kg,mg,ml']) ?>

    <?= $form->field($model, 'id_fornecedor_fk')->dropDownList($model->fornecedores) ?>

    <?= $form->field($model, 'dt_vencimento')->textInput(['placeholder' => 'aaaa/mm/dd']) ?>

    <?= $form->field($model, 'vr_compra')->textInput(['maxlength' => true,'onchange' => 'comissao();','placeholder'=>'Informe o valor de compra R$00.00']) ?>

    <?= $form->field($model, 'vr_venda')->textInput(['maxlength' => true,'onchange' => 'comissao();','placeholder'=>'Informe o valor de venda R$00.00']) ?>

    <?= $form->field($model, 'vr_comissao')->textInput(['maxlength' => true,'placeholder'=>'Informe o valor da comissão R$00.00']) ?>

    <?= $form->field($model, 'vr_desconto')->textInput(['maxlength' => true,'placeholder'=>'Informe o valor do desconto R$00.00']) ?>

    <?= $form->field($model, 'nu_estoque_atual')->textInput(['placeholder'=>'Informe a quantidade']) ?>

    <?= $form->field($model, 'nu_estoque_min')->textInput(['placeholder'=>'Informe a quantidade mínima']) ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
<?php
use yii\web\View;
    $js = <<< JS
    // Resolvido https://www.yiiframework.com/doc/guide/2.0/en/output-client-scripts 

    function comissao(){
            
            var vr_compra = document.getElementById("produto-vr_compra").value;
            var vr_venda = document.getElementById("produto-vr_venda").value;
            
            var vr_comissao = vr_venda-vr_compra;
            document.getElementById("produto-vr_comissao").value = vr_comissao;
    };

 
       
    JS;
    
    $this->registerJs($js,View::POS_BEGIN);

?>

