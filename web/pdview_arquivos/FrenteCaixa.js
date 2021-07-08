function Iniciar()
	{
		$('#desc_produto').focus();
	    $('#desc_produto').simpleAutoComplete('/includes/autocomplete/produtos.php',{
		autoCompleteClassName: 'autocomplete',
		selectedClassName: 'sel',
		identifier: 'produtoLista',
	    },SelecionarProduto);
		
	    $('#obs_pedido').simpleAutoComplete('/includes/autocomplete/pdv-obs.php',{
		autoCompleteClassName: 'autocomplete',
		selectedClassName: 'sel',
		identifier: 'obs',
		topoCampo: 'Sim'
	    });
		
		$(".infoprod").addClass("box_visualizar");
		
		var originalClose = $.fn.colorbox.close;
		$.fn.colorbox.close = function(){ originalClose(); $('#desc_produto').focus(); };
		
		xajax_PedidosPendentes();
		xajax_ObterDadosOperador()
	}
function SelecionarOperador()
	{
		$('.menu-top').slideToggle();
	}
function TrocarOperador(id_operador,nome_operador)
	{
		$("#operador_atual").val(id_operador);
		$("#nome_operador_atual").val(nome_operador);
		$("#nome-operador").html(nome_operador);
		SelecionarOperador();
	}
function SelecionarProduto(par)
	{
		var valor_unitario = par[2];
		if(valor_unitario.indexOf("#") > 0)
			{
				var listaPreco = {};
				listaPreco[par[0]] = {};
				
				var listas = valor_unitario.split("#");
				var listaAtual = "";
				for(var i=0; i < listas.length; i++)
					{
						listaAtual = listas[i].split("-");
						listaPreco[par[0]][listaAtual[0]] = ConverteMoeda(listaAtual[1]);
					}

				valor_unitario = listaPreco[par[0]][$("#listapreco").val()];
				if(DesFormataMoeda(valor_unitario) <= 0){ valor_unitario = listaPreco[par[0]][0]; }
			}
		
		$("#itensdavenda-id_produto_fk").val(par[0]);
		$("#cod_produto").val(par[7]);
		$("#desc_produto").val(par[1]);
		$("#itensdavenda-vr_unit_prod").val(valor_unitario);
		CalculoProduto();
		
		//VERIFICA SE O PRODUTO PODE SER VENDIDO SEM ESTOQUE 
		xajax_VerificarBloquearEstoque(par[0]);

	}
function LimpaProduto(event)
	{
		 if ((event.keyCode <= 8) || ((event.keyCode >= 46) && (event.keyCode <= 111)) || (event.keyCode >= 186))
			{
				$('#id_produto').val('');
				$('#valor_unit_produto').val('');
				$('#valor_total_produto').val('');
			}
	}
function SelecionarCliente(par)
	{
		$("#id_cliente").val(par[0]);
		$("#nome_cliente").val(par[1]);
		$("#consumidor_final").val(par[8]);
		
		VerificaCliente();
	}
function LimpaCliente(event)
	{
		if ((event.keyCode <= 8) || ((event.keyCode >= 46) && (event.keyCode <= 111)) || (event.keyCode >= 186))
			{
				$('#id_cliente').val('');
			}
	}
function SelecionarCidade(par)
	{
		$("#cidade_cliente_cod").val(par[0]);
		$("#cidade_cliente").val(par[2]);
		$("#uf_cliente").val(par[1]);
	}
function LimpaCidade(event)
	{
		if ((event.keyCode <= 8) || ((event.keyCode >= 46) && (event.keyCode <= 111)) || (event.keyCode >= 186))
			{
				$('#cidade_cliente_cod').val('');
			}
	}
function iniciarPagamento()
	{
		$(".data_parcelas").datepicker();
	}
function AbrirArquivo(Arquivo)
	{
		window.open("FrenteCaixa.AbrirArquivo.php?Arquivo="+Arquivo,"_parent");
	}
