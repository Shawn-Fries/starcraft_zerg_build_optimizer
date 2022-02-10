export default class Game {

    constructor() {
        this.seconds = 0;
        this.minutes = 0;
        this.drone_count = 12;
        this.minerals = 50;
        this.mining_rate = 42 / 60; // Per second
        this.reducedMiningRate = 18 / 60; // Per second
        this.hatchery_count = 1;
        this.drone_construction_time = 12;
        this.drone_mineral_cost = 50;
        this.hatchery_construction_time = 71;
        this.workerTravelTime = 15;
        this.hatchery_mineral_cost = 300;
        this.max_supply = 14;
        this.maxPossibleSupply = 200;
        this.overlord_construction_time = 18;
        this.overlord_mineral_cost = 100;
        this.hatchery_supply_increase = 6;
        this.overlord_supply_increase = 8;
        this.currentLarvaCount = 3;
        this.maxLarvaCount = 3;
        this.larvaConstructionTime = 11;
    }

    displayTime() {
        let minutes = this.minutes;
        if (minutes < 10) minutes = `0${minutes}`;
        let seconds = this.seconds;
        if (seconds < 10) seconds = `0${seconds}`;
        return `${minutes}:${seconds}`
    }

    addTime(seconds) {
        let new_seconds = this.seconds + seconds;
        this.minutes += Math.floor(new_seconds / 60);
        this.seconds = new_seconds % 60;
    }

    addDrone() {
        this.addTime(this.drone_construction_time);
        if (this.minerals >= this.drone_mineral_cost && this.currentLarvaCount > 0) {
            this.minerals -= this.drone_mineral_cost;
            let optimalMinerals = Math.min(this.drone_count, 16 * this.hatchery_count) * this.mining_rate * this.drone_construction_time;
            let suboptimalMinerals = 0;
            if (this.drone_count >= this.hatchery_count * 16) {
                suboptimalMinerals = Math.min(this.drone_count - this.hatchery_count * 16, 8 * this.hatchery_count) * this.reducedMiningRate * this.drone_construction_time;
            }
            this.minerals += optimalMinerals + suboptimalMinerals;
            this.drone_count += 1;
           // debugger;
        } else {
            let optimalMinerals = Math.min(this.drone_count, 16 * this.hatchery_count) * this.mining_rate * this.drone_construction_time;
            let suboptimalMinerals = 0;
            if (this.drone_count >= this.hatchery_count * 16) {
                suboptimalMinerals = Math.min(this.drone_count - this.hatchery_count * 16, 8 * this.hatchery_count) * this.reducedMiningRate * this.drone_construction_time;
            }
            this.minerals += optimalMinerals + suboptimalMinerals;
            this.currentLarvaCount = Math.min(this.currentLarvaCount + 1, this.maxLarvaCount);
        }

    }

    addHatchery() {
        this.addTime(this.hatchery_construction_time + this.workerTravelTime);
        if (this.minerals >= this.hatchery_mineral_cost) {
            this.minerals -= 300;
            this.drone_count -= 1;
            this.hatchery_count += 1;
            this.max_supply += this.hatchery_supply_increase;
            this.maxLarvaCount += 3;
            this.currentLarvaCount = Math.min(this.currentLarvaCount + 7, this.maxLarvaCount);
        } else {
            this.currentLarvaCount = Math.min(this.currentLarvaCount + 6, this.maxLarvaCount);
        }

        let optimalMinerals = Math.min(this.drone_count, 16 * this.hatchery_count) * this.mining_rate * (this.workerTravelTime + this.hatchery_construction_time);
        let suboptimalMinerals = 0;
        if (this.drone_count >= this.hatchery_count * 16) {
            suboptimalMinerals = Math.min(this.drone_count % (this.hatchery_count * 16), 8 * this.hatchery_count) * this.reducedMiningRate * (this.workerTravelTime + this.hatchery_construction_time);
        }
        this.minerals += optimalMinerals + suboptimalMinerals;
    }

    addOverlord() {
        this.addTime(this.overlord_construction_time);
        this.minerals -= this.overlord_mineral_cost;
        this.max_supply = this.overlord_supply_increase;

        this.minerals = this.overlord_construction_time * this.drone_count * this.mining_rate;
    }

    getDroneCount() {
        return this.drone_count;
    }

    getHatcheryCount() {
        return this.hatchery_count;
    }

    getLarvaCount() {
        return this.currentLarvaCount;
    }

    getMineralCount() {
        return Math.floor(this.minerals);
    }
}