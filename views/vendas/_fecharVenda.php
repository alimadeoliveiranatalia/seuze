<div id="header">
	<div class="main-bar">
		<div class="wrapper-fluid">
			<div class="left">
				<img src="PDV%20-%20view2_arquivos/logo_topo_vhsys.png" title="VHSYS">
			</div><!--./left-->
            <div class="left">
            	<div class="box_visualizar" id="valebrinde_div" style="font-size: 18px;color: #FF0;margin: 10px;margin-left: 50px;">VALE BRINDE</div>
            </div><!--./left-->
			<div class="right">
                <a href="#" class="btn-menu">
                	<span>Operador: </span>
                    <span id="nome-operador">silva123</span> 
                </a>
                <a href="javascript:FecharJanela()">
                    <span class="icon close"></span>
                </a>
                <ul class="list-inline menu-top" id="lista-operadores"></ul>		
            </div><!--./right-->
		</div><!--./wrapper-fluid-->
	</div><!--./main-bar-->
	<div class="wrapper-fluid">
		<div class="left">
			<div class="avatar"><img src="PDV%20-%20view2_arquivos/logo.jpg" id="featured" border="0" width="100"></div>
		</div><!--./left-->
		<div style="margin-left: 145px;">			
			<table onkeypress="if(event.keyCode==13){AdicionarLinha(''); ScrollDown();}" border="0" cellpadding="10px" width="100%">
				<tbody>
                    <tr>
					    <td width="80">
					    	<label for="qtde_produto">Quantidade </label>
					    	<input name="qtde_produto" id="qtde_produto" value="1" onkeypress="return (soNums(event,''));" onkeydown="Formata(this,20,event,'')" onkeyup="CalculoProduto();" class="input-block" type="text">
					    </td>
					    <td>
					    	<label for="desc_produto">Produto </label>
					    	<input autocomplete="off" name="desc_produto" id="desc_produto" onkeypress="retirarAcento(this);LimpaProduto(event);" class="input-block" type="text">
                            <input name="id_produto" id="id_produto" value="" type="hidden">
                            <input name="cod_produto" id="cod_produto" value="" class="input-block" type="hidden">
                            <input name="listapreco" id="listapreco" value="" type="hidden">
					    </td>
					    <td width="120">
					    	<label for="valor_unit_produto">Valor Unit�rio </label>
					    	<input name="valor_unit_produto" id="valor_unit_produto" onkeypress="return (soNums(event,''));" onkeydown="Formata(this,20,event,'')" onkeyup="CalculoProduto();" class="input-block" type="text">
					    </td>
					    <td width="120">
					    	<label for="valor_total_produto">Valor Total </label>
					    	<input name="valor_total_produto" id="valor_total_produto" readonly="readonly" class="totais_pedido input-block" type="text">
                            <input name="QtdeProdutos" id="QtdeProdutos" value="1" type="hidden">
					    </td>
					    <td width="140">
					    	<button class="button large green" onclick="AdicionarLinha(''); ScrollDown();">Incluir</button>
					    </td>
				    </tr>
			    </tbody>
            </table>			
		</div><!--style-->
		<div class="clr"></div>
	</div><!--./wrapper-fluid-->