function OpcaoCaixa(Operacao)
	{
		if((Operacao == 'Abrir' || Operacao == 'ReAbrir') && ($("#SituacaoCaixa").val() == 'Fechado' || $("#Table_Produtos").attr("class") == 'box_visualizar'))
			{
				$("#Table_Produtos").removeClass("box_visualizar");
				$("#CaixaLivre").addClass("box_visualizar");
				$("#valebrinde_div").addClass("box_visualizar");
				$(".rodape").removeClass("box_visualizar");
				$("#valor_total_produtos").val('');
				$("#desconto_pedido").val('');
				$("#valor_total_nota").val('');
				$("#SituacaoCaixa").val('Aberto');
				if(Operacao == 'Abrir'){ 
					xajax_AbrirPedido(DesFormataMoeda($("#valor_total_produto").val()),$("#operador_atual").val(),$("#nome_operador_atual").val()); 
				}
			}
		if((Operacao == 'Fechar' || Operacao == 'Aguardar') && ($("#SituacaoCaixa").val() == 'Aberto' || $("#Table_Produtos").attr("class") != 'box_visualizar'))
			{
				$("#Table_Produtos").addClass("box_visualizar");
				$("#CaixaLivre").removeClass("box_visualizar");
				$("#valebrinde_div").addClass("box_visualizar");
				$(".rodape").addClass("box_visualizar");
				$("#valor_total_produtos").val('');
				$("#desconto_pedido").val('');
				$("#valor_total_nota").val('');
				$("#SituacaoCaixa").val('Fechado');
				$("#numeroPedido").html('');
				$("#dadosPedido").html('');
				$("#obs_pedido").val('');
				if(Operacao == 'Fechar'){ xajax_CancelarPedido($("#id_frente").val()); }
				$("#hidden_frente").html('<input name="id_frente" type="hidden" id="id_frente" value="" />');
			}
	}
function ScrollDown()
	{
		 $('html, body').animate({
            scrollTop: $("#headerprod").offset().top
        }, 500);
	}

