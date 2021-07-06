
<div style="clear: left;">
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
                                                                <td>&lt;
                                                                    label&gt;Complemento
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
                        <h3>R$ <?= $valorTotal?></h3>
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
                        <strong style="color: #406e0e;font-size:24px;" id="Layer_total"><?=$valorTotal?></strong>
                        <input name="confir_produtos" id="confir_produtos" value="100.00" type="hidden">
                        <input name="valor_total_nota" id="valor_total_nota" value="100.00" type="hidden">
                    </td>
                </tr>
                <tr>
                    <td class="box_visualizar" colspan="2" id="LayerReferenciar">
                        <a href="javascript:InfoConfirmar()">+ referenciar cliente</a>
                    </td>
                </tr>
            </tbody>
        </table>
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
                          <option value="Cartão de Crédito">Cartão de Crédito</option>
                          <option value="Cartão de Débito">Cartão de Débito</option>
                          <option value="pix">PIX</option>
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
    <div style="float: left; display: block;" id="cboxTitle">CONFIRMAÇÃO DE PAGAMENTO</div>
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