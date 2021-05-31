<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "itens_da_venda".
 *
 * @property int $id_item_venda
 * @property int $id_venda_fk
 * @property int $id_produto_fk
 * @property float $vr_unit_prod
 * @property int $nu_quantidade
 * @property int|null $ic_excluido
 *
 * @property Vendas $vendaFk
 * @property Produto $produtoFk
 */
class ItensDaVenda extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'itens_da_venda';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id_venda_fk', 'id_produto_fk', 'vr_unit_prod', 'nu_quantidade'], 'required'],
            [['id_venda_fk', 'id_produto_fk', 'nu_quantidade', 'ic_excluido'], 'integer'],
            [['vr_unit_prod'], 'number'],
            [['id_venda_fk'], 'exist', 'skipOnError' => true, 'targetClass' => Vendas::class, 'targetAttribute' => ['id_venda_fk' => 'id_venda']],
            [['id_produto_fk'], 'exist', 'skipOnError' => true, 'targetClass' => Produto::class, 'targetAttribute' => ['id_produto_fk' => 'id_produto']],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id_item_venda' => 'Id Item Venda',
            'id_venda_fk' => 'Id Venda Fk',
            'id_produto_fk' => 'Id Produto Fk',
            'vr_unit_prod' => 'Vr Unit Prod',
            'nu_quantidade' => 'Nu Quantidade',
            'ic_excluido' => 'Ic Excluido',
        ];
    }

    /**
     * Gets query for [[VendaFk]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getVendaFk()
    {
        return $this->hasOne(Vendas::class, ['id_venda' => 'id_venda_fk']);
    }

    /**
     * Gets query for [[ProdutoFk]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getProdutoFk()
    {
        return $this->hasOne(Produto::class, ['id_produto' => 'id_produto_fk']);
    }
}