function AdicionarLinha(Dados)
	{
		var nro;
		nro = $('#QtdeProdutos').val();
		if(Dados.valor_total_produto)
			{
				var id_produto = Dados.id_produto;
				var desc_produto = Dados.desc_produto;
				var cod_produto = Dados.cod_produto;
				var qtde_produto = Dados.qtde_produto;
				var valor_unit_produto = Dados.valor_unit_produto;
				var valor_total_produto = Dados.valor_total_produto;
			}
		else
			{
				var id_produto = $("#id_produto").val();
				var desc_produto = $("#desc_produto").val();
				var cod_produto = $("#cod_produto").val();
				var qtde_produto = $("#qtde_produto").val();
				var valor_unit_produto = $("#valor_unit_produto").val();
				var valor_total_produto = $("#valor_total_produto").val();
			}
		if(DesFormataMoeda(valor_total_produto) > 0 && desc_produto != '')
			{
				//ABRE O CAIXA
				if(!Dados.valor_total_produto){ OpcaoCaixa('Abrir'); }
				
				if($("#id_frente").val() > 0)
					{
						$("#AbrindoCaixa").addClass("box_visualizar");
						
						nro ++;
						$('#QtdeProdutos').val(nro);
						
						//GERA A NOVA LINHA
						$("<tr id='detailItem" + nro + "' class='item'>").insertBefore("#itens").hide();
						$("<td valign='top'>"+cod_produto+"</td>").appendTo("#detailItem" + nro);
						$("<td valign='top'>"+desc_produto+"</td>").appendTo("#detailItem" + nro);
						$("<td valign='top'>"+qtde_produto+"</td>").appendTo("#detailItem" + nro);
						$("<td valign='top'>"+valor_unit_produto+"</td>").appendTo("#detailItem" + nro);
						$("<td valign='top'>"+valor_total_produto+"</td>").appendTo("#detailItem" + nro);
						$("<td><a href='javascript:ExcluirLinha(" + nro + ");' tabindex='1'><img src='../images/icone_ftrash.gif' width='16' height='16' border='0' class='excluirP' title='Excluir Produto' /></a> <span class='infosp'><img src='../images/icone_infoprod.png' width='16' height='16' class='infoprod box_visualizar' id='EstoqueAtual_" + nro + "' /></span><input name='id_produto_" + nro + "' type='hidden' id='id_produto_" + nro + "' value='"+id_produto+"' /><input name='cod_produto_" + nro + "' type='hidden' id='cod_produto_" + nro + "' value='"+cod_produto+"' /><input name='desc_produto_" + nro + "' type='hidden' id='desc_produto_" + nro + "' value='"+desc_produto+"' /><input name='qtde_produto_" + nro + "' type='hidden' id='qtde_produto_" + nro + "' value='"+qtde_produto+"' /><input name='valor_unit_produto_" + nro + "' type='hidden' id='valor_unit_produto_" + nro + "' value='"+valor_unit_produto+"' /><input name='valor_total_produto_" + nro + "' type='hidden' id='valor_total_produto_" + nro + "' value='"+valor_total_produto+"' class='totais_pedido' /></td>").appendTo("#detailItem" + nro);
						$("</tr>").appendTo("#detailItem" + nro);
						
						$("#detailItem" + nro).show();
						
						if(!Dados){ xajax_AdicionarProduto($("#id_frente").val(),id_produto,cod_produto,desc_produto,qtde_produto,valor_unit_produto,valor_total_produto, nro); }
						
						$("#qtde_produto").val('1');
						$("#desc_produto").val('');
						$("#id_produto").val('');
						$("#cod_produto").val('');
						$("#valor_unit_produto").val('');
						$("#valor_total_produto").val('');
						$('#desc_produto').focus();
						EstoqueAtual(id_produto, nro);
						CalculoTotal();
					}
				else
					{
						$("#AbrindoCaixa").removeClass("box_visualizar");
						window.setTimeout('AdicionarLinha("")', 100);
					}
			}
		else
			{
				if(desc_produto != '' && $(".sel").attr("id") == undefined){ xajax_RecolherProduto($("#qtde_produto").val(), desc_produto); }
				$("#desc_produto").val('');
			}
	}
function ExcluirLinha(Linha)
	{
		if(confirm('Voc� tem certeza que deseja cancelar este item?'))
			{
				var nro;
				if(Linha == 'Limpar')
					{
						nro = 1;
					}
				else
					{
						nro = Linha;
						$("#detailItem"+nro).css("display", "none");
					}
				
				xajax_RemoverProduto($("#id_frente").val(),$("#desc_produto_"+nro).val(),nro);
				$("#id_produto_"+nro).val('');
				$("#desc_produto_"+nro).val('');
				$("#cod_produto_"+nro).val('');
				$("#qtde_produto_"+nro).val('');
				$("#valor_unit_produto_"+nro).val('');
				$("#valor_total_produto_"+nro).val('');
				CalculoTotal();
				$("#EstoqueAtual_"+nro).addClass("box_visualizar");
				$('#desc_produto').focus();
			}
	}
function VerificaCliente()
	{
		DadosCliente('',$('#id_cliente').val());
	}
