<?php

namespace app\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Cliente;

/**
 * ClienteSearch represents the model behind the search form of `app\models\Cliente`.
 */
class ClienteSearch extends Cliente
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id_cliente', 'ic_cadastral', 'id_usuario_fk', 'co_logradouro', 'ic_excluido'], 'integer'],
            [['dt_login', 'no_cliente', 'co_cpf', 'co_rg', 'no_logradouro', 'dt_cadastro'], 'safe'],
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
        $query = Cliente::find();

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
            'id_cliente' => $this->id_cliente,
            'ic_cadastral' => $this->ic_cadastral,
            'id_usuario_fk' => $this->id_usuario_fk,
            'dt_login' => $this->dt_login,
            'co_logradouro' => $this->co_logradouro,
            'dt_cadastro' => $this->dt_cadastro,
            'ic_excluido' => $this->ic_excluido,
        ]);

        $query->andFilterWhere(['like', 'no_cliente', $this->no_cliente])
            ->andFilterWhere(['like', 'co_cpf', $this->co_cpf])
            ->andFilterWhere(['like', 'co_rg', $this->co_rg])
            ->andFilterWhere(['like', 'no_logradouro', $this->no_logradouro]);

        return $dataProvider;
    }
}
