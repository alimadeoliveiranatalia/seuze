var Info = {};

function BuscarInfo() 
	{
		var pagina;
		pagina = "SecureSession.php";
		$.get(pagina, { Buscar: "Sim" },
		function(data)
			{
				Info = eval('Info =' + data);
				$('#Versao').html(Info.Versao);
			});
	}