function DadosCliente(Opcao,Cliente)
	{
		$("#LayerDadosCliente_Info").addClass('box_visualizar');
		$("#LayerDadosCliente_Info2").addClass('box_visualizar');
		if($('#id_cliente').val() > 0)
			{
				$("#conversas").removeClass("box_visualizar");
				$("#LayerDadosCliente_Info").removeClass('box_visualizar');
				if(Opcao == 'Abrir')
					{
						xajax_ObterDadosClienteRapido($('#id_cliente').val());
						xajax_VerificarPermissaoCliente($('#id_cliente').val());
						$("#razao_cliente").focus();
					}
			}
		else
			{
				$("#LayerDadosCliente_Info2").removeClass('box_visualizar');
				if(Opcao == 'Abrir')
					{
						xajax_VerificarPermissaoCliente();
						var nomecpf = parseInt($("#nome_cliente").val().substr(0,3));
						if(nomecpf > 0)
							{
								$("#cnpj_cliente").val($("#nome_cliente").val());
							}
						else
							{
								$("#razao_cliente").val($("#nome_cliente").val());
							}
					}
			}
		$.fn.colorbox.resize();
	}
function openDialogCliente() 
	{
		$('.vh-modal').css('display', 'block');

		var overW = $('.vh-overlay').width();
		var overH = $('.vh-overlay').height();
		var bodyW = $('.vh-body').width();
		var bodyH = $('.vh-body').height();

		var overPos = [];
		overPos[0] = (overW - bodyW) / 2;
		overPos[1] = (overH - bodyH) / 2;

		$('.vh-body').css({ left: overPos[0], top: overPos[1] });
		$('.vh-body').css({ opacity: 1 });
	}
function closeDialogCliente() 
	{
		$('.vh-modal').css('display', 'none');
		$("#formClienteRapido :text").val('');
		$("#tipo_pessoa").val('PF');
		AlterarTipoPessoa('PF');
		
		$.fn.colorbox.resize();
	}
function AbrirCadastroCliente()
	{
		$("#RapidoFormCadastro").removeClass('box_visualizar');
		$("#RapidoBotoes").removeClass('box_visualizar');
		$("#RapidoAlterarPermissao").addClass('box_visualizar');
		$("#RapidoCadastrarPermissao").addClass('box_visualizar');
		$("#formClienteRapido :text").attr("disabled", false);
		$("#formClienteRapido select").attr("disabled", false);
		$("#formClienteRapido input").attr("disabled", false);
		$("#Layer_buscarcnpj").css("display", "");
		$("#Layer_cep").css("display", "");
		$("#Layer_BuscaReceita").addClass("box_visualizar");/*BOTAO BUSCAR RECEITA*/
		
		DadosCliente('Abrir');
		openDialogCliente();
		$("#salvarCliente").attr("disabled", false);
		$("#razao_cliente").focus();
		
		$.fn.colorbox.resize({height: '700px'});	
	}
function AlterarTipoPessoa(Tipo)
	{
		if(Tipo == 'PJ')
			{
				$("#Desc_CNPJ").removeClass('box_visualizar');
				$("#Desc_IE").removeClass('box_visualizar');
				$("#Desc_IE_ISENTO").removeClass('box_visualizar');
				$("#Desc_CPF").addClass('box_visualizar');
				$("#Desc_RG").addClass('box_visualizar');
				$("#Desc_Razao").removeClass('box_visualizar');
				$("#Desc_Nome").addClass('box_visualizar');
				$("#Layer_Fantasia").removeClass('box_visualizar');
				$("#BuscaReceita").css("display", "");
				$("#Layer_BuscaReceita").removeClass("box_visualizar");/*BOTAO BUSCAR RECEITA*/
				
			}
		else
			{
				$("#Desc_CNPJ").addClass('box_visualizar');
				$("#Desc_IE").addClass('box_visualizar');
				$("#Desc_IE_ISENTO").addClass('box_visualizar');
				$("#Desc_CPF").removeClass('box_visualizar');
				$("#Desc_RG").removeClass('box_visualizar');
				$("#Desc_Razao").addClass('box_visualizar');
				$("#Desc_Nome").removeClass('box_visualizar');	
				$("#Layer_Fantasia").addClass('box_visualizar');
				$("#BuscaReceita").css("display", "none");
				$("#Layer_BuscaReceita").addClass("box_visualizar");/*BOTAO BUSCAR RECEITA*/
			}
	}
