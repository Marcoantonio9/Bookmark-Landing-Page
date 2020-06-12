let primeiroBotao = (primeiraFeatures) => {
    let display = document.querySelector('#primeiraFeatures').style.display
    if(display == 'none'){
        let acaoMostrar = document.querySelector('#primeiraFeatures').style
        acaoMostrar.display = 'block'
        
        let acaoBtnFt1 = document.querySelector('#btnFt1').style
        acaoBtnFt1.borderBottom = '2px solid #fb717e'
        
        let acaoBtnFt2 = document.querySelector('#btnFt2').style
        acaoBtnFt2.borderBottom = '2px solid #5d5d67'

        let acaoBtnFt3 = document.querySelector('#btnFt3').style
        acaoBtnFt3.borderBottom = '2px solid #5d5d67'

        let acaoOcultarFt2 = document.querySelector('#segundaFeatures').style
        acaoOcultarFt2.display = 'none'

        let acaoOcultarFt3 = document.querySelector('#terceiraFeatures').style
        acaoOcultarFt3.display = 'none'
    }else{
        let acaoOcultar = document.querySelector('#primeiraFeatures').style
        acaoOcultar.display = 'none'

        let acaoBtnFt1 = document.querySelector('#btnFt1').style
        acaoBtnFt1.borderBottom = '2px solid #5d5d67'
    }
}

let segundoBotao = (segundaFeatures) => {
    let display = document.querySelector('#segundaFeatures').style.display
    if(display == 'none'){
        let acaoMostrar = document.querySelector('#segundaFeatures').style
        acaoMostrar.display = 'block'
        
        let acaoBtnFt2 = document.querySelector('#btnFt2').style
        acaoBtnFt2.borderBottom = '2px solid #fb717e'
        
        let acaoBtnFt1 = document.querySelector('#btnFt1').style
        acaoBtnFt1.borderBottom = '2px solid #5d5d67'

        let acaoBtnFt3 = document.querySelector('#btnFt3').style
        acaoBtnFt3.borderBottom = '2px solid #5d5d67'

        let acaoOcultarFt1 = document.querySelector('#primeiraFeatures').style
        acaoOcultarFt1.display = 'none'

        let acaoOcultarFt3 = document.querySelector('#terceiraFeatures').style
        acaoOcultarFt3.display = 'none'
    }else{
        let acaoOcultar = document.querySelector('#segundaFeatures').style
        acaoOcultar.display = 'none'

        let acaoBtnFt1 = document.querySelector('#btnFt2').style
        acaoBtnFt1.borderBottom = '2px solid #5d5d67'
    }
}

let terceiroBotao = (terceiraFeatures) => {
    let display = document.querySelector('#terceiraFeatures').style.display
    if(display == 'none'){
        let acaoMostrar = document.querySelector('#terceiraFeatures').style
        acaoMostrar.display = 'block'
        
        let acaoBtnFt3 = document.querySelector('#btnFt3').style
        acaoBtnFt3.borderBottom = '2px solid #fb717e'
        
        let acaoBtnFt2 = document.querySelector('#btnFt2').style
        acaoBtnFt2.borderBottom = '2px solid #5d5d67'

        let acaoBtnFt1 = document.querySelector('#btnFt1').style
        acaoBtnFt1.borderBottom = '2px solid #5d5d67'

        let acaoOcultarFt2 = document.querySelector('#segundaFeatures').style
        acaoOcultarFt2.display = 'none'

        let acaoOcultarFt1 = document.querySelector('#primeiraFeatures').style
        acaoOcultarFt1.display = 'none'
    }else{
        let acaoOcultar = document.querySelector('#terceiraFeatures').style
        acaoOcultar.display = 'none'

        let acaoBtnFt3 = document.querySelector('#btnFt3').style
        acaoBtnFt3.borderBottom = '2px solid #5d5d67'
    }
}

