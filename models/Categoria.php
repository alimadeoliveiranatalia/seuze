<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "categoria".
 *
 * @property int $id_categoria
 * @property string $no_descricao
 * @property int $id_usuario_fk
 * @property string|null $dt_login
 * @property int|null $ic_excluido
 *
 * @property UsuarioSistema $usuarioFk
 * @property Produto[] $produtos
 */
class Categoria extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'categoria';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['no_descricao', 'id_usuario_fk'], 'required'],
            [['id_usuario_fk', 'ic_excluido'], 'integer'],
            [['dt_login'], 'safe'],
            [['no_descricao'], 'string', 'max' => 20],
            [['id_usuario_fk'], 'exist', 'skipOnError' => true, 'targetClass' => UsuarioSistema::class, 'targetAttribute' => ['id_usuario_fk' => 'id_usuario']],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id_categoria' => 'Id Categoria',
            'no_descricao' => 'No Descricao',
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
        return $this->hasOne(UsuarioSistema::class, ['id_usuario' => 'id_usuario_fk']);
    }

    /**
     * Gets query for [[Produtos]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getProdutos()
    {
        return $this->hasMany(Produto::class, ['id_categoria_fk' => 'id_categoria']);
    }
}
