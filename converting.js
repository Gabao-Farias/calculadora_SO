function converteMemoriaParaEndereco(numero, unidade){
    numero = Math.log2(numero);

    switch (unidade) {
        case "b":
            return(numero + "-b");
        case "kb":
            numero = numero + 10;
            return(numero + "-b");
        case "mb":
            numero = numero + 20;
            return(numero + "-b");
        case "gb":
            numero = numero + 30;
            return(numero + "-b");
        case "tb":
            numero = numero + 40;
            return(numero + "-b");
    }
}

function converteEnderecoParaMemoria(numero){
    let resto = numero % 10;
    let unidade = Math.floor(numero / 10);

    switch(unidade){
        case 0:
            return(`${Math.pow(2, resto)}-b`);
        case 1:
            return(`${Math.pow(2, resto)}-kb`);            
        case 2:
            return(`${Math.pow(2, resto)}-mb`);
        case 3:
            return(`${Math.pow(2, resto)}-gb`);
        case 4:
            return(`${Math.pow(2, resto)}-tb`);
    }
}

function converteNPparaQP(numero){
    let resto = numero % 10;
    let unidade = Math.floor(numero / 10);

    switch(unidade){
        case 0:
            return(`${Math.pow(2, resto)}`);
        case 1:
            return(`${Math.pow(2, resto)}-k`);            
        case 2:
            return(`${Math.pow(2, resto)}-m`);
        case 3:
            return(`${Math.pow(2, resto)}-g`);
        case 4:
            return(`${Math.pow(2, resto)}-t`);
    }
}

function converteQPparaNP(numero, unidade){
    numero = Math.log2(numero);

    switch (unidade) {
        case "":
            return(numero);
        case "k":
            numero = numero + 10;
            return(numero);
        case "m":
            numero = numero + 20;
            return(numero);
        case "g":
            numero = numero + 30;
            return(numero);
        case "t":
            numero = numero + 40;
            return(numero);
    }
}