<?php

namespace app\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Despesa;

/**
 * DespesaSearch represents the model behind the search form of `app\models\Despesa`.
 */
class DespesaSearch extends Despesa
{
    /**
     * {@inheritdoc}
     */
    public $busca;
    public function rules()
    {
        return [
            [['id_despesa', 'id_usuario_fk', 'ic_situacao', 'ic_cat_despesa', 'ic_forma_pg', 'ic_repeticao'], 'integer'],
            [['dt_login', 'no_descricao', 'dt_vencimento', 'dt_pagamento', 'no_recebedor', 'de_observacao','busca'], 'safe'],
            [['vr_despesa', 'vr_pago', 'vr_acrescimo', 'vr_desconto', 'vr_juros', 'vr_multa'], 'number'],
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
        $query = Despesa::find();

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
            'id_despesa' => $this->id_despesa,
            'id_usuario_fk' => $this->id_usuario_fk,
            'dt_login' => $this->dt_login,
            'ic_situacao' => $this->ic_situacao,
            'vr_despesa' => $this->vr_despesa,
            'vr_pago' => $this->vr_pago,
            'vr_acrescimo' => $this->vr_acrescimo,
            'vr_desconto' => $this->vr_desconto,
            'vr_juros' => $this->vr_juros,
            'vr_multa' => $this->vr_multa,
            'dt_vencimento' => $this->dt_vencimento,
            'dt_pagamento' => $this->dt_pagamento,
            'ic_cat_despesa' => $this->ic_cat_despesa,
            'ic_forma_pg' => $this->ic_forma_pg,
            'ic_repeticao' => $this->ic_repeticao,
        ]);
        if (isset($this->busca)){
            if(str_contains($this->busca,'/')){
                $date = str_replace('/','-',$this->busca);
                $this->busca = date('Y-m-d',strtotime($date));
                $this->dt_vencimento = $this->busca;
            }
        }

        $query->orFilterWhere(['like', 'no_descricao', $this->busca])
            ->orFilterWhere(['like', 'no_recebedor', $this->busca])
            ->orFilterWhere(['like', 'dt_vencimento', $this->dt_vencimento]);

        return $dataProvider;
    }
}
