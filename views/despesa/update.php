<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\models\Despesa */

$this->title = $model->no_descricao;
$this->params['breadcrumbs'][] = ['label' => 'Despesas', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id_despesa, 'url' => ['view', 'id' => $model->id_despesa]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="despesa-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
