<?php
use yii\helpers\Html;
use app\assets\AssetVendas;

AssetVendas::register($this);
?>
<?php $this->beginPage()?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php $this->registerCsrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>
<body>
    <?php $this->beginBody()?>
        <div>
            <!-- Main Sidebar Container -->
               
            <div>
            <?= $content ?>
            </div><!--./container-->   
            <!-- Main Footer -->
                   
        </div><!--./wrapper-->
        <footer class="footer">
            <div class="container"></div>
        </footer>
    <?php $this->endBody() ?>    
</body>
</html>
<?php $this->endPage() ?>