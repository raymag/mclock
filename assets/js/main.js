function setClock(){
    console.log('Setting clock...')
    const hourPointer = document.querySelector('#hour-pointer')
    const minutePointer = document.querySelector('#minute-pointer')
    const timer = document.querySelector('#timer h1')

    let time = Date.now()
    let hours = new Date(time).getHours()
    let minutes = new Date(time).getMinutes()

    let hoursDegrees = 15*hours
    let minutesDegrees = 6*minutes

    hourPointer.style.transform = `rotate(${hoursDegrees}deg) translate( 0, -35px )`
    minutePointer.style.transform = `rotate(${minutesDegrees}deg) translate( 0, -60px )`

    if(hours.toString().length < 2){
        hours = '0'+hours.toString()
    }
    if(minutes.toString().length < 2){
        minutes = '0'+minutes.toString()
    }
    timer.innerText = `${hours}:${minutes}`
}

setInterval(setClock, 500)