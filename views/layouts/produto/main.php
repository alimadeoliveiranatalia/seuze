<?php

/* @var $this \yii\web\View */
/* @var $content string */

use app\widgets\Alert;
use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use app\assets\AssetNatalia;

AssetNatalia::register($this);
$this->registerCssFile("https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700");
$this->registerCssFile("https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:400,700");
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">


    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php $this->registerCsrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>
<body>
<?php $this->beginBody() ?>

<div class="wrapper">
    <!-- Main Sidebar Container -->
    <?= $this->render('navbar') ?>
    
 
    <div class="container">
       
        <?= $content ?>
    </div>
    
    <!-- Main Footer -->
    <?= $this->render('footer') ?>
</div>

<footer class="footer">
    <div class="container">

    </div>
</footer>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
