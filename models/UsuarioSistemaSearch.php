<?php

namespace app\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\UsuarioSistema;

/**
 * UsuarioSistemaSearch represents the model behind the search form of `app\models\UsuarioSistema`.
 */
class UsuarioSistemaSearch extends UsuarioSistema
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id_usuario', 'id_grupo_fk', 'ic_p_acesso', 'ic_excluido'], 'integer'],
            [['no_usuario', 'no_acesso', 'co_senha', 'dt_login'], 'safe'],
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
        $query = UsuarioSistema::find();

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
            'id_usuario' => $this->id_usuario,
            'id_grupo_fk' => $this->id_grupo_fk,
            'ic_p_acesso' => $this->ic_p_acesso,
            'dt_login' => $this->dt_login,
            'ic_excluido' => $this->ic_excluido,
        ]);

        $query->andFilterWhere(['like', 'no_usuario', $this->no_usuario])
            ->andFilterWhere(['like', 'no_acesso', $this->no_acesso])
            ->andFilterWhere(['like', 'co_senha', $this->co_senha]);

        return $dataProvider;
    }
}
