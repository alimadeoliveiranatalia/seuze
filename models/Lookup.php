<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "tb_lookup".
 *
 * @property int $id_lookup
 * @property string $de_nome
 * @property string $de_tipo
 * @property int $nu_codigo
 * @property int $nu_posicao
 */
class Lookup extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    private static $itens = array();
    public static function tableName()
    {
        return 'tb_lookup';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['de_nome', 'de_tipo', 'nu_codigo', 'nu_posicao'], 'required'],
            [['nu_codigo', 'nu_posicao'], 'integer'],
            [['de_nome', 'de_tipo'], 'string', 'max' => 30],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id_lookup' => 'Id Lookup',
            'de_nome' => 'De Nome',
            'de_tipo' => 'De Tipo',
            'nu_codigo' => 'Nu Codigo',
            'nu_posicao' => 'Nu Posicao',
        ];
    }
    public static function items($tipo){
        if(!isset(self::$itens[$tipo])){
            self::buscarItens($tipo);
            return self::$itens[$tipo];
        }

    }
    private static function buscarItens($tipo){
        self::$itens[$tipo] = array();
        $models = parent::find()->where(['de_tipo'=>$tipo])->orderBy(['nu_posicao'=>SORT_ASC])->all();
        foreach ($models as $i){
            self::$itens[$tipo][$i['nu_codigo']] = $i['de_nome']; 
            /**
             * $itens['zona']['1'] = 'zona norte'
             * $itens['zona']['2'] = 'zona sul'
             */
        }
    }
    public static function trazerItem($tipo,$cod){
        if(!isset(self::$itens[$tipo]))
			self::buscarItens($tipo);
		return isset(self::$itens[$tipo][$cod]) ? self::$itens[$tipo][$cod] : false;
    }
}
