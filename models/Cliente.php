<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "cliente".
 *
 * @property int $id_cliente
 * @property int $ic_cadastral
 * @property int $id_usuario_fk
 * @property string|null $dt_login
 * @property string $no_cliente
 * @property string $co_cpf
 * @property string|null $co_rg
 * @property string $no_logradouro
 * @property int $co_logradouro
 * @property string|null $dt_cadastro
 * @property int|null $ic_excluido
 *
 * @property UsuarioSistema $usuarioFk
 * @property Receitas[] $receitas
 * @property Vendas[] $vendas
 */
class Cliente extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'cliente';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['ic_cadastral', 'id_usuario_fk', 'co_logradouro', 'ic_excluido'], 'integer'],
            [['id_usuario_fk', 'no_cliente', 'co_cpf', 'no_logradouro', 'co_logradouro'], 'required'],
            [['dt_login', 'dt_cadastro'], 'safe'],
            [['no_cliente', 'no_logradouro'], 'string', 'max' => 30],
            [['co_cpf'], 'string', 'max' => 11],
            [['co_rg'], 'string', 'max' => 15],
            [['id_usuario_fk'], 'exist', 'skipOnError' => true, 'targetClass' => UsuarioSistema::className(), 'targetAttribute' => ['id_usuario_fk' => 'id_usuario']],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id_cliente' => 'Id Cliente',
            'ic_cadastral' => 'Ic Cadastral',
            'id_usuario_fk' => 'Id Usuario Fk',
            'dt_login' => 'Dt Login',
            'no_cliente' => 'No Cliente',
            'co_cpf' => 'Co Cpf',
            'co_rg' => 'Co Rg',
            'no_logradouro' => 'No Logradouro',
            'co_logradouro' => 'Co Logradouro',
            'dt_cadastro' => 'Dt Cadastro',
            'ic_excluido' => 'Ic Excluido',
        ];
    }

    /**
     * Gets query for [[UsuarioFk]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getUsuarioFk()
    {
        return $this->hasOne(UsuarioSistema::className(), ['id_usuario' => 'id_usuario_fk']);
    }

    /**
     * Gets query for [[Receitas]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getReceitas()
    {
        return $this->hasMany(Receitas::className(), ['id_cliente_fk' => 'id_cliente']);
    }

    /**
     * Gets query for [[Vendas]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getVendas()
    {
        return $this->hasMany(Vendas::className(), ['id_cliente_fk' => 'id_cliente']);
    }
}
