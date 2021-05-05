<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace app\assets;

use yii\web\AssetBundle;

/**
 * Main application asset bundle.
 *
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'css/site.css',
        'css/estilo/nivo-silder.css',
        'css/estilo/owl.carousel.css',
        'css/estilo/owl.theme.css',
        'css/estilo/responsive.css',
        'css/estilo/style.css'
    ];
    public $js = [
        'js/estilo/bootstrap.min.js',
        'js/estilo/jquery.min.js',
        'js/estilo/jquery.nicescroll.js',
        'js/estilo/jquery.nivo.slider.js',
        'js/estilo/jquery.scrollUp.min.js',
        'js/estilo/main.js',
        'js/estilo/owl.carousel.min.js',
        'js/estilo/product.js',
    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
    ];
}