function SelecionarISENTO(ie)
	{
		if(ie == 'ISENTO' || ie == 'isento' || ie == 'isenta'){ $("#isento").attr("checked", true); }
		if($("#isento").attr("checked") == 'checked')
			{
				$("#iinsc_estadual_cliente").val('ISENTO');
				$("#iinsc_estadual_cliente").attr("disabled", true);
			}
		else
			{
				if(!ie)
					{
						$("#iinsc_estadual_cliente").val('');
						$("#iinsc_estadual_cliente").attr("disabled", false);
					}
			}
	}
function ValidarCliente(documento)
	{
		xajax_ValidarCliente(documento);
	}
function SalvarCliente()
	{
		$("#salvarCliente").attr("disabled", "disabled");
		xajax_SalvarClienteRapido(xajax.getFormValues("formClienteRapido", true));
	}
function CancelarCliente()
	{
		closeDialogCliente();	
	}
function DesabilitarCampos()
	{
		$("#RapidoFormCadastro").removeClass('box_visualizar');
		$("#formClienteRapido :text").attr("disabled", true);
		$("#formClienteRapido select").attr("disabled", true);
		$("#formClienteRapido input").attr("disabled", true);
		$("#Layer_buscarcnpj").css("display", "none");
		$("#Layer_cep").css("display", "none");
		$("#RapidoBotoes").addClass('box_visualizar');
		$("#RapidoAlterarPermissao").removeClass('box_visualizar');
	}
function DesabilitarFormulario()
	{
		$("#RapidoFormCadastro").addClass('box_visualizar');
		$("#RapidoCadastrarPermissao").removeClass('box_visualizar');
	}
function BuscarCEP()
	{
		if($("#cep_cliente").val())
			{
				$("#Layer_cep").html('<img src=\"/images/carregando.gif\" width=\"16\" height=\"16\" />');
				xajax_BuscarCEP($("#cep_cliente").val());
			}
	}
function BuscarCNPJ(documento)
	{
		$("#Layer_buscarcnpj").html('<img src=\"/images/carregando.gif\" width=\"16\" height=\"16\" />');
		xajax_BuscarCNPJ($("#"+documento).val(), documento);
	}
function ConsultarCNPJ(documento)
	{
		window.open("/index.php?Secao=Aplicativos&Modulo=Aplicativos&App=9&Documento="+$("#"+documento).val(),"_blank");
	}
function AlterarBanco(Linha)
	{
		if($("#AltBanco_"+Linha).attr("instancia") != 1)
			{
				$("#AltBanco_"+Linha).qtip(
				{
					prerender: false,
					content: {
						text: '<img class="throbber" src="/images/carregando.gif" width="16" height="16" alt="Carregando..." />',
						ajax: {
							url: "FrenteCaixa.AlterarBanco.php?Linha="+Linha,
							once: true
						},
					},
					position: {
						my: 'right center',
						at: 'left center',
						viewport: $(window),
						effect: true
					},
					show: {
						event: 'click',
						solo: true
					},
					hide: {
						event: 'unfocus'
					},
					style: {
						classes: 'ui-tooltip-wiki ui-tooltip-light ui-tooltip-zindex'
					}
				});
				
				$("#AltBanco_"+Linha).attr("instancia", 1);
				$("#AltBanco_"+Linha).click();
			}
	}
function SalvarBanco(Linha, id_banco, icone, nome_banco)
	{
		$("#id_banco_"+Linha).val(id_banco);
		$("#AltBanco_"+Linha).attr("src", "/images/bandeiras/"+icone);
		$("#AltBanco_"+Linha).attr("title", nome_banco);
		$("#AltBanco_"+Linha).qtip("destroy");
		$("#AltBanco_"+Linha).removeAttr("instancia");
	}
