<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $searchModel app\models\UsuarioSistemaSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Usuario Sistemas';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="usuario-sistema-index">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Create Usuario Sistema', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'id_usuario',
            'id_grupo_fk',
            'no_usuario',
            'no_acesso',
            'co_senha',
            //'ic_p_acesso',
            //'dt_login',
            //'ic_excluido',

            ['class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>


</div>
