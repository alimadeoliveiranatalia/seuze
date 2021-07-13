<?php
use yii\helpers\Html;
use yii\web\View;
use yii\widgets\ActiveForm;
use yii\bootstrap4\Modal;
Modal::begin([
    'title' => 'Fechar Venda',
    'size' => 'modal-xl',
    'id' => 'modalv'
]);
echo"<div id='modalpdv'></div>";
Modal::end();
?>
<div class="card card-default">		
	<div class="card-header">
		<?=Html::img('estilo/img/logo1.png',['class'=>'left'])?><br>			                
		<?= Html::a('<span>Operador: </span>','usuario-sistema/index',['class'=>'btn-menu right'])?>       
	</div><!--./card-header-->
	<div>
	<div class="card-body">        
        <div class="card-tools">
            <div class="input-group" style="width: 400px;">
			<br><br>
              <label for="vendas-busca">Consulte o Produto</label>
			   <input class="form-control" name="ProdutoSearch[busca]" onblur="consultarProd(this)" id="produtosearch-busca" type="text" placeholder="Informe o Produto" > 
            </div><!--./input-group-->       
    	</div><!--./card-tools-->
    	<div class="card-tools">
    	    <?php $form = ActiveForm::begin(['id'=>'sitens']) ?>
			<div class="wrapper-fluid">
				<div style="margin-left: 145px;">
					<table  border="0" cellpadding="10px" width="100%">
						<tbody>
							<tr>
								<td>
									<h2 id="nome_produto"></h2>    	   	                	    
								</td>
								<td width="80">
									<?= $form->field($itens, 'nu_quantidade')->textInput(['onblur'=>'adcionarProd()']) ?>
									<input type="hidden" id="itensdavendaquantidade"  name="ItensDaVenda[quantidade][]" value="">
								</td>
													
								<td width="120">
									<h2 id="valor_unit"></h2>	
								</td>
							</tr>
						</tbody>
					</table>				
				</div>			
			</div><!--./wrapper-fluid-->
    	</div><!--./card-tools-->
    </div><!--./card-body-->	
	<div id="main" class="wrapper-fluid">		
		<div class="box">
			<table cellpadding="0" cellspacing="0" width="100%">
				<tbody>
					<tr>
						<td valign="top">
                    		<div id="Table_Produtos">
								<div class="header">
                    		        <div id="hidden_frente">
										<input name="id_frente" id="id_frente" value="417024" type="hidden">
									</div><!--./#hidden_frente-->
			        		        <input name="SituacaoCaixa" id="SituacaoCaixa" value="Aberto" type="hidden">
								</div><!--./header-->
								<br>
								<br>
								<input type="hidden" name="quantItem" value="0" id="quantItem">
								<table class="Table" border="0" cellpadding="10" cellspacing="0" width="100%">
									<thead>
										<tr>
											<th>Produto</th>
											<th>Quantidade</th>
											<th>Valor</th>
											<th>Valor Total</th>
										</tr>
									</thead>
									<tbody>		
								
										<tr id="itens"></tr>
									</tbody>
								</table>
                    		    <a name="headerprod" id="headerprod"></a>
                    		</div><!--/#tableProdutos-->
                    		<div id="CaixaLivre" class="caixa-livre box_visualizar">
                    			<img src="pdview_arquivos/icon-pdf-livre.png" alt=""><br>
                    		    CAIXA LIVRE
                    		</div><!--./caixa-livre box_visualizar-->
                    		<div id="AbrindoCaixa" class="caixa-livre box_visualizar">
                    		    ABRINDO CAIXA...
                    		</div><!--./caixa-livre box_visualizar-->
                    		<br>
                    		<br>
                    		<br>
                    		<br>
						</td>
					</tr>
				</tbody>
			</table>
		</div><!--./box-->
	</div><!--./wrapper-fluid-->
		
	<input name="ok" id="ok" value="" type="hidden">
	<input name="erro" id="erro" value="" type="hidden">
	<input name="valebrinde" id="valebrinde" value="" type="hidden">
	<input name="operador_atual" id="operador_atual" value="43860" type="hidden">
	<input name="nome_operador_atual" id="nome_operador_atual" value="silva123" type="hidden">
	<div id="Layer_Imprimir"></div>
	<?php ActiveForm::end(); ?>
	<table border="0" cellpadding="10px" cellspacing="0" width="100%">
		<tbody>
			<tr>
				<td class="subtotal" width="280">
					SubTotal: <h2 id="subtotal_div">R$ 00,00</h2>
					
				</td>
				
				<td width="80">
					<strong>Observações:</strong>
				</td>
				<td>
					<input autocomplete="off" id="obs_pedido" name="obs_pedido" class="input-block" type="text">
				</td>
				<td>
					<button class="button medium green" onclick="confirmar();">Confirmar</button>
				</td>
				
				<td width="120">
					<button class="button medium yellow" onclick="javascript:Aguardar();">Aguardar</button>
				</td>
				<td width="120">
					<button class="button medium red" onclick="javascript:Cancelar();">Cancelar</button>
				</td>
			</tr>
		</tbody>
	</table>

	<?php $form = ActiveForm::begin([
            'action'=>['vendas/confirmar-venda'],
			'id'=>'form_p',
            'method'=>'get',
           ]);?>
			 <input name="valor_total_produtos" id="valor_total_produtos" value="0" type="hidden">
			 	
			
	<?php ActiveForm::end(); ?>
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
<?php 
use yii\helpers\Url;
$url=Url::toRoute(['vendas/produto-list'],true);
$url2=Url::toRoute(['vendas/confirmar-venda'],true);
	$js = <<< JS
	
		function consultarProd(prod){
			var q = $('#produtosearch-busca').val();
			if(q!=""){
				$.ajax({
					url:'$url',
					data:'busca='+q,
					type:'get',
					dataType:'json',
					success:function(data){
						var dados = data.results;
						//var cont = dados.length;
						console.log(dados[0]['produto']);
						$('#nome_produto').html(dados[0]['produto']);
						$('#valor_unit').html(dados[0]['vr']);
						$('#itensdavenda-nu_quantidade').val(1);
						$('#itensdavenda-nu_quantidade').focus();
					}
				});
			}
		}
		function adcionarProd(){
			var nro;
			var q = $('#produtosearch-busca').val();
			
				nro = $("#quantItem").val();
				nro++;
				$("#quantItem").val(nro);
				var no_prod;
				no_prod = $("#nome_produto").html();
				var quant, valor, subtotal, total;
				quant = $("#itensdavenda-nu_quantidade").val();
				valor = $("#valor_unit").html();
				subtotal = quant*valor;
				total = $("#valor_total_produtos").val();
				total = subtotal+total*1;
				$("#subtotal_div").html(total);
				$("#valor_total_produtos").val(total); //atualiza
				$("<tr id='item"+nro+"'>").insertBefore("#itens").hide();
				$("<td>"+no_prod+"</td>").appendTo("#item"+nro);
				$("<td>"+quant+"</td>").appendTo("#item"+nro);
				$("<td>"+valor+"</td>").appendTo("#item"+nro);
				$("<td>"+subtotal+"</td>").appendTo("#item"+nro);
				$("</tr>").appendTo("#item"+nro);
		
				$("#item"+nro).show();
				$("#produtosearch-busca").val('');
				$("#produtosearch-busca").focus();		
			
		}
		function confirmar(){
			var form_data;
			//form_data = $('#form_p');
			//var form_data = new FormData($('#form_p')[0]);
			$.ajax({
				url:'$url2',
				data:'total='+$('#valor_total_produtos').val(),
				type:'get',
				dataType:'html',
				success:function(data){
					$("#modalv").modal('show').find('#modalpdv').html(data);			
				}
			});
		}
	JS;
	$this->registerJs($js,View::POS_HEAD);
?>