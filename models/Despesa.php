<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "despesas".
 *
 * @property int $id_despesa
 * @property int $id_usuario_fk
 * @property string|null $dt_login
 * @property string $no_descricao
 * @property int $ic_situacao
 * @property float $vr_despesa
 * @property float|null $vr_pago
 * @property float|null $vr_acrescimo
 * @property float|null $vr_desconto
 * @property float|null $vr_juros
 * @property float|null $vr_multa
 * @property string $dt_vencimento
 * @property string|null $dt_pagamento
 * @property int $ic_cat_despesa
 * @property int $ic_forma_pg
 * @property int $ic_repeticao
 * @property string $no_recebedor
 * @property string|null $de_observacao
 *
 * @property UsuarioSistema $usuarioFk
 */
class Despesa extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'despesas';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id_usuario_fk', 'no_descricao', 'vr_despesa', 'dt_vencimento', 'ic_cat_despesa', 'ic_forma_pg', 'no_recebedor'], 'required'],
            [['id_usuario_fk', 'ic_situacao', 'ic_cat_despesa', 'ic_forma_pg', 'ic_repeticao'], 'integer'],
            [['dt_login', 'dt_vencimento', 'dt_pagamento'], 'safe'],
            [['vr_despesa', 'vr_pago', 'vr_acrescimo', 'vr_desconto', 'vr_juros', 'vr_multa'], 'number'],
            [['de_observacao'], 'string'],
            [['no_descricao'], 'string', 'max' => 30],
            [['no_recebedor'], 'string', 'max' => 25],
            [['id_usuario_fk'], 'exist', 'skipOnError' => true, 'targetClass' => UsuarioSistema::class, 'targetAttribute' => ['id_usuario_fk' => 'id_usuario']],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id_despesa' => 'Id Despesa',
            'id_usuario_fk' => 'Id Usuario Fk',
            'dt_login' => 'Dt Login',
            'no_descricao' => 'Descrição Da Despesa',
            'ic_situacao' => 'Situação',
            'vr_despesa' => 'Valor Despesa',
            'vr_pago' => 'Valor Pago',
            'vr_acrescimo' => 'Valor de Acréscimo',
            'vr_desconto' => 'Valor de Desconto',
            'vr_juros' => 'Valor de Juros',
            'vr_multa' => 'Valor de Multa',
            'dt_vencimento' => 'Data de Vencimento',
            'dt_pagamento' => 'Data de Pagamento',
            'ic_cat_despesa' => 'Tipo de Despesa',
            'ic_forma_pg' => 'Forma  de Pagamento',
            'ic_repeticao' => 'Quantas vezes Parcelado?',
            'no_recebedor' => 'Quem Recebeu o Pagamento?',
            'de_observacao' => 'Observações',
        ];
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
}