</div><!--header-->	
<div id="main" class="wrapper-fluid">	
	<div class="box">
		<table cellpadding="0" cellspacing="0" width="100%">
			<tbody>
                <tr>
				    <td valign="top">
                        <div id="Table_Produtos" class="">
				        	<div class="header">
				        		<h1 id="numeroPedido">Pedido N� 0001</h1>
				        		<div class="desc" id="dadosPedido">29/02/2016 09:04:13 - silva123</div>
                                <div id="hidden_frente"><input name="id_frente" id="id_frente" value="417024" type="hidden"></div>
		                        <input name="SituacaoCaixa" id="SituacaoCaixa" value="Aberto" type="hidden">
				        	</div><!--./header-->
				        	<br><br>
				        	<table class="Table" border="0" cellpadding="10" cellspacing="0" width="100%">
				        		<tbody>
                                    <tr class="Table_linha_principal">
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
                                    <td valign="top">1,00</td>
                                    <td valign="top">100,00</td>
                                    <td valign="top">100,00</td>
                                    <td>
                                        <a href="javascript:ExcluirLinha(1);" tabindex="1">
                                            <img src="PDV%20-%20view2_arquivos/icone_ftrash.gif" class="excluirP" title="Excluir Produto" height="16" border="0" width="16">
                                        </a> 
                                        <span class="infosp">
                                            <img src="PDV%20-%20view2_arquivos/icone_infoprod.png" class="infoprod" id="EstoqueAtual_1" height="16" width="16">
                                        </span>
                                        <input name="id_produto_1" id="id_produto_1" value="3657569" type="hidden">
                                        <input name="cod_produto_1" id="cod_produto_1" value="" type="hidden">
                                        <input name="desc_produto_1" id="desc_produto_1" value="Computador" type="hidden">
                                        <input name="qtde_produto_1" id="qtde_produto_1" value="1,00" type="hidden">
                                        <input name="valor_unit_produto_1" id="valor_unit_produto_1" value="100,00" type="hidden">
                                        <input name="valor_total_produto_1" id="valor_total_produto_1" value="100,00" class="totais_pedido" type="hidden">
                                    </td>
                                </tr>
                                <tr id="itens"></tr>
				        	</tbody>
                        </table>
                        <a name="headerprod" id="headerprod"></a>
                        </div><!--./div tableProduto-->
                        <div id="CaixaLivre" class="caixa-livre box_visualizar">
                        	<img src="PDV%20-%20view2_arquivos/icon-pdf-livre.png" alt=""><br>
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
				    <td style="padding-left: 40px;" valign="top" width="200">
				        <h3>Pedidos em Aberto</h3>
				        <div class="overflow">
				        	<ul class="list-dashed list-slim" id="pedidosPendurados">
                                <li>
                                    <a href="javascript:ObterPedido('417024')">
                                        strong>1</strong> - silva123 - 09:04
                                    </a>
                                </li>
                            </ul>
				        </div><!--./overflow-->
				    </td>
			    </tr>
		    </tbody>
        </table>
	</div><!--./box-->
</div><!--./wrapper-fluid-->
<div class="footer rodape">
	<table border="0" cellpadding="10px" cellspacing="0" width="100%">
		<tbody>
            <tr>
			    <td class="subtotal" width="280">
                    SubTotal: <span id="subtotal_div">R$ 100,00</span>
                    <input name="valor_total_produtos" id="valor_total_produtos" value="100" type="hidden">
                </td>
			    <td width="80">
                    <strong>Observa��es:</strong>
                </td>
			    <td>
                    <input autocomplete="off" id="obs_pedido" name="obs_pedido" class="input-block" type="text">
                </td>
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
	    </tbody>
    </table>
</div><!--./footer rodape-->
<input name="ok" id="ok" value="" type="hidden">
<input name="erro" id="erro" value="" type="hidden">
<input name="valebrinde" id="valebrinde" value="" type="hidden">
<input name="operador_atual" id="operador_atual" value="43860" type="hidden">
<input name="nome_operador_atual" id="nome_operador_atual" value="silva123" type="hidden">
<div id="Layer_Imprimir"></div>
<script type="text/javascript">
	window.setInterval("BuscarInfo()", 180000);
	window.setInterval("xajax_PedidosPendentes()", 60000);
	Iniciar();
</script>
<div id="qtip-rcontainer"></div>
<div style="display: block; opacity: 0.3; cursor: pointer; visibility: visible;" id="cboxOverlay"></div>
<div style="display: block; visibility: visible; top: 185px; left: 340px; position: absolute; width: 920px; height: 419px;" tabindex="-1" role="dialog" class="" id="colorbox">
    <div style="height: 419px; width: 920px;" id="cboxWrapper"><div>
    <div style="float: left;" id="cboxTopLeft"></div>
    <div style="float: left; width: 920px;" id="cboxTopCenter"></div>
    <div style="float: left;" id="cboxTopRight"></div>
