<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "usuario_sistema".
 *
 * @property int $id_usuario
 * @property int $id_grupo_fk
 * @property string $no_usuario
 * @property string $no_acesso
 * @property string $co_senha
 * @property int|null $ic_p_acesso
 * @property string|null $dt_login
 * @property int|null $ic_excluido
 *
 * @property Categoria[] $categorias
 * @property Cliente[] $clientes
 * @property Despesas[] $despesas
 * @property Fornecedor[] $fornecedors
 * @property Produto[] $produtos
 * @property Receitas[] $receitas
 * @property GrupoUsuario $grupoFk
 * @property Vendas[] $vendas
 */
class UsuarioSistema extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'usuario_sistema';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id_grupo_fk', 'no_usuario', 'no_acesso', 'co_senha'], 'required'],
            [['id_grupo_fk', 'ic_p_acesso', 'ic_excluido'], 'integer'],
            [['dt_login'], 'safe'],
            [['no_usuario'], 'string', 'max' => 70],
            [['no_acesso'], 'string', 'max' => 20],
            [['co_senha'], 'string', 'max' => 32],
            [['id_grupo_fk'], 'exist', 'skipOnError' => true, 'targetClass' => GrupoUsuario::className(), 'targetAttribute' => ['id_grupo_fk' => 'id_grupo']],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id_usuario' => 'Id Usuario',
            'id_grupo_fk' => 'Id Grupo Fk',
            'no_usuario' => 'No Usuario',
            'no_acesso' => 'No Acesso',
            'co_senha' => 'Co Senha',
            'ic_p_acesso' => 'Ic P Acesso',
            'dt_login' => 'Dt Login',
            'ic_excluido' => 'Ic Excluido',
        ];
    }

    /**
     * Gets query for [[Categorias]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getCategorias()
    {
        return $this->hasMany(Categoria::className(), ['id_usuario_fk' => 'id_usuario']);
    }

    /**
     * Gets query for [[Clientes]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getClientes()
    {
        return $this->hasMany(Cliente::className(), ['id_usuario_fk' => 'id_usuario']);
    }

    /**
     * Gets query for [[Despesas]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getDespesas()
    {
        return $this->hasMany(Despesas::className(), ['id_usuario_fk' => 'id_usuario']);
    }

    /**
     * Gets query for [[Fornecedors]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getFornecedors()
    {
        return $this->hasMany(Fornecedor::className(), ['id_usuario_fk' => 'id_usuario']);
    }

    /**
     * Gets query for [[Produtos]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getProdutos()
    {
        return $this->hasMany(Produto::className(), ['id_usuario_fk' => 'id_usuario']);
    }

    /**
     * Gets query for [[Receitas]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getReceitas()
    {
        return $this->hasMany(Receitas::className(), ['id_usuario_fk' => 'id_usuario']);
    }

    /**
     * Gets query for [[GrupoFk]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getGrupoFk()
    {
        return $this->hasOne(GrupoUsuario::className(), ['id_grupo' => 'id_grupo_fk']);
    }

    /**
     * Gets query for [[Vendas]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getVendas()
    {
        return $this->hasMany(Vendas::className(), ['id_usuario_fk' => 'id_usuario']);
    }
}
