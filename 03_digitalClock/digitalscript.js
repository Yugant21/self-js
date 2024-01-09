const clock = document.getElementById('digiClock')

setInterval(function(){
    let date = new Date();

    clock.innerHTML = date.toLocaleTimeString();
}, 1000)