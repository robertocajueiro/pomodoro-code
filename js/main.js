const segundosPomodoro = 4000// Estamos usando 4 segundos para testes. O tempo oficial é 25*60*1000
const disparador = document.querySelector('#disparador')

disparador.addEventListener('click', () => {
    console.log("Disparador ativado.")

    // Criando o cronometro
    setTimeout(() => {
        console.log("Acabou o pomodoro!");
        alert("O seu tempo de produção do pomodoro acabou, vá descansar!");
    }, segundosPomodoro)
})