function CalculoProduto()
	{
		var qtde = DesFormataMoeda($('#itensdavenda-nu_quantidade').val());
		var valor_original = DesFormataMoeda($('#itensdavenda-vr_unit_prod').val());
		
		valor_total = qtde * valor_original;
		$('#itensdavenda-total').val(ConverteMoeda(valor_total));
	}
function CalculoTotal()
	{
		var subtotal = 0;
		$(".totais_pedido").each(function() {
			subtotal += Number(DesFormataMoeda($(this).val()));
		});
		
		$("#subtotal_div").html("R$ "+ConverteMoeda(subtotal));
		$("#valor_total_produtos").val(subtotal);
		VerificarBrinde(subtotal);
	}
function VerificarBrinde(subtotal)
	{
		//AVISA QUANDO O CLIENTE GANHOU O BRINDE
		if($("#valebrinde").val() > 0 && subtotal >= $("#valebrinde").val())
			{
				$("#valebrinde_div").removeClass("box_visualizar");
			}
		else
			{
				$("#valebrinde_div").addClass("box_visualizar");
			}
	}
function ConfirmarPedido(Imprimir)
	{
		var cpfnanota = false;
		var nomecpf = parseInt($("#nome_cliente").val().substr(0,3));
		if(nomecpf > 0)
			{
				cpfnanota = true;
			}
		if($("#tipo_pagamento:checked").val() == 1 && DesFormataMoeda($("#valor_recebido").val()) < 0.01)
			{
				alert("O valor recebido deve ser maior que 0!");	
			}
		else if($("#tipo_pagamento:checked").val() == 2 && $("#condicao_pagamento").val() < 1)
			{
				alert("Defina as parcelas da venda!");
			}
		else if(Imprimir == 'EmitirNFC' && $("#nome_cliente").val() != '' && $("#consumidor_final").val() != 1 && cpfnanota == false)
			{
				alert("Selecione um cliente consumidor final!");
			}
		else
			{
				if(confirm('Voc� confirma o fechamento deste pedido?'))
					{
						$("#salvar").attr("disabled", "disabled");
						$("#salvarImprimir").attr("disabled", "disabled");
						$("#salvarEmitir").attr("disabled", "disabled");
						xajax_ConfirmarPedido(Imprimir, xajax.getFormValues("formConfirmar", true));
					}
			}
	}
function PreEmitirNFC(Venda)
	{
		$.colorbox({href:"FrenteCaixa.EmitirNFC.php?Venda="+Venda, title:"DESEJA ALTERAR OS DADOS DA NFC-e?"});
	}
function AlterarNFC(Venda)
	{
		window.open('/index.php?Secao=Vendas.Consumidor&Modulo=Vendas&Balcao='+Venda);
		ReabrirCaixa();
		$.fn.colorbox.close();
	}
function GerarNFC(Venda, Acao)
	{
		$("#nfcEmitir").attr("disabled", "disabled");
		$("#nfcAlterar").attr("disabled", "disabled");
		
		xajax_GerarNFC(Venda, Acao);
	}
function EmitirNFC(Venda,codigo)
	{
		$("#Layer_Validar").css("display","none");
		$("#Layer_Transmitir").html("<div align=\"center\"><img src=\"/images/carregando.gif\" width=\"32\" height=\"32\" /></div>");
		$("#cboxTitle").html('');
		xajax_EmitirNFC(Venda,codigo);
		
		$.fn.colorbox.resize({
		   width: "610px",
		   height: "340px"
		});
	}
function ReabrirCaixa()
	{
		$(".item").each(function() {
			$(this).remove();
		});
		$(".infoprod").addClass("box_visualizar");
		
		OpcaoCaixa("Aguardar");
		$("#id_frente").val('0');
		$("#hidden_frente").html('<input name="id_frente" type="hidden" id="id_frente" value="" />');
		$('#desc_produto').focus();
		xajax_PedidosPendentes();
	}
