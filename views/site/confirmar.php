<?php

use Codeception\PHPUnit\ResultPrinter\HTML as ResultPrinterHTML;
use yii\bootstrap\Html as BootstrapHtml;
use yii\helpers\Html;
?>
<ul>
<li><label>ID DO GRUPO: </label><?=Html::encode($model->id_grupo)?></li>
<li><label>NOME DO GRUPO: </label><?=Html::encode($model->no_grupo)?></li>
</ul>
