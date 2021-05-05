<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\models\Vendas */

$this->title = 'Update Vendas: ' . $model->id_venda;
$this->params['breadcrumbs'][] = ['label' => 'Vendas', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id_venda, 'url' => ['view', 'id' => $model->id_venda]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="vendas-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
