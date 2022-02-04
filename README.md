# starcraft_zerg_build_optimizer

# Background:

The Blizzard game Starcraft 2 consists of 2 players in a 1 vs 1 setting competing to develop an economy and defeat the other player (by destroying their buildings). This is done by investing in producing workers which cost minerals but then can gather them (a type of resource constraint) and which also occupy supply (another type of resource constraint which minerals can be invested into increasing) and then producing an army to engage in combat with the other player. The game winner is determined by whoever uses their in-game time most efficiently in order to execute a gameplan that defeats the opponent's strategy. Therefore, the game has a heavy inherent "speedrunning" component.

This project aims to allow experimentation with a very simplified view of the core gameplay in order to generate a faster "build order" in an easy manner with a frontend. The full game contains 3 races, dozens of possible units (mostly army units), multiple building types, and upgrades. However, this project at first will only aim to focus on one race (Zerg) and in fact only on the tradeoffs between producing workers (aka Drones) or saving up to produce more Hatcheries (a special resource gathering building that produces another resource constraint called Larvaover time, which can be converted into Drones) in order to see how to max out on possible worker count (capped in-game at 200) most quickly. The result is not intuitively obvious; each Hatchery (with 1 per base) can support only a maximum number of workers (16 at maximum efficiency, 24 at lowered efficiency per unit but still at higher mineral production overall). And in some cases it may be optimal to stop producing workers in order to save up for a Hatchery at a new base. In any case the project allows first of all the user to experiment with different approaches and see the time taken, but ideally the project will include a solver that will attempt to find a good solution using an algorithm (not necessarily the perfect solution because the game state complexity may be too high). 

# Functionality & MVPs

In Starcraft Zerg Build Optimizer, users will 

1. Have a turn based view of the game state
2. Be able to see a timer of game time taken cumulatively at each step
3. Click respective buttons to produce a Drone OR save up and produce a Hatchery
4. Click a solver button to have the computer attempt to generate a nearly optimal build path
5. View the steps taken cumulatively to get to 200 supply

In addition, this project will include
1. A README (this file)
2. Instructions at the top for how to use this application

# Wireframe

![image](https://user-images.githubusercontent.com/95226683/152575398-e896962b-fb13-463e-abde-4dc83b49e950.png)


# Technologies and Libraries

The tool will be written in Javascript and intends to make use of Canvas to display some things about game state and the icons for what to produce next

# Timeline 
Friday Afternoon & Weekend - get something displaying onscreen (timer and icons for Drone and Hatchery to produce)

Monday - Work on game logic for incrementing timer and game state. That is, at a given state, the mineral count is incremented according to the worker count in the previous state and the max supply/current worker/hatchery counts are updated which will be reflected in the display (implement classes + functions to do this).

Tuesday - Continue to work on game logic (advancing state and particularly making sure it displays correctly on this day and try to start solver (automatic play)

Wednesday - work on solver (automatic play) and ensure display of all actions taken thus far (scrollable list on the right) works

Thursday Morning - deploy project
