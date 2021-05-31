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
class AssetVendas extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        
        'pdview_arquivos/autocomplete.css',
        'pdview_arquivos/colorbox.css',
        'pdview_arquivos/grid.css',
        'pdview_arquivos/icons.css',
        'pdview_arquivos/jquery.css',
        'pdview_arquivos/jquery-ui.css',
        'pdview_arquivos/style.css',
        'pdview_arquivos/style_002.css',
        'pdview_arquivos/vh-lightbox.css',
        'PDV-view2_arquivos/autocomplete.css',
        'PDV-view2_arquivos/colorbox.css',
        'PDV-view2_arquivos/grid.css',
        'PDV-view2_arquivos/icons.css',
        'PDV-view2_arquivos/jquery.css',
        'PDV-view2_arquivos/jquery-ui.css',
        'PDV-view2_arquivos/style.css',
        'PDV-view2_arquivos/style_002.css',
        'PDV-view2_arquivos/vh-lightbox.css'
        
    ];
    public $js = [
        'pdview_arquivos/EstoqueAtual.js',
        'pdview_arquivos/FreteCaixa.js',
        'pdview_arquivos/funcoes.js',
        'pdview_arquivos/jquery_007.js',
        'pdview_arquivos/Mascaras.js',
        'pdview_arquivos/SecureSession.js',
        'pdview_arquivos/ValidarIndiceFinanceiro.js',
        'pdview_arquivos/ValidarNumeros.js',
        'pdview_arquivos/xajax_core.js',
        'PDV-view2_arquivos/EstoqueAtual.js',
        'PDV-view2_arquivos/FreteCaixa.js',
        'PDV-view2_arquivos/funcoes.js',
        'PDV-view2_arquivos/jquery_007.js',
        'PDV-view2_arquivos/Mascaras.js',
        'PDV-view2_arquivos/SecureSession.js',
        'PDV-view2_arquivos/ValidarIndiceFinanceiro.js',
        'PDV-view2_arquivos/ValidarNumeros.js',
        'PDV-view2_arquivos/xajax_core.js'
    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
    ];
}
