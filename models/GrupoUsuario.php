<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "grupo_usuario".
 *
 * @property int $id_grupo
 * @property string $no_grupo
 * @property int|null $ic_permissao
 * @property int|null $ic_excluido
 *
 * @property UsuarioSistema[] $usuarioSistemas
 */
class GrupoUsuario extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'grupo_usuario';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['no_grupo'], 'required'],
            [['no_grupo'], 'string'],
            [['ic_permissao', 'ic_excluido'], 'integer'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id_grupo' => 'Id Grupo',
            'no_grupo' => 'No Grupo',
            'ic_permissao' => 'Ic Permissao',
            'ic_excluido' => 'Ic Excluido',
        ];
    }

    /**
     * Gets query for [[UsuarioSistemas]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getUsuarioSistemas()
    {
        return $this->hasMany(UsuarioSistema::className(), ['id_grupo_fk' => 'id_grupo']);
    }
}
