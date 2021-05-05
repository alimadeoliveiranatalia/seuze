<?php

namespace app\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Vendas;

/**
 * VendasSearch represents the model behind the search form of `app\models\Vendas`.
 */
class VendasSearch extends Vendas
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id_venda', 'id_usuario_fk', 'ic_form_pg', 'ic_situacao_venda', 'id_cliente_fk', 'ic_excluido'], 'integer'],
            [['dt_login', 'dt_venda'], 'safe'],
            [['vr_total', 'vr_desconto', 'vr_acrescimo'], 'number'],
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
        $query = Vendas::find();

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
            'id_venda' => $this->id_venda,
            'id_usuario_fk' => $this->id_usuario_fk,
            'dt_login' => $this->dt_login,
            'dt_venda' => $this->dt_venda,
            'vr_total' => $this->vr_total,
            'ic_form_pg' => $this->ic_form_pg,
            'vr_desconto' => $this->vr_desconto,
            'vr_acrescimo' => $this->vr_acrescimo,
            'ic_situacao_venda' => $this->ic_situacao_venda,
            'id_cliente_fk' => $this->id_cliente_fk,
            'ic_excluido' => $this->ic_excluido,
        ]);

        return $dataProvider;
    }
}
