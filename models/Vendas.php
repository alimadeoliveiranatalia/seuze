<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "vendas".
 *
 * @property int $id_venda
 * @property int $id_usuario_fk
 * @property string|null $dt_login
 * @property string $dt_venda
 * @property float $vr_total
 * @property int $ic_form_pg
 * @property float|null $vr_desconto
 * @property float|null $vr_acrescimo
 * @property int|null $ic_situacao_venda
 * @property int $id_cliente_fk
 * @property int|null $ic_excluido
 *
 * @property ItensDaVenda[] $itensDaVendas
 * @property UsuarioSistema $usuarioFk
 * @property Cliente $clienteFk
 */
class Vendas extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'vendas';
    }

    /**
     * {@inheritdoc}
     */
    public $busca;
    public function rules()
    {
        return [
            [['id_usuario_fk', 'dt_venda', 'vr_total', 'ic_form_pg', 'id_cliente_fk'], 'required'],
            [['id_usuario_fk', 'ic_form_pg', 'ic_situacao_venda', 'id_cliente_fk', 'ic_excluido'], 'integer'],
            [['dt_login', 'dt_venda','busca'], 'safe'],
            [['vr_total', 'vr_desconto', 'vr_acrescimo'], 'number'],
            [['id_usuario_fk'], 'exist', 'skipOnError' => true, 'targetClass' => UsuarioSistema::class, 'targetAttribute' => ['id_usuario_fk' => 'id_usuario']],
            [['id_cliente_fk'], 'exist', 'skipOnError' => true, 'targetClass' => Cliente::class, 'targetAttribute' => ['id_cliente_fk' => 'id_cliente']],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id_venda' => 'Id Venda',
            'id_usuario_fk' => 'Id Usuario Fk',
            'dt_login' => 'Dt Login',
            'dt_venda' => 'Dt Venda',
            'vr_total' => 'Vr Total',
            'ic_form_pg' => 'Ic Form Pg',
            'vr_desconto' => 'Vr Desconto',
            'vr_acrescimo' => 'Vr Acrescimo',
            'ic_situacao_venda' => 'Ic Situacao Venda',
            'id_cliente_fk' => 'Id Cliente Fk',
            'ic_excluido' => 'Ic Excluido',
        ];
    }

    /**
     * Gets query for [[ItensDaVendas]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getItensDaVendas()
    {
        return $this->hasMany(ItensDaVenda::class, ['id_venda_fk' => 'id_venda']);
    }

    /**
     * Gets query for [[UsuarioFk]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getUsuarioFk()
    {
        return $this->hasOne(UsuarioSistema::class, ['id_usuario' => 'id_usuario_fk']);
    }

    /**
     * Gets query for [[ClienteFk]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getClienteFk()
    {
        return $this->hasOne(Cliente::class, ['id_cliente' => 'id_cliente_fk']);
    }
    public function getPagamento(){
        return Lookup::items('formapag');
    }
    public function beforeSave($insert)
    {
        
    }
}
