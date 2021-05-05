<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "fornecedor".
 *
 * @property int $id_fornecedor
 * @property int $ic_tipo_fornecedor
 * @property int $ic_cadastral
 * @property string $no_fornecedor
 * @property string $endereco
 * @property string $bairro
 * @property string $contato
 * @property int $id_usuario_fk
 * @property string|null $dt_login
 * @property int|null $ic_excluido
 *
 * @property UsuarioSistema $usuarioFk
 * @property Produto[] $produtos
 */
class Fornecedor extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'fornecedor';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['ic_tipo_fornecedor', 'no_fornecedor', 'endereco', 'bairro', 'contato', 'id_usuario_fk'], 'required'],
            [['ic_tipo_fornecedor', 'ic_cadastral', 'id_usuario_fk', 'ic_excluido'], 'integer'],
            [['endereco'], 'string'],
            [['dt_login'], 'safe'],
            [['no_fornecedor'], 'string', 'max' => 35],
            [['bairro'], 'string', 'max' => 20],
            [['contato'], 'string', 'max' => 25],
            [['id_usuario_fk'], 'exist', 'skipOnError' => true, 'targetClass' => UsuarioSistema::className(), 'targetAttribute' => ['id_usuario_fk' => 'id_usuario']],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id_fornecedor' => 'Id Fornecedor',
            'ic_tipo_fornecedor' => 'Ic Tipo Fornecedor',
            'ic_cadastral' => 'Ic Cadastral',
            'no_fornecedor' => 'No Fornecedor',
            'endereco' => 'Endereco',
            'bairro' => 'Bairro',
            'contato' => 'Contato',
            'id_usuario_fk' => 'Id Usuario Fk',
            'dt_login' => 'Dt Login',
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
     * Gets query for [[Produtos]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getProdutos()
    {
        return $this->hasMany(Produto::className(), ['id_fornecedor_fk' => 'id_fornecedor']);
    }
}
