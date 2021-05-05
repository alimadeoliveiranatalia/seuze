<?php

namespace app\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\GrupoUsuario;

/**
 * GrupoUsuarioSearch represents the model behind the search form of `app\models\GrupoUsuario`.
 */
class GrupoUsuarioSearch extends GrupoUsuario
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id_grupo', 'ic_permissao', 'ic_excluido'], 'integer'],
            [['no_grupo'], 'safe'],
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
        $query = GrupoUsuario::find();

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
            'id_grupo' => $this->id_grupo,
            'ic_permissao' => $this->ic_permissao,
            'ic_excluido' => $this->ic_excluido,
        ]);

        $query->andFilterWhere(['like', 'no_grupo', $this->no_grupo]);

        return $dataProvider;
    }
}
