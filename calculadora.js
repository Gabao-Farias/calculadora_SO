var dados = {
    ml: document.getElementById("ml"),
    mf: document.getElementById("mf"),
    el: document.getElementById("el"),
    ef: document.getElementById("ef"),
    tamP: document.getElementById("tamp"),
    deslocamento: document.getElementById("desl"),
    npl: document.getElementById("npl"),
    npf: document.getElementById("npf"),
    qpf: document.getElementById("qpf"),
    qpl: document.getElementById("qpl")
}

var resultHTML = {
    ml: document.getElementById("rml"),
    mf: document.getElementById("rmf"),
    el: document.getElementById("rel"),
    ef: document.getElementById("ref"),
    tamP: document.getElementById("rtamp"),
    deslocamento: document.getElementById("rdesl"),
    npl: document.getElementById("rnpl"),
    npf: document.getElementById("rnpf"),
    qpf: document.getElementById("rqpf"),
    qpl: document.getElementById("rqpl")
}

var resultData = {
    ml: "-1",
    mf: "-1",
    el: "-1",
    ef: "-1",
    tamP: "-1",
    deslocamento: "-1",
    npl: "-1",
    npf: "-1",
    qpf: "-1",
    qpl: "-1"
}

function pronto(){
    if(
        resultData.ml == "-1" ||
        resultData.mf == "-1" ||
        resultData.el == "-1" ||
        resultData.ef == "-1" ||
        resultData.tamP == "-1" ||
        resultData.deslocamento == "-1" ||
        resultData.npl == "-1" ||
        resultData.npf == "-1" ||
        resultData.qpf == "-1" ||
        resultData.qpl == "-1"
    ){
        return(false);
    }else{
        return(true);
    }
}

function getDadosInseridos(){
    if(dados.ml.value != ""){
        resultData.ml = dados.ml.value;
    }else{
        resultData.ml = "-1";
    }

    if(dados.mf.value != ""){
        resultData.mf = dados.mf.value;
    }else{
        resultData.mf = "-1";
    }

    if(dados.el.value != ""){
        resultData.el = dados.el.value;
    }else{
        resultData.el = "-1";
    }

    if(dados.ef.value != ""){
        resultData.ef = dados.ef.value;
    }else{
        resultData.ef = "-1";
    }

    if(dados.tamP.value != ""){
        resultData.tamP = dados.tamP.value;
    }else{
        resultData.tamP = "-1";
    }

    if(dados.deslocamento.value != ""){
        resultData.deslocamento = dados.deslocamento.value;
    }else{
        resultData.deslocamento = "-1";
    }

    if(dados.npl.value != ""){
        resultData.npl = dados.npl.value;
    }else{
        resultData.npl = "-1";
    }

    if(dados.npf.value != ""){
        resultData.npf = dados.npf.value;
    }else{
        resultData.npf = "-1"
    }

    if(dados.qpf.value != ""){
        resultData.qpf = dados.qpf.value;
    }else{
        resultData.qpf = "-1";
    }

    if(dados.qpl.value != ""){
        resultData.qpl = dados.qpl.value;
    }else{
        resultData.qpl = "-1";
    }
}

function getML(){
    if(resultData.ml == "-1"){
        if(resultData.el != "-1"){
            let numero = resultData.el.substring(0, resultData.el.indexOf("-"));
            numero = Number(numero);
            return(converteEnderecoParaMemoria(numero));
        }else{
            return("-1");
        }
    }else{
        return(resultData.ml);
    }

}

function getMF(){
    if(resultData.mf == "-1"){
        if(resultData.ef != "-1"){
            let numero = resultData.ef.substring(0, resultData.ef.indexOf("-"));
            numero = Number(numero);
            return(converteEnderecoParaMemoria(numero));
        }else{
            return("-1");
        }
    }else{
        return(resultData.mf);
    }
}

function getEL(){
    if(resultData.el == "-1"){
        if(resultData.ml != "-1"){
            let numero = resultData.ml.substring(0, resultData.ml.indexOf("-"));
            numero = Number(numero);
            let unidade = resultData.ml.substring(resultData.ml.indexOf("-") + 1, resultData.ml.length);
            return(converteMemoriaParaEndereco(numero, unidade));
        }else{
            if(resultData.npl != "-1" && resultData.deslocamento != "-1"){
                let numeroNPL = Number(resultData.npl.substring(0,resultData.npl.indexOf("-")));
                let numeroDesl = Number(resultData.deslocamento.substring(0,resultData.deslocamento.indexOf("-")));
                return(`${numeroNPL + numeroDesl}-b`);
            }else{
                return("-1");
            }
        }
    }else{
        return(resultData.el);
    }
  
}

function getEF(){
    if(resultData.ef == "-1"){
        if(resultData.mf != "-1"){
            let numero = resultData.mf.substring(0, resultData.mf.indexOf("-"));
            numero = Number(numero);
            let unidade = resultData.mf.substring(resultData.mf.indexOf("-") + 1, resultData.mf.length);
            return(converteMemoriaParaEndereco(numero, unidade));
        }else{
            if(resultData.npf != "-1" && resultData.deslocamento != "-1"){
                let numeroNPF = Number(resultData.npf.substring(0,resultData.npf.indexOf("-")));
                let numeroDesl = Number(resultData.deslocamento.substring(0,resultData.deslocamento.indexOf("-")));
                return(`${numeroNPF + numeroDesl}-b`);
            }else{
                return("-1");
            }        
        }
    }else{
        return(resultData.ef);
    }

}

