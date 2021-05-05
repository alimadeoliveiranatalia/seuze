<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model app\models\Produto */

$this->title = $model->no_produto;
$this->params['breadcrumbs'][] = ['label' => 'Produtos', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="produto-view">

    <h1><?= Html::encode($this->title) ?></h1>

    

    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            'cod_barra',
            'categoriaFk.no_descricao',
            'ic_cadastral',
            'no_produto',
            'de_descricao:ntext',
            'unid_medida',
            'fornecedorFk.no_fornecedor',
            'dt_vencimento',
            'vr_compra',
            'vr_venda',
            'vr_comissao',
            'vr_desconto',
            'nu_estoque_atual',
            'nu_estoque_min',
        ],
    ]) ?>
    <p>
        <?= Html::a('Update', ['update', 'id' => $model->id_produto], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('Delete', ['delete', 'id' => $model->id_produto], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => 'Are you sure you want to delete this item?',
                'method' => 'post',
            ],
        ]) ?>
        <?= Html::a('Voltar', ['index'], ['class' => 'btn btn-primary']) ?>
    </p>
    

</div>
