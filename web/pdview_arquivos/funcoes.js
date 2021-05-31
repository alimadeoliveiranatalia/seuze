$(document).ready(function()
	{
		$("#logoMarca").qtip(
		{
			prerender: true,
			content: {
				// Set the text to an image HTML string with the correct src URL to the loading image you want to use
				text: '<img class="throbber" src="/images/icon-loading.svg" width="16" height="16" alt="Carregando..." />',
				ajax: {
					url: "/includes/outros/logo-alterar.php", // Use the rel attribute of each element for the url to load
					once: false
				},
				title: {
					text: "",
					button: false
				}
			},
			position: {
				my: 'top right',
				at: 'bottom center', // Position the tooltip above the link
				viewport: $(window), // Keep the tooltip on-screen at all times
				effect: true // Disable positioning animation
			},
			show: {
				event: 'click',
				solo: true // Only show one tooltip at a time
			},
			hide: {
				event: 'unfocus'
			},
			style: {
				classes: 'ui-tooltip-wiki ui-tooltip-light ui-tooltip-shadow ui-tooltip-logo'
			}
		});

		slideApp();
		ToggleMyApps();
		
		$(".btn-group").click(function(event) {
			event.stopPropagation();
			$(this).find('.dropdown-menu').toggle("fast");
			$('.dropdown-menu-2').hide("fast");
		});

		$(".dropdown-menu li").click(function(event) {
			$('.dropdown-menu').hide("fast");
		});

		$('.dropdown-menu').click(function(e){
			e.stopPropagation();
		});

		$(".btn-group-2").click(function(event) {
			event.stopPropagation();
			$(this).find('.dropdown-menu-2').toggle("fast");
			$('.dropdown-menu').hide("fast");
		});

		$(".dropdown-menu-2 li").click(function(event) {
			$('.dropdown-menu-2').hide("fast");
		});

		$('.dropdown-menu-2').click(function(e){
			e.stopPropagation();
		});

		$(document).click(function(event) {
			$('.dropdown-menu').hide("fast");
			$('.dropdown-menu-2').hide("fast");
		});
		
		$(".telefone").mask("(99) 9999-9999?9").keyup(function(event) {
			var target, phone, element;
			target = (event.currentTarget) ? event.currentTarget : event.srcElement;
			phone = target.value.replace(/\D/g, '');
			if(phone.length > 10) {
				element = $(target);
				element.unmask();
				element.mask("(99) 99999-999?9");
			} else if(phone.length == 10) {
				element = $(target);
				element.unmask();
				element.mask("(99) 9999-9999?9");  
			}
		});
	});
function slideApp()
	{
		var totalItens = $('.apps-instalados > li').length;
		var w = totalItens * 300;
		var currentItem = 0;
		$('.apps-instalados').css('width', w + "px");

		$('.app-prev').unbind('click').click(function(event) {
			if(currentItem > 0) {
				currentItem--;
				$('.apps-instalados').animate({ 'left': (currentItem * -300) + 'px'});
			}
		});

		$('.app-next').unbind('click').click(function(event) {
			if(currentItem < (totalItens - 1)) { 
				currentItem++;
				$('.apps-instalados').animate({ 'left': (currentItem * -300) + 'px'});
			}
		});
	}
function ToggleMyApps()
	{
		$('.btn-my-apps-menu').click(function(event) {
			event.preventDefault();
			$(this).addClass('active');
			$('#app-fav').fadeOut('400', function() {
				$('#app-all').fadeIn('400');
			});
			$('.btn-acesso-rapido').removeClass('active');
		});
		$('.btn-acesso-rapido').click(function(event) {
			event.preventDefault();
			$(this).addClass('active');
			$('#app-all').fadeOut('400', function() {
				$('#app-fav').fadeIn('400');
			});
			$('.btn-my-apps-menu').removeClass('active');
		});
	}
