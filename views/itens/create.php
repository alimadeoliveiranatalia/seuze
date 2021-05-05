<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\models\ItensDaVenda */

$this->title = 'Create Itens Da Venda';
$this->params['breadcrumbs'][] = ['label' => 'Itens Da Vendas', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="itens-da-venda-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
