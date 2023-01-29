const milissegundosPomodoro = 4000// Estamos usando 4 segundos para testes. O tempo oficial é 25*60*1000
const milissegundosIntervaloCurto = 4000 // Intervalo de 5 minutos é igual 300000
const milissegundosIntervaloLongo = 900000 // Intervalo de 5 minutos é igual 300000
const disparador = document.querySelector('#disparador')
const cronometro = document.querySelector('#cronometro')
const historico = document.querySelector('#historico')
const tamanhoDoCiclo = 4
let milissegundosRestantes = 0
let contador
let modo = ''

disparador.addEventListener('click', () => {
    console.log("Disparador ativado.")

    if(disparador.textContent=="Pausar") {
        clearInterval(contador)
        disparador.textContent="Retomar"
    } else {
        if(disparador.textContent=="Começar") {
            modo = "pomodoro"
            milissegundosRestantes = milissegundosPomodoro - 1000
            historico.textContent = parseInt(historico.textContent) + 1
    
        } else if (disparador.textContent=="Intervalo") {
            modo = "intervalo"
            if(historico.textContent % tamanhoDoCiclo == 0) {
                milissegundosRestantes = milissegundosIntervaloLongo
            } else {
                milissegundosRestantes = milissegundosIntervaloCurto
            }
            milissegundosRestantes -= 1000
        }

        disparador.textContent="Pausar"
        contador = setInterval('contadorDeSegundos()',1000);
    }
})

function contadorDeSegundos() {
    
    if (milissegundosRestantes == 0) {
        cronometro.textContent= "00:00"
        console.log("O seu tempo de produção do pomodoro acabou, vá descansar!");
       
       if(modo=="pomodoro") {
            disparador.textContent="Intervalo"
            if(historico.textContent % tamanhoDoCiclo == 0) {
                document.querySelector('body').style.background = "#29678a"
                disparador.style.color = "#29678a"

            } else {
                document.querySelector('body').style.background = "#287b7c"
                disparador.style.color = "#287b7c"
            }

       } else if(modo=="intervalo"){
            disparador.textContent="Começar"
            document.querySelector('body').style.background = "#C84949"
            disparador.style.color = "#C84949"
       } 
        
        clearInterval(contador)
    } else {
        cronometro.textContent = formatadorDoTempo(milissegundosRestantes/1000)
    }
     
    milissegundosRestantes -= 1000;
}

function formatadorDoTempo(tempo) {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    return (minutos.toString().padStart(2, '0')+":"+segundos.toString().padStart(2, '0'))
}
