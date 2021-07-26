<?php
use yii\web\View;
?>
<div style="clear: left;">    
        <form id="formConfirmar" name="formConfirmar" method="post" action="#" onsubmit="return false;">

    <div style="background: #f8f8f8; border: 1px solid #c1ced4; width: 405px; float: left; padding: 20px;">
        <table class="" id="LayerPagamentoAVista" border="0" cellpadding="5" cellspacing="0" width="100%">
            <tbody>
                <tr>
                    <td width="130">
                        <label>Total da compra:</label>
                    </td>
                    <td align="right">
                        <h5>R$ <?= $valorTotal?></h5>
                        <input id="total_da_compra" value="" type="hidden">
                    </td>
                </tr>
                <tr>
                    <td width="190">
                        <label>Forma de Pagamento:</label>
                    </td>
                    <td align="right">
                        <select name="forma_pagamento" id="forma_pagamento">
                          <option selected="selected" value="0">Dinheiro</option>
                          <option value="1">Cartão de Crédito</option>
                          <option value="2">Cartão de Débito</option>
                          <option value="3">PIX</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td width="150">
                        <label>Valor 
                            <span id="title_valor">Recebido</span>:
                        </label>
                    </td>
                    <td align="right">
                        <input name="valor_recebido" id="valor_recebido" onkeypress="passarTroco();" style="width:100px;" autocomplete="off" type="text">
                    </td>
                </tr>
                <tr>
                    <td style="padding-bottom: 20px;">
                        <label for="desc">Desconto:</label>
                    </td>
                    <td style="padding-bottom: 20px;" align="right">
              	        <input id="desconto" onkeypress="descontar()" type="text">
                    </td>
                </tr>
                <tr>
                    <td style="border-top: 1px solid #c1ced4; padding-top: 20px;">
                        <label for="">Total a pagar:</label>
                    </td>
                    <td style="border-top: 1px solid #c1ced4; padding-top: 20px;" align="right">
                        <h1 style="color: #406e0e;" id="Layer_total">R$ <?=$valorTotal?></h1>
                        <input id="capt" value="<?=$valorTotal?>" type="hidden">
                        <input name="confir_produtos" id="confir_produtos" value="100.00" type="hidden">
                        <input name="valor_total_nota" id="valor_total_nota" value="100.00" type="hidden">
                    </td>
                </tr>
                <tr id="Layer_troco">
                    <td style="border-top: 1px solid #c1ced4; padding-top: 20px;" width="150">
                        <label>Troco:</label>
                    </td>
                    <td style="border-top: 1px solid #c1ced4; padding-top: 20px;" align="right">
                        <strong style="color: #406e0e; font-size:16px" id="Layer_trocoValor">R$ 0,00</strong>
                        <input name="troco_pedido" id="troco_pedido" value="0" type="hidden">
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="clearfix"></div>
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tbody>
            <tr>
		        <td align="right">
                    <br><br>
                    <button class="button medium green" onclick="javascript:ConfirmarPedido('Imprimir')" id="salvarImprimir" style="width:auto;font-size:16px;line-height:18px;">
                        &nbsp;&nbsp;Emitir Recibo Simples&nbsp;&nbsp;
                    </button>
                    <button class="button medium green" onclick="javascript:ConfirmarPedido('')" id="salvar" style="width:auto;font-size:16px;line-height:18px;">
                        &nbsp;&nbsp;Finalizar e Sair&nbsp;&nbsp;
                    </button>
                    <button class="button medium red" onclick="javascript:$.fn.colorbox.close();" style="width:auto;font-size:16px;line-height:18px;">
                        &nbsp;&nbsp;Cancelar&nbsp;&nbsp;
                    </button>
                    <input name="id_frente" id="id_frente" value="417024" type="hidden">
                    <input name="id_pedido" id="id_pedido" value="1" type="hidden">
                    <input name="id_vendedor" id="id_vendedor" value="43860" type="hidden">
                    <input name="obs_pedido" id="obs_pedido" value="" type="hidden">
                    <input name="nome_operador" id="nome_operador" value="silva123" type="hidden">
                    <input name="id_operador" id="id_operador" value="43860" type="hidden">
                </td>
            </tr>
        </tbody>
    </table>
</div>
</form>
</div>
    <div style="float: left; display: none;" id="cboxCurrent"></div>
    <button style="display: none;" id="cboxPrevious" type="button"></button>
    <button style="display: none;" id="cboxNext" type="button"></button>
    <button style="display: none;" id="cboxSlideshow"></button>
    <div style="float: left; display: none;" id="cboxLoadingOverlay"></div>
    <div style="float: left; display: none;" id="cboxLoadingGraphic"></div>
    <button id="cboxClose" type="button">close</button>
</div>
<div style="float: left; height: 419px;" id="cboxMiddleRight"></div>
</div>
<div style="clear: left;">
    <div style="float: left;" id="cboxBottomLeft"></div>
    <div style="float: left; width: 920px;" id="cboxBottomCenter"></div>
    <div style="float: left;" id="cboxBottomRight"></div>
</div>
</div>
<?php
$js = <<< JS
    $('#forma_pagamento').on('change',function(){
        var tipo = this.value;
        switch (tipo){
            case '1':
                credito();
            break;
            case '2':
                debito();
            break;
            default:
                zerotaxa();
        }
        
    });
    function debito(){
        var compra = $('#capt').val();
		var total_debito = (compra*0.0199)+compra*1;
        $('#Layer_total').html(total_debito);
	}
	function credito(){
        var compra = $('#capt').val();
		var total_credito = (compra*0.0303)+compra*1;
        $('#Layer_total').html(total_credito);
	}
    $('#valor_recebido').on('change', function(vr){
        if (vr !=0 && vr !=null){      
            var compra = $('#capt').val();
            var vr_receb = $('#valor_recebido').val();
            troco = vr_receb - compra;
            console.log('compra = '+compra);
            console.log('vr_receb = '+vr_receb);
            $('#Layer_trocoValor').html(troco); 
        }
    });
    $('#desconto').on('change', function(vr){
        if (vr!=0 && vr!=null){
            var compra = $('#capt').val();
            var vr = $('#desconto').val();
            desconto = compra - vr;
            $('#Layer_total').html(desconto);
        }
    });
    function descontar(){
        
    }
    
    function zerotaxa(){
        var compra = $('#capt').val();
        total_t = (compra*0)+compra*1;
        $('#Layer_total').html(total_t);
    }
JS;
$this->registerJs($js,View::POS_HEAD);
?>