var mascaraTel;
function Mascara(objeto, evt, mask) {
 
var LetrasU = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LetrasL = 'abcdefghijklmnopqrstuvwxyz';
var Letras  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var LetrasN  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_';
var Numeros = '0123456789';
var Fixos  = '().-:/ '; 
var Charset = " !\"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_/`abcdefghijklmnopqrstuvwxyz{|}~";

evt = (evt) ? evt : (window.event) ? window.event : "";
var value = objeto.value;
if (evt) {
 var ntecla = (evt.which) ? evt.which : evt.keyCode;
 tecla = Charset.substr(ntecla - 32, 1);
 if (ntecla < 32) return true;

 var tamanho = value.length;
 if (tamanho >= mask.length) return false;

 var pos = mask.substr(tamanho,1); 
 while (Fixos.indexOf(pos) != -1) {
  value += pos;
  tamanho = value.length;
  if (tamanho >= mask.length) return false;
  pos = mask.substr(tamanho,1);
 }

 switch (pos) {
   case '#' : if (Numeros.indexOf(tecla) == -1) return false; break;
   case 'A' : if (LetrasU.indexOf(tecla) == -1) return false; break;
   case 'a' : if (LetrasL.indexOf(tecla) == -1) return false; break;
   case 'Z' : if (Letras.indexOf(tecla) == -1) return false; break;
   case 'W' : if (LetrasN.indexOf(tecla) == -1) return false; break;
   case '*' : objeto.value = value; return true; break;
   default : return false; break;
 }
}
objeto.value = value; 
return true;
}

function MaskCNPJ(objeto, evt) { 
return Mascara(objeto, evt, '##.###.###/####-##');
}
function MaskCPF(objeto, evt) { 
return Mascara(objeto, evt, '###.###.###-##');
}
function MaskCEP(objeto, evt) { 
return Mascara(objeto, evt, '##.###-###');
}
function MaskFone(objeto, evt, Estado) { 
	if(Estado == 'SP' || Estado == 'RJ' || Estado == 'AM' || Estado == 'PA' || Estado == 'MA' || Estado == 'AP' || Estado == 'RR')
		{
			return Mascara(objeto, evt, '(##) #####-####');
		}
	else
		{
			return Mascara(objeto, evt, '(##) ####-####');
		}
}
function MaskData(objeto, evt) { 
return Mascara(objeto, evt, '##/##/####');
}
function MaskLogin(objeto, evt) { 
return Mascara(objeto, evt, 'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWW');
}
function MaskHora(objeto, evt) { 
return Mascara(objeto, evt, '##:##');
}
function MaskHoras(objeto, evt) { 
return Mascara(objeto, evt, '###:##');
}
function MaskPlaca(objeto, evt) { 
return Mascara(objeto, evt, 'ZZZ-####');
}
function MaskCreditCard(objeto, evt) { 
return Mascara(objeto, evt, '#### #### #### ####');
}