function ImprimirCupom(Pedido)
	{
		if(Pedido)
			{
				$.colorbox({href:"FrenteCaixa.Imprimir.php?Venda="+Pedido});
			}
	}
function CalculoAcrescimoDesconto()
	{
		var valor_produto = Number($('#confir_produtos').val());
		/*VERIFICA O TIPO DE CALCULO DE ACRESCIMO E PORCENTAGEM*/
		var tipo_acrescimo = $("#pdv_tipo_acrescimo").val();
		var tipo_desconto = $("#pdv_tipo_desconto").val();
		
		if(tipo_acrescimo == "P"){
			var valor_acrescimo = Number(valor_produto * (DesFormataMoeda($('#confir_acrescimo').val()) / 100));
		} else {
			var valor_acrescimo = Number(DesFormataMoeda($('#confir_acrescimo').val()));
		}
		
		if(tipo_desconto == "P") {
			var valor_desconto = Number(valor_produto * (DesFormataMoeda($('#confir_desconto').val()) / 100));
		} else {
			var valor_desconto = Number(DesFormataMoeda($('#confir_desconto').val()));
		}
		
		/*
		var valor_produto = Number($('#confir_produtos').val());
		var valor_acrescimo = Number(valor_produto * (DesFormataMoeda($('#confir_acrescimo').val()) / 100));
		var valor_desconto = Number(DesFormataMoeda($('#confir_desconto').val()));
		*/
		
		var valor_total = Number(Number(valor_produto + valor_acrescimo) - valor_desconto);
		$('#Layer_total').html("R$ " + ConverteMoeda(valor_total));
		$('#valor_total_nota').val(valor_total);
		$('#acrescimo_pedido').val(valor_acrescimo);
		$('#desconto_pedido').val(valor_desconto);
	}
function CalculoTroco()
	{
		var valor_recebido = DesFormataMoeda($('#valor_recebido').val());
		var valor_total_nota = $('#valor_total_nota').val();
		if(valor_recebido > 0)
			{
				var valor_total = valor_recebido - valor_total_nota;
				$('#Layer_trocoValor').html("R$ " + ConverteMoeda(valor_total));
				$('#troco_pedido').val(valor_total);
			}
		else
			{
				$('#Layer_trocoValor').html("R$ 0,00");
				$('#troco_pedido').val('0');
			}
	}
function TrocarFormaPagamento(forma)
	{
		if(forma == 'Dinheiro')
			{
				$("#title_valor").html('Recebido');
				$("#Layer_troco").removeClass("box_visualizar");
				$("#valor_recebido").val('');
				$("#valor_recebido").attr("disabled", false); 
			}
		else
			{
				$("#Layer_troco").addClass("box_visualizar");
				$("#valor_recebido").val(ConverteMoeda($("#valor_total_nota").val()));
				$("#valor_recebido").attr("disabled", true); 
			}
	}
function TrocarTipoPagamento(Tipo)
	{
		$("#Layer_Condicao").html('');
		$("#condicao_pagamento").val("");
		$("#valor_recebido").val(ConverteMoeda($("#valor_total_nota").val()));
		if(Tipo == 1)
			{
				$("#LayerPagamentoAVista").removeClass("box_visualizar");
				$("#LayerPagamentoParcelado").addClass("box_visualizar");
				if($("#forma_pagamento").val() == "Dinheiro")
					{
						$("#valor_recebido").attr("disabled",false);
						$("#valor_recebido").val('');
					}
				else
					{
						$("#valor_recebido").attr("disabled","disabled");
					}
				
				
			}
		if(Tipo == 2)
			{
				$("#LayerPagamentoAVista").addClass("box_visualizar");
				$("#LayerPagamentoParcelado").removeClass("box_visualizar");
			}
	}
function CalculoParcelas(Pedido)
	{
		var Parcelas = $('#condicao_pagamento').val();
		xajax_CalculoParcelas(Parcelas, $('#valor_total_nota').val());
	}
