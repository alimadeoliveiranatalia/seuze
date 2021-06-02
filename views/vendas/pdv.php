<?php
use yii\helpers\Html;
use yii\widgets\ActiveForm;
?>
<div class="card card-default">		
	<div class="card-header">			
		<?=Html::img('pdview_arquivos/logo_topo_vhsys.png',['class'=>'left'])?>                
		<?= Html::a('<span>Operador: </span><span><?=$model->usuarioFk->no_usuario?></span>','usuario-sistema/index',['class'=>'btn-menu right'])?>       
	</div><!--./car-header-->

	<div>
    	<div class="card-header">
    	    <div class="card-tools">
    	        	<?php $form = ActiveForm::begin() ?>
    	        <div id="header">
					<div class="wrapper-fluid">
						<div style="margin-left: 145px;">
							<table onkeypress="if(event.keyCode==13){AdicionarLinha(''); ScrollDown();}" border="0" cellpadding="10px" width="100%">
								<tbody>
									<tr>
										<td>
											<label for="desc_produto">Produto </label>
											<input autocomplete="off" name="desc_produto" id="desc_produto" onkeypress="retirarAcento(this);LimpaProduto(event);" class="input-block" type="text">
											<?= $form->field($itens, 'id_produto_fk')->textInput() ?>
    	    		                	    <input name="id_produto" id="id_produto" value="" type="hidden">
    	    		                	    <input name="cod_produto" id="cod_produto" value="" class="input-block" type="hidden">
    	    		                	    <input name="listapreco" id="listapreco" value="" type="hidden">
										</td>
										<td width="80">
											<label for="qtde_produto">Quantidade </label>
											<input name="qtde_produto" id="qtde_produto" value="1" onkeypress="return (soNums(event,''));" onkeydown="Formata(this,20,event,'')" onkeyup="CalculoProduto();" class="input-block" type="text">
											<?= $form->field($itens, 'nu_quantidade')->textInput() ?>
										</td>						
										<td width="120">
											<label for="valor_unit_produto">Valor Unitário </label>
											<input name="valor_unit_produto" id="valor_unit_produto" onkeypress="return (soNums(event,''));" onkeydown="Formata(this,20,event,'')" onkeyup="CalculoProduto();" class="input-block" type="text">
											<?= $form->field($itens, 'vr_unit_prod')->textInput(['maxlength' => true]) ?>
										</td>
										<td width="120">
											<label for="valor_total_produto">Valor Total </label>
											<input name="valor_total_produto" id="valor_total_produto" readonly="readonly" class="totais_pedido input-block" type="text">
    	    		                	    <input name="QtdeProdutos" id="QtdeProdutos" value="1" type="hidden">
											<?= $form->field($itens, 'total')->textInput()?>
										</td>
										<td width="140">
											<button class="button large green" onclick="AdicionarLinha(''); ScrollDown();">Incluir</button>
											<?= Html::submitButton('Incluir',['class'=>'button large green'])?>
										</td>
									</tr>
								</tbody>
							</table>				
						</div>			
					</div>
				</div>
    	    </div><!--./card-tools-->
    	</div><!--./card-header-->
	</div>

	
	<div id="main" class="wrapper-fluid">		
		<div class="box">
			<table cellpadding="0" cellspacing="0" width="100%">
				<tbody><tr>
					<td valign="top">
                    <div id="Table_Produtos" class="">
						<div class="header">
							<h1 id="numeroPedido">Pedido Nº 0001</h1>
							<div class="desc" id="dadosPedido">29/02/2016 09:04:13 - silva123</div>
                            <div id="hidden_frente">
								<input name="id_frente" id="id_frente" value="417024" type="hidden">
							</div>
			                <input name="SituacaoCaixa" id="SituacaoCaixa" value="Aberto" type="hidden">
						</div>
						<br><br>
						<table class="Table" border="0" cellpadding="10" cellspacing="0" width="100%">
							<tbody><tr class="Table_linha_principal">
								<td width="50">Cod.</td>
								<td>Produto</td>
								<td width="50">Qtde.</td>
								<td width="70">Valor Unit.</td>
								<td width="70">Total</td>
								<td width="40"></td>
							</tr>
						    <tr style="display: table-row;" id="detailItem1" class="item">
								<td valign="top"></td>
								<td valign="top">Computador</td>
								<td valign="top">1</td>
								<td valign="top">100,00</td>
								<td valign="top">100,00</td>
								<td>
									<a href="javascript:ExcluirLinha(1);" tabindex="1">
										<img src="pdv%20view_arquivos/icone_ftrash.gif" class="excluirP" title="Excluir Produto" height="16" border="0" width="16">
								</a> <span class="infosp"><img src="pdv%20view_arquivos/icone_infoprod.png" class="infoprod" id="EstoqueAtual_1" height="16" width="16"></span>
								<input name="id_produto_1" id="id_produto_1" value="3657569" type="hidden"><input name="cod_produto_1" id="cod_produto_1" value="" type="hidden"><input name="desc_produto_1" id="desc_produto_1" value="Computador" type="hidden"><input name="qtde_produto_1" id="qtde_produto_1" value="1" type="hidden"><input name="valor_unit_produto_1" id="valor_unit_produto_1" value="100,00" type="hidden"><input name="valor_total_produto_1" id="valor_total_produto_1" value="100,00" class="totais_pedido" type="hidden"></td></tr><tr id="itens"></tr>
						</tbody></table>
                        <a name="headerprod" id="headerprod"></a>
                    </div>
                    <div id="CaixaLivre" class="caixa-livre box_visualizar">
                    	<img src="pdv%20view_arquivos/icon-pdf-livre.png" alt=""><br>
                        CAIXA LIVRE
                    </div>
                    <div id="AbrindoCaixa" class="caixa-livre box_visualizar">
                        ABRINDO CAIXA...
                    </div>
                    <br>
                    <br>
                    <br>
                    <br>
					</td>
					
				</tr>
			</tbody></table>
		</div>
	</div>

	<div class="card-footer">

		<table border="0" cellpadding="10px" cellspacing="0" width="100%">
			<tbody><tr>
				<td class="subtotal" width="280">SubTotal: <span id="subtotal_div">R$ 100,00</span><input name="valor_total_produtos" id="valor_total_produtos" value="100" type="hidden"></td>
				<td><?= $form->field($model, 'ic_form_pg')->dropDownList($model->pagamento) ?></td>
				<td width="80"><strong>Observações:</strong></td>
				<td><input autocomplete="off" id="obs_pedido" name="obs_pedido" class="input-block" type="text"></td>
				<td width="120">
					<button class="button medium green" onclick="javascript:Confirmar();">Confirmar</button>
				</td>
				<td width="120">
					<button class="button medium yellow" onclick="javascript:Aguardar();">Aguardar</button>
				</td>
				<td width="120">
					<button class="button medium red" onclick="javascript:Cancelar();">Cancelar</button>
				</td>
			</tr>
		</tbody></table>
	</div><!--./card-footer-->
	<input name="ok" id="ok" value="" type="hidden">
	<input name="erro" id="erro" value="" type="hidden">
	<input name="valebrinde" id="valebrinde" value="" type="hidden">
	<input name="operador_atual" id="operador_atual" value="43860" type="hidden">
	<input name="nome_operador_atual" id="nome_operador_atual" value="silva123" type="hidden">
	<div id="Layer_Imprimir"></div>
	<?php ActiveForm::end(); ?>
	<script type="text/javascript">
		window.setInterval("BuscarInfo()", 180000);
		window.setInterval("xajax_PedidosPendentes()", 60000);
		Iniciar();
	</script>


	<div id="qtip-rcontainer"></div>
	<div style="display: none;" id="cboxOverlay"></div>
	<div style="display: none;" tabindex="-1" role="dialog" class="" id="colorbox">
		<div id="cboxWrapper">
			<div>
				<div style="float: left;" id="cboxTopLeft"></div>
				<div style="float: left;" id="cboxTopCenter"></div>
				<div style="float: left;" id="cboxTopRight"></div>
			</div>
			<div style="clear: left;">
				<div style="float: left;" id="cboxMiddleLeft"></div>
				<div style="float: left;" id="cboxContent">
					<div style="float: left;" id="cboxTitle"></div>
					<div style="float: left;" id="cboxCurrent"></div>
					<button id="cboxPrevious" type="button"></button>
					<button id="cboxNext" type="button"></button>
					<button id="cboxSlideshow"></button>
					<div style="float: left;" id="cboxLoadingOverlay"></div>
					<div style="float: left;" id="cboxLoadingGraphic"></div>
				</div>
				<div style="float: left;" id="cboxMiddleRight"></div>
			</div>
			<div style="clear: left;">
				<div style="float: left;" id="cboxBottomLeft"></div>
				<div style="float: left;" id="cboxBottomCenter"></div>
				<div style="float: left;" id="cboxBottomRight"></div>
			</div>
		</div>
		<div style="position: absolute; width: 9999px; visibility: hidden; display: none;"></div>
	</div>
</div><!--./card card-default-->