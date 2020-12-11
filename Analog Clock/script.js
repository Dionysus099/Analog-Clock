setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minHand = document.querySelector('[data-minute-hand]')
const secHand = document.querySelector('[data-second-hand]')

function setClock()
{
    const currentDate = new Date()

    const sec = currentDate.getSeconds() / 60
    const min = (sec + currentDate.getMinutes()) / 60
    const hour = (min + currentDate.getHours()) / 12

    setRotation(secHand, sec)
    setRotation(minHand, min)
    setRotation(hourHand, hour)
}

function setRotation(data, angleRatio)
{
    data.style.setProperty('--angle', angleRatio * 360)
}

setClock()