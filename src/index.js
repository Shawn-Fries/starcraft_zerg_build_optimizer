import Game from './game.js';

document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('canvas');
    //const canvasEl = canvas[0]
    const ctx = canvas.getContext('2d');
    canvas.width = 830;
    canvas.height = 559;
    ctx.font = '36px serif';
    ctx.fillStyle = '#eaeaea';
    const game = new Game();

    const map = new Image();
    map.src = '../src/atmospheres.jpg';
    map.addEventListener('load', function () {
        ctx.drawImage(map, 0, 0, 600, 559);
    })

    const drone = new Image();
    drone.src = '../src/drone.jpeg';
    drone.addEventListener('load', function() {
        ctx.drawImage(drone, canvas.width - 225, 100, 57, 56);
    })
    
    const hatchery = new Image();
    hatchery.src = '../src/hatchery.jpg';
    hatchery.addEventListener('load', function () {
        ctx.drawImage(hatchery, canvas.width - 165, 100, 66, 56);
    })

    const minerals = new Image();
    minerals.src = '../src/minerals.jpeg';
    minerals.addEventListener('load', function () {
        ctx.drawImage(minerals, canvas.width - 90, 100, 56, 56);
    })

    ctx.fillText(game.displayTime(), canvas.width - 200, 50, 150);
    ctx.fillText(game.getDroneCount(), canvas.width - 225, 190, 100);
    ctx.fillText(game.getHatcheryCount(), canvas.width - 150, 190, 100);
    ctx.fillText(game.getMineralCount(), canvas.width - 90, 190, 100);

    canvas.addEventListener('click', function (e) {
        // Drone
        if (e.pageX >= canvas.offsetLeft + canvas.clientLeft + canvas.width - 225 &&
            e.pageX <= canvas.offsetLeft + canvas.clientLeft + canvas.width + 57 - 225 &&
            e.pageY >= canvas.offsetTop + canvas.clientTop + 100 &&
            e.pageY <= canvas.offsetTop + canvas.clientTop + 100 + 56) {
                game.addDrone();
                ctx.clearRect(canvas.width - 225, 190 - 30, 60, 50);
                ctx.fillText(game.getDroneCount(), canvas.width - 225, 190, 100);
                ctx.clearRect(canvas.width - 200, 0, 100, 100);
                ctx.fillText(game.displayTime(), canvas.width - 200, 50, 150);
                ctx.clearRect(canvas.width - 90, 190 - 30, 100, 150);
                ctx.fillText(game.getMineralCount(), canvas.width - 90, 190, 100);
        }

        // Hatchery
        if (e.pageX >= canvas.offsetLeft + canvas.clientLeft + canvas.width - 165 &&
            e.pageX <= canvas.offsetLeft + canvas.clientLeft + canvas.width - 165 + 66 &&
            e.pageY >= canvas.offsetTop + canvas.clientTop + 100 &&
            e.pageY <= canvas.offsetTop + canvas.clientTop + 156) {
                game.addHatchery();
                ctx.clearRect(canvas.width - 150, 190 - 30, 50, 50);
                ctx.fillText(game.getHatcheryCount(), canvas.width - 150, 190, 100);
                ctx.clearRect(canvas.width - 200, 0, 100, 100);
                ctx.fillText(game.displayTime(), canvas.width - 200, 50, 150);
                ctx.clearRect(canvas.width - 90, 190 - 30, 100, 150);
                ctx.fillText(game.getMineralCount(), canvas.width - 90, 190, 100);
                ctx.clearRect(canvas.width - 225, 190 - 30, 60, 50);
                ctx.fillText(game.getDroneCount(), canvas.width - 225, 190, 100);
        }
    });

});