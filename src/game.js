export default class Game {

    constructor() {
        this.seconds = 0;
        this.minutes = 0;
        this.drone_count = 12;
        this.minerals = 50;
        this.mining_rate = 41.25 / 60; // Per second
        this.hatchery_count = 1;
        this.drone_construction_time = 12;
        this.drone_mineral_cost = 50;
        this.hatchery_construction_time = 71;
        this.hatchery_mineral_cost = 300;
        this.max_supply = 14;
        this.overlord_construction_time = 18;
        this.overlord_mineral_cost = 100;
        this.hatchery_supply_increase = 6;
        this.overlord_supply_increase = 8;
    }

    displayTime() {
        return `${this.minutes}:${this.seconds}`
    }

    addTime(seconds) {
        new_seconds = this.seconds + seconds;
        this.minutes += Math.floor(new_seconds / 60);
        this.seconds = new_seconds % 60;
    }

    addDrone() {
        this.addTime(this.drone_construction_time);
        this.minerals -= this.drone_mineral_cost;
        this.minerals += this.drone_count * this.mining_rate * this.drone_construction_time;

        this.drone_count += 1;
    }

    addHatchery() {
        this.addTime(this.hatchery_construction_time);
        this.minerals -= 300;
        this.drone_count -= 1;
        this.max_supply += this.hatchery_supply_increase;

        this.minerals += this.hatchery_construction_time * this.drone_count * this.mining_rate;
    }

    addOverlord() {
        this.addTime(this.overlord_construction_time);
        this.minerals -= this.overlord_mineral_cost;
        this.max_supply = this.overlord_supply_increase;

        this.minerals = this.overlord_construction_time * this.drone_count * this.mining_rate;
    }
}