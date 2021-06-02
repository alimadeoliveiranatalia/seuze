function EstoqueAtual(Produto, Linha)
	{
		$("#EstoqueAtual_"+Linha).removeClass("box_visualizar");
		
		// We make use of the .each() loop to gain access to each element via the "this" keyword...
		$("#EstoqueAtual_"+Linha).qtip(
		{
			content: {
				// Set the text to an image HTML string with the correct src URL to the loading image you want to use
				text: '<img class="throbber" src="/images/carregando.gif" width="16" height="16" alt="Carregando..." />',
				ajax: {
					url: "/includes/outros/estoque-atual.php?Produto="+Produto // Use the rel attribute of each element for the url to load
				},
				/*title: {
					text: 'Estoque Atual', // Give the tooltip a title using each elements text
					button: false
				}*/
			},
			position: {
				at: 'left center', // Position the tooltip above the link
				my: 'right center',
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