</div>
<div style="clear: left;">
    <div style="float: left; height: 419px;" id="cboxMiddleLeft"></div>
    <div style="float: left; width: 920px; height: 419px;" id="cboxContent">
        <div style="display: block; width: 870px; overflow: auto; height: 369px;" id="cboxLoadedContent">
            <form id="formClienteRapido" name="formClienteRapido" method="post" action="#" onsubmit="return false;">
                <div class="vh-modal">
                    <div class="vh-overlay">
                        <div class="vh-body">
                            <div class="vh-content">
                                <table border="0" cellpadding="3" cellspacing="3" width="100%">
                                    <tbody>
                                        <tr>
                                            <td valign="top"><div class="box-conteudo" style="width:750px;">
                                                <div class="topo-conteudo">
                                                    <h2>Dados do Cliente</h2>
                                                </div><!--./topo-conteudo-->
                                                <div class="content" id="RapidoFormCadastro">
                                                    <table border="0" cellpadding="2" cellspacing="2" width="100%">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <label>Tipo de Pessoa</label><br>
                                                                    <select name="tipo_pessoa" id="tipo_pessoa" onchange="AlterarTipoPessoa(this.value)" style="width: 160px;">
                                                                      <option selected="selected" value="PF">Pessoa F�sica</option>
                                                                      <option value="PJ">Pessoa Jur�dica</option>
                                                                    </select>
                                                                </td>
                                                                <td>
                                                                    <label id="Desc_CNPJ" class="box_visualizar">CNPJ</label>
                                                                    <label id="Desc_CPF">CPF</label>
                                                                    <br>
                                                                    <div style="display: table;">
                                                                        <input id="cnpj_cliente" name="cnpj_cliente" size="15" maxlength="18" onkeypress="if(document.getElementById('tipo_pessoa').value == 'PJ'){
                                                                             return MaskCNPJ(this, event);
                                                                        }else if(document.getElementById('tipo_pessoa').value == 'PF'){	
                                                                             return MaskCPF(this, event);}" onblur="ValidarCliente(this.value)" style="vertical-align:middle" type="text">
                                                                        &nbsp;
                                                                        <span class="btn-group-search" id="Layer_buscarcnpj" style="margin-left:-5px;">
                                                                            <span id="Layer_BuscaReceita">
                                                                             	<a href="javascript:BuscarCNPJ('cnpj_cliente')" class="btn btn-cinza btn-search" title="Consulta Cadastral" id="BuscaReceita"></a>
                                                                            </span>
                                                                            <a href="javascript:ConsultarCNPJ('cnpj_cliente')" class="btn btn-azul btn-search" title="Consultar no Serasa" id="BuscaSerasa"></a>
                                                                        </span>
                                                                  </div>
                                                                </td>
                                                                <td width="220">
                                                                    <label id="Desc_IE" class="box_visualizar">Inscri��o Estadual</label>
                                                                    <label id="Desc_RG">RG</label>
                                                                    <br>
                                                                    <input id="iinsc_estadual_cliente" name="iinsc_estadual_cliente" size="10" onkeypress="return (soNums(event,'-.'));" type="text">
                                                                    <label id="Desc_IE_ISENTO" class="box_visualizar"><input name="isento" id="isento" onclick="SelecionarISENTO('')" type="checkbox"> ISENTO</label>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2">
                                                                    <label id="Desc_Razao" class="box_visualizar">Raz�o Social</label>
                                                                    <label id="Desc_Nome">Nome</label>
                                                                    <br>
                                                                    <input id="razao_cliente" name="razao_cliente" size="40" type="text">
                                                                </td>
                                                                <td id="Layer_Fantasia" class="box_visualizar"><label>Fantasia</label>
                                                                    <br>
                                                                    <input id="fantasia_cliente" name="fantasia_cliente" size="15" type="text">
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2">
                                                                    <label>CEP</label>
                                                                    <br>
                                                                    <div style="display: table;">
                                                                        <input name="cep_cliente" id="cep_cliente" size="10" maxlength="10" onkeypress="return MaskCEP(this, event)" style="vertical-align:middle" type="text">
                                                                        &nbsp;
                                                                        <span class="btn-group-search" id="Layer_cep">
                                                                            <a href="javascript:BuscarCEP('')" class="btn btn-cinza btn-search" title="Buscar CEP"></a>
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td>&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2">
                                                                    <label>Endere�o</label>
                                                                    <br>
                                                                    <input id="endereco_cliente" name="endereco_cliente" size="40" type="text">
                                                                </td>
                                                                <td>
                                                                    <label>N�mero</label>
                                                                    <br>
                                                                    <input name="numero_cliente" id="numero_cliente" size="15" maxlength="7" type="text">
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2">
                                                                    <label>Bairro</label>
                                                                    <br>
                                                                    <input id="bairro_cliente" name="bairro_cliente" size="30" type="text">
                                                                </td>
                                                                <td><
                                                                    label>Complemento</label>
                                                                    <br>
                                                                    <input id="complemento_cliente" name="complemento_cliente" size="15" type="text">
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2">
                                                                    <label>Cidade</label>
                                                                    <br>
                                                                    <input id="cidade_cliente" name="cidade_cliente" size="40" onkeypress="retirarAcento(this);LimpaCidade(event)" autocomplete="off" type="text">
                                                                    <input name="cidade_cliente_cod" id="cidade_cliente_cod" value="" type="hidden">
                                                                </td>
                                                                <td>
                                                                    <label>Estado</label>
                                                                    <br>
                                                                    <select name="uf_cliente" id="uf_cliente" style="width:170px;">
                                                                        <option selected="selected" value="">Selecione</option>
                                                                        <option value="AC">Acre</option>
                                                                        <option value="AL">Alagoas</option>
                                                                        <option value="AP">Amap�</option>
                                                                        <option value="AM">Amazonas</option>
                                                                        <option value="BA">Bahia</option>
                                                                        <option value="CE">Cear�</option>
                                                                        <option value="DF">Distrito Federal</option>
                                                                        <option value="ES">Espirito Santo</option>
                                                                        <option value="EX">Exterior</option>
                                                                        <option value="GO">Goias</option>
                                                                        <option value="MA">Maranh�o</option>
                                                                        <option value="MT">Mato Grosso</option>
                                                                        <option value="MS">Mato Grosso do Sul</option>
                                                                        <option value="MG">Minas Gerais</option>
                                                                        <option value="PA">Par�</option>
                                                                        <option value="PB">Para�ba</option>
                                                                        <option value="PR">Paran�</option>
                                                                        <option value="PE">Pernambuco</option>
                                                                        <option value="PI">Piau�</option>
                                                                        <option value="RJ">Rio de Janeiro</option>
                                                                        <option value="RN">Rio Grande do Norte</option>
                                                                        <option value="RS">Rio Grande do Sul</option>
                                                                        <option value="RO">Rond�nia</option>
                                                                        <option value="RR">Roraima</option>
                                                                        <option value="SC">Santa Catarina</option>
                                                                        <option value="SP">S�o Paulo</option>
                                                                        <option value="SE">Sergipe</option>
                                                                        <option value="TO">Tocantins</option>
                                                                    </select>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2">
                                                                    <label>E-mail</label>
                                                                    <br>
                                                                    <input id="email_cliente" name="email_cliente" size="40" type="text">
                                                                </td>
                                                                <td>
                                                                    <label>Telefone</label>
                                                                    <br>
                                                                    <input name="fone_cliente" id="fone_cliente" size="15" maxlength="20" class="telefone" type="text">
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2">&nbsp;</td>
                                                                <td>&nbsp;</td>
                                                            </tr>
                                                            <tr id="RapidoBotoes">
                                                                <td colspan="2">
                                                                    <button class="button medium green" onclick="javascript:SalvarCliente()" id="salvarCliente" style="width:auto;font-size:16px;line-height:18px;">&nbsp;&nbsp;Salvar&nbsp;&nbsp;</button>
                                                                    <button class="button medium" onclick="javascript:closeDialogCliente()" id="cancelarCliente" style="width:auto;font-size:16px;line-height:18px;">&nbsp;&nbsp;Cancelar&nbsp;&nbsp;</button>
                                                                    <input name="cliente" id="cliente" value="" type="hidden">
                                                                    <input name="Tipo" id="Tipo" value="Cliente" type="hidden">
                                                                </td>
                                                                <td>&nbsp;</td>
                                                            </tr>
                                                            <tr id="RapidoAlterarPermissao" class="box_visualizar">
                                                                <td colspan="3" align="center">
                                                                    <strong>Seu usu�rio n�o possui permiss�o para alterar este Cliente!</strong>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div id="RapidoCadastrarPermissao" class="content box_visualizar">
                                                    <div class="box-dashed" style="background:#FFF;">
                                                        <p align="center">
                                                            <img src="PDV%20-%20view2_arquivos/icon-user.png" alt="">
                                                        </p>
                                                        <p align="center">Seu usu�rio n�o possui permiss�o para cadastrar um Cliente!</p>
                                                    </div><!--./box-dashead-->       
                                                </div><!--./content box_visualizar-->
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>						
                        <button class="vh-close" type="button" onclick="closeDialogCliente();"></button>
                    </div>
                </div>
            </div>
        </form>
        <form id="formConfirmar" name="formConfirmar" method="post" action="#" onsubmit="return false;">
            <div style="width: 870px; margin: auto;">
                <div style="width: 360px; float: left; margin-right: 20px; padding: 20px;">
                    <table border="0" cellpadding="5" cellspacing="0" width="100%">
            <tbody>
                <tr>
                    <td width="130">
                        <label>Total da compra:</label>
                    </td>
                    <td align="right">
                        <strong>R$ 100,00</strong>
                    </td>
                </tr>
		        <tr>
                    <td style="padding-bottom: 20px;">
                        <label for="desc">Desconto:</label>
                    </td>
                    <td style="padding-bottom: 20px;" align="right">
              	        <input name="confir_desconto" id="confir_desconto" onkeypress="return (soNums(event,''));" onkeydown="Formata(this,20,event,2)" onkeyup="CalculoAcrescimoDesconto();" style="width: 100px;" type="text"> R$
						<input name="pdv_tipo_desconto" id="pdv_tipo_desconto" value="" type="hidden">
                        <input name="desconto_pedido" id="desconto_pedido" value="" type="hidden">
                    </td>
                </tr>
                <tr>
                    <td style="border-top: 1px solid #c1ced4; padding-top: 20px;">
                        <label for="">Total a pagar:</label>
                    </td>
                    <td style="border-top: 1px solid #c1ced4; padding-top: 20px;" align="right">
                        <strong style="color: #406e0e;font-size:24px;" id="Layer_total">R$ 100,00</strong>
                        <input name="confir_produtos" id="confir_produtos" value="100.00" type="hidden">
                        <input name="valor_total_nota" id="valor_total_nota" value="100.00" type="hidden">
                    </td>
                </tr>
                <tr>
                     <td style="padding-bottom: 20px;">
                         <label>Pagamento: </label>
                     </td>
                     <td style="padding-bottom: 20px;" align="right">
                         <label>
                             <input name="tipo_pagamento" id="tipo_pagamento" value="1" checked="checked" onclick="TrocarTipoPagamento(1)" type="radio"> 
                             A vista
                         </label>
                         &nbsp;&nbsp;
                         <label>
                             <input name="tipo_pagamento" id="tipo_pagamento" value="2" onclick="TrocarTipoPagamento(2)" type="radio">
                              Parcelado
                         </label>
                     </td>
                </tr>
                <tr class="" id="Layer_info">
                     <td style="border-top: 1px solid #c1ced4; padding-top: 20px;">
                         <label for="">Cliente ou CPF:</label>
                     </td>
                     <td style="border-top: 1px solid #c1ced4; padding-top: 20px; position:relative">
                         <input autocomplete="off" id="nome_cliente" name="nome_cliente" onkeypress="retirarAcento(this);LimpaCliente(event);MascaraCPFTexto(this)" style="width: 200px;float:right" onblur="VerificaCliente()" type="text">
                         <input name="id_cliente" id="id_cliente" value="" type="hidden">
                         <input name="consumidor_final" id="consumidor_final" value="" type="hidden">
                     </td>
                </tr>
                <tr>
                    <td class="box_visualizar" colspan="2" id="LayerReferenciar">
                        <a href="javascript:InfoConfirmar()">+ referenciar cliente</a>
                    </td>
                </tr>
            </tbody>
        </table>
        <div id="LayerDadosCliente_Info" class="box_visualizar">
            <a href="javascript:AbrirCadastroCliente()" tabindex="1">Deseja atualizar o cadastro deste cliente?</a>
        </div>
        <div id="LayerDadosCliente_Info2" class="box_visualizar">
            <a href="javascript:AbrirCadastroCliente()" tabindex="1">Este cliente n�o possui cadastro, deseja complet�-lo?</a>
        </div>
    </div>
    <div style="background: #f8f8f8; border: 1px solid #c1ced4; width: 405px; float: left; padding: 20px;">
        <table class="" id="LayerPagamentoAVista" border="0" cellpadding="5" cellspacing="0" width="100%">
            <tbody>
                <tr>
                    <td width="190">
                        <label>Forma de Pagamento:</label>
                    </td>
                    <td align="right">
                        <select name="forma_pagamento" id="forma_pagamento" onchange="TrocarFormaPagamento(this.value)">
                          <option selected="selected" value="Dinheiro">Dinheiro</option>
                          <option value="Cart�o de Cr�dito">Cart�o de Cr�dito</option>
                          <option value="Cart�o de D�bito">Cart�o de D�bito</option>
                          <option value="Cheque">Cheque</option>
                          <option value="Cr�dito Loja">Cr�dito Loja</option>
                          <option value="Vale Alimenta��o">Vale Alimenta��o</option>
                          <option value="Vale Refei��o">Vale Refei��o</option>
                          <option value="Vale Presente">Vale Presente</option>
                          <option value="Vale Combust�vel">Vale Combust�vel</option>
                          <option value="Outros">Outros</option>
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
                        <input name="valor_recebido" id="valor_recebido" onkeypress="return (soNums(event,''));" onkeydown="Formata(this,20,event,2)" onkeyup="CalculoTroco();" style="width:100px;" autocomplete="off" type="text">
                    </td>
                </tr>
                <tr>
                    <td width="190">
                        <label>Conta Banc�ria:</label>
                    </td>
                    <td align="right">
                        <select name="id_banco" id="id_banco" style="width:150px;">
			    			<option value="54573" selected="selected">Conta Inicial (Caixinha)</option>
			    		</select>
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
        <table id="LayerPagamentoParcelado" class="box_visualizar" border="0" cellpadding="5" cellspacing="0" width="100%">
            <tbody>
                <tr>
                    <td>
                        <label>N�mero de Parcelas: </label>
                    </td>
                    <td>
                        <input name="condicao_pagamento" id="condicao_pagamento" onkeypress="return (soNums(event,''));" size="3" maxlength="2" type="text">
                        <input name="gerar_parcelas" id="gerar_parcelas" value="Gerar" class="button small" onclick="CalculoParcelas()" type="button">
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <div id="Layer_Condicao"></div>
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
    <div style="float: left; display: block;" id="cboxTitle">CONFIRMA��O DE PAGAMENTO</div>
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
<div style="position: absolute; width: 9999px; visibility: hidden; display: none;"></div>
</div>