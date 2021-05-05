<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "receitas".
 *
 * @property int $id_receita
 * @property int $id_usuario_fk
 * @property string|null $dt_login
 * @property int $id_cliente_fk
 * @property string $no_descricao
 * @property int|null $ic_situacao
 * @property float $vr_receita
 * @property float|null $vr_pago
 * @property float|null $vr_acrescimo
 * @property float|null $vr_desconto
 * @property float|null $vr_juros
 * @property float|null $vr_multa
 * @property string $dt_vencimento
 * @property string|null $dt_pagamento
 * @property int $ic_cat_receita
 * @property int|null $ic_repeticao
 * @property string $no_recebedor
 * @property string|null $de_observacao
 * @property int|null $ic_excluido
 *
 * @property UsuarioSistema $usuarioFk
 * @property Cliente $clienteFk
 */
class Receita extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'receitas';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id_usuario_fk', 'id_cliente_fk', 'no_descricao', 'vr_receita', 'dt_vencimento', 'ic_cat_receita', 'no_recebedor'], 'required'],
            [['id_usuario_fk', 'id_cliente_fk', 'ic_situacao', 'ic_cat_receita', 'ic_repeticao', 'ic_excluido'], 'integer'],
            [['dt_login', 'dt_vencimento', 'dt_pagamento'], 'safe'],
            [['vr_receita', 'vr_pago', 'vr_acrescimo', 'vr_desconto', 'vr_juros', 'vr_multa'], 'number'],
            [['de_observacao'], 'string'],
            [['no_descricao'], 'string', 'max' => 30],
            [['no_recebedor'], 'string', 'max' => 25],
            [['id_usuario_fk'], 'exist', 'skipOnError' => true, 'targetClass' => UsuarioSistema::className(), 'targetAttribute' => ['id_usuario_fk' => 'id_usuario']],
            [['id_cliente_fk'], 'exist', 'skipOnError' => true, 'targetClass' => Cliente::className(), 'targetAttribute' => ['id_cliente_fk' => 'id_cliente']],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id_receita' => 'Id Receita',
            'id_usuario_fk' => 'Id Usuario Fk',
            'dt_login' => 'Dt Login',
            'id_cliente_fk' => 'Id Cliente Fk',
            'no_descricao' => 'No Descricao',
            'ic_situacao' => 'Ic Situacao',
            'vr_receita' => 'Vr Receita',
            'vr_pago' => 'Vr Pago',
            'vr_acrescimo' => 'Vr Acrescimo',
            'vr_desconto' => 'Vr Desconto',
            'vr_juros' => 'Vr Juros',
            'vr_multa' => 'Vr Multa',
            'dt_vencimento' => 'Dt Vencimento',
            'dt_pagamento' => 'Dt Pagamento',
            'ic_cat_receita' => 'Ic Cat Receita',
            'ic_repeticao' => 'Ic Repeticao',
            'no_recebedor' => 'No Recebedor',
            'de_observacao' => 'De Observacao',
            'ic_excluido' => 'Ic Excluido',
        ];
    }

    /**
     * Gets query for [[UsuarioFk]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getUsuarioFk()
    {
        return $this->hasOne(UsuarioSistema::className(), ['id_usuario' => 'id_usuario_fk']);
    }

    /**
     * Gets query for [[ClienteFk]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getClienteFk()
    {
        return $this->hasOne(Cliente::className(), ['id_cliente' => 'id_cliente_fk']);
    }
}