function InfoConfirmar()
	{
		if($("#Layer_info").attr("class") == 'box_visualizar')
			{
				$("#Layer_info").removeClass("box_visualizar");
				$("#LayerReferenciar").addClass("box_visualizar");
				$("#nome_cliente").focus();
			}
		else
			{
				$("#Layer_info").addClass("box_visualizar");
			}
		$.fn.colorbox.resize();
	}
function Aguardar()
	{
		if($("#CaixaLivre").attr("class") != "caixaLivre" && $("#CaixaLivre").attr("class") != "")
			{
				$(".item").each(function() {
					$(this).remove();
				});

				xajax_Salvar($("#id_frente").val(), $("#obs_pedido").val(), $("#valor_total_produtos").val(),$("#operador_atual").val(),$("#nome_operador_atual").val());
				OpcaoCaixa("Aguardar");
				$('#desc_produto').focus();
				xajax_PedidosPendentes();
			}
	}
function Cancelar()
	{
		if($("#CaixaLivre").attr("class") != "caixaLivre" && $("#CaixaLivre").attr("class") != "")
			{
				if(confirm('Voc� tem certeza que deseja cancelar este pedido?'))
					{
						$(".item").each(function() {
							$(this).remove();
						});
						
						$('#desc_produto').focus();
						OpcaoCaixa("Fechar");
					}
			}
	}
function ObterPedido(Pedido)
	{
		if(DesFormataMoeda($("#valor_total_produto").val()) > 0)
			{
				if(confirm('Voc� tem certeza que n�o deseja salvar este item?'))
					{
						xajax_ObterPedido(Pedido);
					}
			}
		else
			{
				xajax_ObterPedido(Pedido);
			}
		$('#desc_produto').focus();
	}
function FecharJanela()
	{
		if(confirm('Voc� tem certeza que deseja fechar o PDV?'))
			{
				window.close();
			}
	}
function retirarAcento(objResp)
	{  
		var varString = new String(objResp.value);  
		var stringAcentos = new String('����������������������������');  
		var stringSemAcento = new String('aaeouaoaeioucuAAEOUAOAEIOUCU');

		var i = new Number();  
		var j = new Number();  
		var cString = new String();  
		var varRes = '';  
		  
		for (i = 0; i < varString.length; i++)
			{  
				cString = varString.substring(i, i + 1);	  
				for (j = 0; j < stringAcentos.length; j++)
					{  
						if (stringAcentos.substring(j, j + 1) == cString)
							{  
								cString = stringSemAcento.substring(j, j + 1);  
							}  
					}  
				varRes += cString;  
			}  
		return objResp.value = varRes;  
	}
function MascaraCPFTexto(str) 
	{
		var nomecpf = parseInt($("#nome_cliente").val().substr(0,3));
		if(nomecpf > 0)
			{
				$("#nome_cliente").attr("maxlength", "14");
				$("#nome_cliente").keypress(function(){
					return (soNums(event,''));
				});
				
				str.value = str.value.replace(/\D/g, "");
				str.value = str.value.replace(/^(\d{3})(\d)/, "$1.$2");
				str.value = str.value.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
				str.value = str.value.replace(/(\d{3})(\d)/, "$1-$2");
			}
		else
			{
				$("#nome_cliente").attr("maxlength", "");
				$("#nome_cliente").unbind('keypress');
			}
    }
function MostrarMensagem()
	{
		if($("#ok").val())
			{
				$.growlUI('growlUI','PDV', $("#ok").val());
			}
		else
			{
				if($("#erro").val())
					{
						$.growlUI('growlUIErro','Erro ao salvar', $("#erro").val(), 8000);
					}
			}
	}
$(document).ready(function() {
	$('#desc_produto').bind('paste', function(event) {
		$('#id_produto').val('');
		$('#valor_unit_produto').val('');
		$('#valor_total_produto').val('');
		$('#cod_produto').val('');
	}); 
});