//Mostrar e ocultar botões de texto
let abrirPrimeiroBtn = (btnQ1) => {
    let abrirTexto = document.querySelector('#quesfaq1').style.display
    if(abrirTexto == 'none'){
        let mostrarTxt = document.querySelector('#quesfaq1').style
        mostrarTxt.display = 'block'
        
        let acaoBtnBaixo = document.querySelector('.btnBaixo').style 
        acaoBtnBaixo.display = 'none'
        
        let acaoBtnCima = document.querySelector('.btnCima').style
        acaoBtnCima.display = 'block'
        acaoBtnCima.color = '#fb717e'
    }else{
        let ocultarTxt = document.querySelector('#quesfaq1').style
        ocultarTxt.display = 'none'

        let acaoBtnBaixo = document.querySelector('.btnBaixo').style
        acaoBtnBaixo.display = 'block'
        acaoBtnBaixo.color = '#5266df'

        let acaoBtnCima = document.querySelector('.btnCima').style
        acaoBtnCima.display = 'none'
    }
}

let abrirSegundoBtn = (btnQ2) => {
    let abrirTexto = document.querySelector('#quesfaq2').style.display
    if(abrirTexto == 'none'){
        let mostrarTxt = document.querySelector('#quesfaq2').style
        mostrarTxt.display = 'block'
        
        let acaoBtnBaixo = document.querySelector('.btnBaixo2').style 
        acaoBtnBaixo.display = 'none'
        
        let acaoBtnCima = document.querySelector('.btnCima2').style
        acaoBtnCima.display = 'block'
        acaoBtnCima.color = '#fb717e'
    }else{
        let ocultarTxt = document.querySelector('#quesfaq2').style
        ocultarTxt.display = 'none'

        let acaoBtnBaixo = document.querySelector('.btnBaixo2').style
        acaoBtnBaixo.display = 'block'
        acaoBtnBaixo.color = '#5266df'

        let acaoBtnCima = document.querySelector('.btnCima2').style
        acaoBtnCima.display = 'none'
    }
}

let abrirTerceiroBtn = (btnQ3) => {
    let abrirTexto = document.querySelector('#quesfaq3').style.display
    if(abrirTexto == 'none'){
        let mostrarTxt = document.querySelector('#quesfaq3').style
        mostrarTxt.display = 'block'
        
        let acaoBtnBaixo = document.querySelector('.btnBaixo3').style 
        acaoBtnBaixo.display = 'none'
        
        let acaoBtnCima = document.querySelector('.btnCima3').style
        acaoBtnCima.display = 'block'
        acaoBtnCima.color = '#fb717e'
    }else{
        let ocultarTxt = document.querySelector('#quesfaq3').style
        ocultarTxt.display = 'none'

        let acaoBtnBaixo = document.querySelector('.btnBaixo3').style
        acaoBtnBaixo.display = 'block'
        acaoBtnBaixo.color = '#5266df'

        let acaoBtnCima = document.querySelector('.btnCima3').style
        acaoBtnCima.display = 'none'
    }
}

let abrirQuartoBtn = (btnQ4) => {
    let abrirTexto = document.querySelector('#quesfaq4').style.display
    if(abrirTexto == 'none'){
        let mostrarTxt = document.querySelector('#quesfaq4').style
        mostrarTxt.display = 'block'
        
        let acaoBtnBaixo = document.querySelector('.btnBaixo4').style 
        acaoBtnBaixo.display = 'none'
        
        let acaoBtnCima = document.querySelector('.btnCima4').style
        acaoBtnCima.display = 'block'
        acaoBtnCima.color = '#fb717e'
    }else{
        let ocultarTxt = document.querySelector('#quesfaq4').style
        ocultarTxt.display = 'none'

        let acaoBtnBaixo = document.querySelector('.btnBaixo4').style
        acaoBtnBaixo.display = 'block'
        acaoBtnBaixo.color = '#5266df'

        let acaoBtnCima = document.querySelector('.btnCima4').style
        acaoBtnCima.display = 'none'
    }
}

let validarEmail = () =>{
    let email = document.querySelector('#formulario-final').value

    let validando = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
	if(!validando.exec(email) ){
		alert('Email inválido!')
		return false
    }
    else{
        alert('E-mail enviado com sucesso!')
        return true
    }

}