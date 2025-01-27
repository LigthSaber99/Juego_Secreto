let numeroSecreto= 0; 
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector  (elemento);
    elementoHTML.innerHTML = texto;
}
function vereficarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 
    console.log(numeroSecreto);
    console.log(numeroDeUsuario);
    if(numeroDeUsuario === numeroSecreto){
            asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento': 'intentos'}` );
            document.getElementById('reiniciar').removeAttribute('disabled'); 
    }else{
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja(); 
    }
    return;
}
function generarNumeroSecreto(){
   //return Math.floor(Math.random()*10)+1;
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    ////////////////////////////////////////
    if(listaNumerosSorteados.length == numeroMaximo){
            asignarTextoElemento('p', 'Ya se sorterarton todos los numeros posibles');
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
       }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado; 
       }
    }
}
function limpiarCaja(){
  document.querySelector('#valorUsuario').value= '';
}
function concidiconesIniciales(){
    asignarTextoElemento('H1','Juego del Numero Secreto!' );
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}` ); 
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensAJE DE INTERVALO DE NUMEROS}
    //GENERAR EL NUMERO ALEATORIO
    //INICIALIZAR EL NUMERO DE INTENTOS
    concidiconesIniciales();
    //deshabilitar boton
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}
concidiconesIniciales();  