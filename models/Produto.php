<?php

namespace app\models;

use Yii;
use yii\helpers\ArrayHelper;

/**
 * This is the model class for table "produto".
 *
 * @property int $id_produto
 * @property string|null $cod_barra
 * @property int $id_categoria_fk
 * @property int $id_usuario_fk
 * @property string|null $dt_login
 * @property int|null $ic_cadastral
 * @property string $no_produto
 * @property string|null $de_descricao
 * @property string $unid_medida
 * @property int $id_fornecedor_fk
 * @property float $vr_compra
 * @property float $vr_venda
 * @property float $vr_comissao
 * @property float|null $vr_desconto
 * @property int|null $nu_estoque_atual
 * @property int|null $nu_estoque_min
 *
 * @property ItensDaVenda[] $itensDaVendas
 * @property Categoria $categoriaFk
 * @property UsuarioSistema $usuarioFk
 * @property Fornecedor $fornecedorFk
 */
class Produto extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'produto';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id_categoria_fk', 'id_usuario_fk', 'no_produto', 'unid_medida', 'id_fornecedor_fk', 'vr_compra', 'vr_venda', 'vr_comissao','dt_vencimento'], 'required'],
            [['id_categoria_fk', 'id_usuario_fk', 'ic_cadastral', 'id_fornecedor_fk', 'nu_estoque_atual', 'nu_estoque_min'], 'integer'],
            [['dt_login'], 'safe'],
            [['de_descricao'], 'string'],
            [['vr_compra', 'vr_venda', 'vr_comissao', 'vr_desconto'], 'number'],
            [['cod_barra'], 'string', 'max' => 15],
            [['no_produto'], 'string', 'max' => 50],
            [['unid_medida'], 'string', 'max' => 5],
            [['id_categoria_fk'], 'exist', 'skipOnError' => true, 'targetClass' => Categoria::class, 'targetAttribute' => ['id_categoria_fk' => 'id_categoria']],
            [['id_usuario_fk'], 'exist', 'skipOnError' => true, 'targetClass' => UsuarioSistema::class, 'targetAttribute' => ['id_usuario_fk' => 'id_usuario']],
            [['id_fornecedor_fk'], 'exist', 'skipOnError' => true, 'targetClass' => Fornecedor::class, 'targetAttribute' => ['id_fornecedor_fk' => 'id_fornecedor']],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id_produto' => 'Id Produto',
            'cod_barra' => 'Código de Barra',
            'id_categoria_fk' => 'Categoria',
            'id_usuario_fk' => 'Id Usuario Fk',
            'dt_login' => 'Dt Login',
            'ic_cadastral' => 'Status Cadastral',
            'no_produto' => 'Produto',
            'de_descricao' => 'Descrição',
            'unid_medida' => 'Unid Medida',
            'id_fornecedor_fk' => 'Fornecedor',
            'dt_vencimento' => 'Vencimento',
            'vr_compra' => 'Preço de Compra',
            'vr_venda' => 'Preço de Venda',
            'vr_comissao' => 'Valor da Comissão',
            'vr_desconto' => 'Valor do Desconto',
            'nu_estoque_atual' => 'Quantidade no Estoque Atual',
            'nu_estoque_min' => 'Quantidade Miníma no Estoque',
        ];
    }

    /**
     * Gets query for [[ItensDaVendas]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getItensDaVendas()
    {
        return $this->hasMany(ItensDaVenda::class, ['id_produto_fk' => 'id_produto']);
    }

    /**
     * Gets query for [[CategoriaFk]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getCategoriaFk()
    {
        return $this->hasOne(Categoria::class, ['id_categoria' => 'id_categoria_fk']);
    }
    public function getCategorias(){
        $categorias = Categoria::find()->all();
        return ArrayHelper::map($categorias,'id_categoria','no_descricao');
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
     * Gets query for [[FornecedorFk]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getFornecedorFk()
    {
        return $this->hasOne(Fornecedor::class, ['id_fornecedor' => 'id_fornecedor_fk']);
    }
    public function getFornecedores(){
        $fornecedores = Fornecedor::find()->all();
        return ArrayHelper::map($fornecedores,'id_fornecedor','no_fornecedor');
    }

}
