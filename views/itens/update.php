<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\models\ItensDaVenda */

$this->title = 'Update Itens Da Venda: ' . $model->id_item_venda;
$this->params['breadcrumbs'][] = ['label' => 'Itens Da Vendas', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id_item_venda, 'url' => ['view', 'id' => $model->id_item_venda]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="itens-da-venda-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