function IniciarUploadLogoMarca()
	{
		$('#logo_empresa').uploadifive({
			'auto'             : true,
			'buttonClass'	   : 'white bg-system-green btn-upload btn-bdr click-pop noselect semi-bold',
			'simUploadLimit'   : 1,
			'fileType'		   : ["image\/jpg","image\/jpeg"],
			'formData'         : {
								   'Pasta' 		: 'logo/temp'
								 },
			'queueID'          : 'upload_andamento',
			'uploadScript'     : 'includes/upload/logo-marca.php',
			'buttonText'	   : 'Selecione sua Logo',
			'removeCompleted'  : true,
			'height'		   : false,
			'width'			   : false,
			onFallback       : function()
				{  
					$("#uploadLogoMarca").after('<strong>Este navegador nao suporta esta ferramenta!</strong>');
					$("#uploadLogoMarca").remove();
				},
			onSelect : function(file, data) { 
				$('.upload-avatar-layer').slideUp(400);
				$("#upload-menssage").html("Arquivo sendo enviado, aguarde...");
			},
			onUploadComplete : function(file, data) { 
				$("#upload-menssage").html('');
				
				$("#uploadLogoMarca").addClass('hide-element');
				$("#cropImagem").removeClass('hide-element');
				cropLogo(data);
			},
			onError : function(errorType) { 
				if(errorType == 'QUEUE_LIMIT_EXCEEDED') {
					$("#upload-menssage").html('Você pode enviar apenas uma imagem.');
				}
				if(errorType == 'FILE_SIZE_LIMIT_EXCEEDED') {
					$("#upload-menssage").html('O tamanho do arquivo excede o limite.');
				}
				if(errorType == 'FORBIDDEN_FILE_TYPE') {
					$("#upload-menssage").html('O formato do arquivo não suportado.');
				}
				if(errorType == '404_FILE_NOT_FOUND') {
					$("#upload-menssage").html('O arquivo não encontrado.');
				}

				setTimeout(function(){
					FinalizarUploadLogoMarca();
					$('.avatar-big .change-photo').trigger('click');
				}, 3000);
			}
		});
	}
function FinalizarUploadLogoMarca()
	{
		$('.avatar-big').toggleClass('anime-avatar-big');
		$('#cropImagem').slideUp(400);
		$('.avatar-change-layer').removeClass('faded-element').html("");
	}
function CortarLogo()
	{
		$("#cortar").html('<img src=\"/images/icon-loading.svg\" width=\"32\" height=\"32\" />');
		xajax_CropLogo($('#x').val(), $('#y').val(), $('#w').val(), $('#h').val(), $('#tar_w').val(), $('#tar_h').val(), $('#fileLogo').val());
	}
function AlterarLido(id)
	{
		$("#"+id).removeClass("nao-lido");
		$("#"+id).addClass("lido");
	}
function BuscaAvancada()
	{
		if($("#Layer_Search").hasClass('search-advanced') && $("#Layer_Search").hasClass('box_visualizar'))
			{
				$("#Layer_Search").slideToggle(500, function(){
					$("#Layer_Search").removeClass('box_visualizar');
				});
				
			}
		else
			{
				$("#Layer_Search").slideToggle(500, function(){
					$("#Layer_Search").addClass('box_visualizar');
				});
			}
	}
function BuscarCNPJ(documento)
	{
		$("#Layer_buscarcnpj").html('<img src=\"/images/icon-loading.svg\" width=\"16\" height=\"16\" />');
		xajax_BuscarCNPJ($("#"+documento).val(), documento);
	}
function ConsultarCNPJ(documento)
	{
		window.open("index.php?Secao=Aplicativos&Modulo=Aplicativos&App=9&Documento="+$("#"+documento).val(),"_parent");
	}
function EnviarMensagem(celular)
	{
		window.open("index.php?Secao=Aplicativos&Modulo=Aplicativos&App=8&Numero="+$("#"+celular).val(),"_parent");
	}
function Ordenar(imgordem, campo)
	{
		if($(imgordem).attr("ordem") == 'D')
			{
				$(imgordem).attr("ordem", "A");
				$(imgordem).attr("src", "images/icone-ord-AESC.png");
			}
		else
			{
				$(imgordem).attr("ordem", "D");
				$(imgordem).attr("src", "images/icone-ord-DESC.png");
			}
		xajax_Ordenar(campo, $(imgordem).attr("ordem"));
	}
//TOOLTIP ESTOQUE
function EstoqueAtual(Produto, Linha)
	{
		$("#EstoqueAtual_"+Linha).removeClass("box_visualizar");
		
		// We make use of the .each() loop to gain access to each element via the "this" keyword...
		$("#EstoqueAtual_"+Linha).qtip(
		{
			content: {
				// Set the text to an image HTML string with the correct src URL to the loading image you want to use
				text: '<img class="throbber" src="/images/icon-loading.svg" width="16" height="16" alt="Carregando..." />',
				ajax: {
					url: "/includes/outros/estoque-atual.php?Produto="+Produto // Use the rel attribute of each element for the url to load
				},
				/*title: {
					text: 'Estoque Atual', // Give the tooltip a title using each elements text
					button: false
				}*/
			},
			position: {
				at: 'right center', // Position the tooltip above the link
				my: 'left center',
				viewport: $(window), // Keep the tooltip on-screen at all times
				effect: false // Disable positioning animation
			},
			show: {
				event: 'mouseenter',
				solo: true // Only show one tooltip at a time
			},
			hide: 'mouseleave',
			style: {
				classes: 'ui-tooltip-wiki ui-tooltip-light ui-tooltip-shadow'
			}
		})
	}
	
