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
        ctx.drawImage(drone, canvas.width - 230, 100, 57, 56);
    })
    
    const hatchery = new Image();
    hatchery.src = '../src/hatchery.jpg';
    hatchery.addEventListener('load', function () {
        ctx.drawImage(hatchery, canvas.width - 165, 100, 66, 56);
    })

    const minerals = new Image();
    minerals.src = '../src/minerals.jpeg';
    minerals.addEventListener('load', function () {
        ctx.drawImage(minerals, canvas.width - 100, 100, 56, 56);
    })

    ctx.fillText(game.displayTime(), canvas.width -  50, 0, 100);
    ctx.fillText(game.getDroneCount(), 0, 200, 100);
    ctx.fillText(game.getHatcheryCount(), 76, 200, 100);
    ctx.fillText(game.getMineralCount(), 76 + 75 + 5, 200, 100);

    canvas.addEventListener('click', function (e) {
        // Drone
        if (e.pageX >= canvas.offsetLeft + canvas.clientLeft &&
            e.pageX <= canvas.offsetLeft + canvas.clientLeft + 57 &&
            e.pageY >= canvas.offsetTop + canvas.clientTop + 100 &&
            e.pageY <= canvas.offsetTop + canvas.clientTop + 100 + 56) {
                game.addDrone();
                ctx.clearRect(0, 167, 67, 40);
                ctx.fillText(game.getDroneCount(), 0, 200, 100);
                ctx.clearRect(0, 0, 100, 100);
                ctx.fillText(game.displayTime(), 0, 50, 100);
                ctx.clearRect(76 + 75 + 5, 167, 100, 40);
                ctx.fillText(game.getMineralCount(), 76 + 75 + 5, 200, 100);
        }

        // Hatchery
        if (e.pageX >= canvas.offsetLeft + canvas.clientLeft + 75 &&
            e.pageX <= canvas.offsetLeft + canvas.clientLeft + 75 + 76 &&
            e.pageY >= canvas.offsetTop + canvas.clientTop + 100 &&
            e.pageY <= canvas.offsetTop + canvas.clientTop + 156) {
                game.addHatchery();
                ctx.clearRect(75, 167, 76, 40);
                ctx.fillText(game.getHatcheryCount(), 76, 200, 100);
                ctx.clearRect(0, 0, 100, 100);
                ctx.fillText(game.displayTime(), 0, 50, 100);
                ctx.clearRect(76 + 75 + 5, 167, 100, 40);
                ctx.fillText(game.getMineralCount(), 76 + 75 + 5, 200, 200);
                ctx.clearRect(0, 167, 67, 40);
                ctx.fillText(game.getDroneCount(), 0, 200, 100);
        }
    });

});