const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let se = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) hr = '0' + min;

    if (se < 10) hr = '0' + se;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = se;
})