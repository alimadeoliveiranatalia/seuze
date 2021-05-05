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
class AssetNatalia extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        
        'estilo/css/bootstrap.min.css',
        'estilo/css/font-awesome.min.css',
        'estilo/css/nivo-slider.css',
        'estilo/css/owl.carousel.css',
        'estilo/css/owl.theme.css',
        'estilo/css/responsive.css',
        'estilo/css/style.css'
    ];
    public $js = [
       // 'estilo/js/bootstrap.min.js',
       // 'estilo/js/jquery.min.js',
        'estilo/js/jquery.nicescroll.js',
        'estilo/js/jquery.nivo.slider.js',
        'estilo/js/jquery.scrollUp.min.js',
        'estilo/js/main.js',
        'estilo/js/owl.carousel.min.js',
        'estilo/js/product.js',
        'js/functions/scripts.js'
    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
    ];
}
