 function soNums(e,args) 
    {         
    // Fun��o que permite apenas teclas num�ricas e  
    // todos os caracteres que estiverem na lista 
    // de argumentos. 
    // Deve ser chamada no evento onKeyPress desta forma 
    //  onKeyPress ="return (soNums(event,'(/){,}.'));" 
    // caso queira apenas permitir caracters 

        if (document.all){var evt=event.keyCode;} // caso seja IE 
        else{var evt = e.charCode;}    // do contr�rio deve ser Mozilla 
        var chr= String.fromCharCode(evt);    // pegando a tecla digitada 
        // Se o c�digo for menor que 20 � porque deve ser caracteres de controle 
        // ex.: <ENTER>, <TAB>, <BACKSPACE> portanto devemos permitir 
        // as teclas num�ricas v�o de 48 a 57 
        if (evt <20 || (evt >47 && evt<58) || (args.indexOf(chr)>-1 ) ){return true;} 
        return false; 
    } 