//TOOLTIP CONTAS	
function VisualizarContas(tipo, Linha)
	{
		// We make use of the .each() loop to gain access to each element via the "this" keyword...
		$("#VisualizarConta_"+Linha).qtip(
		{
			content: {
				// Set the text to an image HTML string with the correct src URL to the loading image you want to use
				text: '<img class="throbber" src="/images/icon-loading.svg" width="16" height="16" alt="Carregando..." />',
				ajax: {
					url: "/includes/outros/visualizar-contas.php?Tipo="+tipo+"&Id="+Linha // Use the rel attribute of each element for the url to load
				},
			},
			position: {
			my : 'top center',			
			effect: false,
			adjust: {
				scroll: false,
				resize: false,
				mouse: false // Can be ommited (e.g. default behaviour)
			} // Disable positioning animation
		   },
			show: {
				event: 'mouseenter',
				solo: true // Only show one tooltip at a time
			},
			hide: 'mouseleave',
			style: {								
				classes: 'ui-tooltip-wiki ui-tooltip-light ui-tooltip-shadow'
			}
		})
	}
function RecalcularParcelas(id_campo,valor_campo)
	{
		if($("#calculador_parcelas_"+id_campo).val() != "" && $("#calculador_parcelas_"+id_campo).val() != valor_campo)
			{
				valor_campo = valor_campo.replace(",",".");
				//DECLARA A VARIAVEL COM O VALOR TOTAL DA NOTA
				var total_nota = $("#ValorTotalRecalcular").val();
				//DIMINUIR COM O VALOR INFORMADO
				if(parseFloat(total_nota) >= parseFloat(valor_campo))
					{
						var novo_valor = total_nota - valor_campo;					
						//TOTAL DE PARCELAS
						var total_parcelas = $("#RecalcularQtdeParcelas").val();	
						var parcelas_anteriores = 0;
						for(i=1;i<id_campo;i++)
							{							
								parcelas_anteriores = (parseFloat($("#calculador_parcelas_"+i).val()) + parseFloat(parcelas_anteriores));
							}
						parcelas_anteriores = parcelas_anteriores + parseFloat(valor_campo);						
						//COLOCA O VALOR INFORMADO NO HIDEN
						$("#calculador_parcelas_"+id_campo).val(valor_campo);
						//RETIRA O VALOR DAS PARCELAS ANTERIORES DO VALOR TOTAL
						var novo_valor = parseFloat(total_nota) - parseFloat(parcelas_anteriores);
						//NUMERO DE PARCELAS QUE IRAO SOBRAR
						var sobra_parcelas = total_parcelas - id_campo;
						//DIVIDE O NOVO VALOR PARAS AS PARCELAS QUE SOBRARAM
						var int_novo_valor =  novo_valor / sobra_parcelas;
						int_novo_valor = (int_novo_valor.toFixed(2));
						var int_parcelas = int_novo_valor*sobra_parcelas;
						var recalcular = int_parcelas - novo_valor;
						recalcular =  parseFloat(recalcular.toFixed(2));
						//DEFINE O CONTADOR
						var contador = id_campo+1;
						//PREENCHE OS NOVOS VALORES
						for(contador;contador<=total_parcelas;contador++)
							{
								if(contador == total_parcelas)
									{
										var valor_fracionado = 0;
										valor_fracionado = (int_novo_valor - recalcular).toFixed(2);
										$("#valor_parcela_"+contador).val(valor_fracionado.replace(".",","));
										$("#calculador_parcelas_"+contador).val(valor_fracionado);
									}
								else
									{
										$("#valor_parcela_"+contador).val(int_novo_valor.replace(".",","));
										$("#calculador_parcelas_"+contador).val(int_novo_valor);
									}
							}
					}
				else
					{
						$("#erro").val('O Valor informado \xE9 superior a soma das parcelas!');
						$("#ok").val('');
						MostrarMensagem();
						var total_parcelas = $("#RecalcularQtdeParcelas").val();	
						var contador = id_campo+1;
						for(contador;contador<=total_parcelas;contador++)
							{
								$("#valor_parcela_"+contador).val('0,00');
								$("#calculador_parcelas_"+contador).val('0,00');
								
							}
					}
			}
	}