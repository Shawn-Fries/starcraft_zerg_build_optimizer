import Game from './game.js';

document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('canvas');
    const canvasEl = canvas[0]
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 400;

    const drone = new Image();
    drone.src = '../src/drone.jpeg';
    drone.addEventListener('load', function() {
        
        ctx.drawImage(drone, 0, 0, 57, 56);
    })
    
    const hatchery = new Image();
    hatchery.src = '../src/hatchery.jpg';
    hatchery.addEventListener('load', function () {
        ctx.drawImage(hatchery, 75, 0, 76, 56);
    })

    const game = new Game();

});

const ui = document.getElementById('canvas');

ui.addEventListener('click', function (e) {
    if (e.pageX >= ui.offsetLeft + ui.clientLeft &&
        e.pageX <= ui.offsetLeft + ui.clientLeft + 57 &&
        e.pageY >= ui.offsetTop + ui.clientTop &&
        e.pageY <= ui.offsetTop + ui.clientTop + 56) {
            game.addDrone();
        }

    if (e.pageX >= ui.offsetLeft + ui.clientLeft + 75 &&
        e.pageX <= ui.offsetLeft + ui.clientLeft + 75 + 76 &&
        e.pageY >= ui.offsetTop + ui.clientTop &&
        e.pageY <= ui.offsetTop + ui.clientTop + 56) {
        game.addHatchery();
    }
});