function getTamP(){
    if(resultData.tamP == "-1"){
        if(resultData.deslocamento != "-1"){
            let numero = resultData.deslocamento.substring(0, resultData.deslocamento.indexOf("-"));
            numero = Number(numero);
            return(converteEnderecoParaMemoria(numero));
        }else{
            return("-1");
        }
    }else{
        return(resultData.tamP);
    }
}

function getDeslocamento(){
    if(resultData.deslocamento == "-1"){
        if(resultData.tamP != "-1"){
            let numero = resultData.tamP.substring(0, resultData.tamP.indexOf("-"));
            numero = Number(numero);
            let unidade = resultData.tamP.substring(resultData.tamP.indexOf("-") + 1, resultData.tamP.length);
            return(converteMemoriaParaEndereco(numero, unidade));
        }else{
            return("-1");
        }   
    }else{
        return(resultData.deslocamento);
    }
}

function getNPL(){
    if(resultData.npl == "-1"){
        if(resultData.deslocamento != "-1" && resultData.el != "-1"){
            let numeroEL = Number(resultData.el.substring(0,resultData.el.indexOf("-")));
            let numeroDesl = Number(resultData.deslocamento.substring(0,resultData.deslocamento.indexOf("-")));
            return(`${numeroEL - numeroDesl}-b`);
        }else{
            if(resultData.qpl != "-1"){
                if(resultData.qpl.indexOf("-") == -1){
                    let unidade = "";
                    let numero = Number(resultData.qpl.substring(0, resultData.qpl.length))
                    return(converteQPparaNP(numero, unidade));
                }else{
                    let unidade = resultData.qpl.substring(resultData.qpl.indexOf("-") + 1, resultData.qpl.length);
                    let numero = Number(resultData.qpl.substring(0, resultData.qpl.indexOf("-")));
                    return(converteQPparaNP(numero, unidade));
                }
            }else{
                return("-1");
            }
        }
    }else{
        return(resultData.npl);
    }
}

function getNPF(){
    if(resultData.npf == "-1"){
        if(resultData.deslocamento != "-1" && resultData.ef != "-1"){
            let numeroEF = Number(resultData.ef.substring(0,resultData.ef.indexOf("-")));
            let numeroDesl = Number(resultData.deslocamento.substring(0,resultData.deslocamento.indexOf("-")));
            return(`${numeroEF - numeroDesl}-b`);
        }else{
            if(resultData.qpf != "-1"){
                if(resultData.qpf.indexOf("-") == -1){
                    let unidade = "";
                    let numero = Number(resultData.qpf.substring(0, resultData.qpf.length))
                    return(converteQPparaNP(numero, unidade));
                }else{
                    let unidade = resultData.qpf.substring(resultData.qpf.indexOf("-") + 1, resultData.qpf.length);
                    let numero = Number(resultData.qpf.substring(0, resultData.qpf.indexOf("-")));
                    return(converteQPparaNP(numero, unidade));
                }
            }else{
                return("-1");
            }
        }
    }else{
        return(resultData.npf);
    }
}

function getQPF(){
    if(resultData.qpf == "-1"){
        if(resultData.npf != "-1"){
            let number = Number(resultData.npf.substring(0, resultData.npf.indexOf("-")));
            return(converteNPparaQP(number));
        }else{
            return("-1");
        }
    }else{
        return(resultData.qpf);
    }

}

function getQPL(){
    if(resultData.qpl == "-1"){
        if(resultData.npl != "-1"){
            let number = Number(resultData.npl.substring(0, resultData.npl.indexOf("-")));
            return(converteNPparaQP(number));
        }else{
            return("-1");
        }
    }else{
        return(resultData.qpl);
    }

}

function setResults() {
    getDadosInseridos();
    let i = 0;
    while(i <=10){
        resultData.ml = getML();
        resultData.mf = getMF();
        resultData.el = getEL();
        resultData.ef = getEF();
        resultData.tamP = getTamP();
        resultData.deslocamento = getDeslocamento();
        resultData.npl = getNPL();
        resultData.npf = getNPF();
        resultData.qpf = getQPF();
        resultData.qpl = getQPL();
        i++;
    }

    if(!pronto()){
        alert("Resultados não confiáveis, não houve total validação ou faltaram dados!");
    }

    resultHTML.ml.innerHTML = resultData.ml;
    resultHTML.mf.innerHTML = resultData.mf;
    resultHTML.el.innerHTML = resultData.el;
    resultHTML.ef.innerHTML = resultData.ef;
    resultHTML.tamP.innerHTML = resultData.tamP;
    resultHTML.deslocamento.innerHTML = resultData.deslocamento;
    resultHTML.npl.innerHTML = resultData.npl;
    resultHTML.npf.innerHTML = resultData.npf;
    resultHTML.qpf.innerHTML = resultData.qpf;
    resultHTML.qpl.innerHTML = resultData.qpl;
}