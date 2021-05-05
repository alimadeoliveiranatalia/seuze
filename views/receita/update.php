<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\models\Receita */

$this->title = 'Update Receita: ' . $model->id_receita;
$this->params['breadcrumbs'][] = ['label' => 'Receitas', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id_receita, 'url' => ['view', 'id' => $model->id_receita]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="receita-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
