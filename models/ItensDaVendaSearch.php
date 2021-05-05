<?php

namespace app\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\ItensDaVenda;

/**
 * ItensDaVendaSearch represents the model behind the search form of `app\models\ItensDaVenda`.
 */
class ItensDaVendaSearch extends ItensDaVenda
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id_item_venda', 'id_venda_fk', 'id_produto_fk', 'nu_quantidade', 'ic_excluido'], 'integer'],
            [['vr_unit_prod'], 'number'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    /**
     * Creates data provider instance with search query applied
     *
     * @param array $params
     *
     * @return ActiveDataProvider
     */
    public function search($params)
    {
        $query = ItensDaVenda::find();

        // add conditions that should always apply here

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        // grid filtering conditions
        $query->andFilterWhere([
            'id_item_venda' => $this->id_item_venda,
            'id_venda_fk' => $this->id_venda_fk,
            'id_produto_fk' => $this->id_produto_fk,
            'vr_unit_prod' => $this->vr_unit_prod,
            'nu_quantidade' => $this->nu_quantidade,
            'ic_excluido' => $this->ic_excluido,
        ]);

        return $dataProvider;
    }
}
