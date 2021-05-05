<?php

namespace app\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Receita;

/**
 * ReceitaSearch represents the model behind the search form of `app\models\Receita`.
 */
class ReceitaSearch extends Receita
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id_receita', 'id_usuario_fk', 'id_cliente_fk', 'ic_situacao', 'ic_cat_receita', 'ic_repeticao', 'ic_excluido'], 'integer'],
            [['dt_login', 'no_descricao', 'dt_vencimento', 'dt_pagamento', 'no_recebedor', 'de_observacao'], 'safe'],
            [['vr_receita', 'vr_pago', 'vr_acrescimo', 'vr_desconto', 'vr_juros', 'vr_multa'], 'number'],
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
        $query = Receita::find();

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
            'id_receita' => $this->id_receita,
            'id_usuario_fk' => $this->id_usuario_fk,
            'dt_login' => $this->dt_login,
            'id_cliente_fk' => $this->id_cliente_fk,
            'ic_situacao' => $this->ic_situacao,
            'vr_receita' => $this->vr_receita,
            'vr_pago' => $this->vr_pago,
            'vr_acrescimo' => $this->vr_acrescimo,
            'vr_desconto' => $this->vr_desconto,
            'vr_juros' => $this->vr_juros,
            'vr_multa' => $this->vr_multa,
            'dt_vencimento' => $this->dt_vencimento,
            'dt_pagamento' => $this->dt_pagamento,
            'ic_cat_receita' => $this->ic_cat_receita,
            'ic_repeticao' => $this->ic_repeticao,
            'ic_excluido' => $this->ic_excluido,
        ]);

        $query->andFilterWhere(['like', 'no_descricao', $this->no_descricao])
            ->andFilterWhere(['like', 'no_recebedor', $this->no_recebedor])
            ->andFilterWhere(['like', 'de_observacao', $this->de_observacao]);

        return $dataProvider;
    }
}
