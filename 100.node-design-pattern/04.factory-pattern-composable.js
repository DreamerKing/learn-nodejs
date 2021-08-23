const stampit = require("@stamp/it");

const character = stampit().props({
    name: 'anonymous',
    lifePoints: 100,
    x: 0,
    y: 0
});

const c = character();
c.name = "Jhon";
c.lifePoints = 10;
console.log(c);

const mover = stampit().methods({
    move(x, y) {
        this.x = x;
        this.y = y;
        console.log(`${this.name} moved to [${this.x}, ${this.y}]`);
    }
});

const slasher = stampit().methods({
    slash(direction) {
        console.log(`${this.name} slashed to the ${direction}`);
    }
});

const shooter = stampit().props({
    bullets: 6
}).methods({
    shoot(direction) {
        if (this.bullets > 0) {
            --this.bullets;
            console.log(`${this.name} shoot to the ${direction}`);
        }
    }
});

const runner = stampit.compose(character, mover);
const samurai = stampit.compose(character, mover, slasher);
const sniper = stampit.compose(character, shooter);
const gunslinger = stampit.compose(character, mover, shooter);
const westernSamurai = stampit.compose(gunslinger, samurai);

const gojiro = westernSamurai();
gojiro.name = 'Gojiro Kiryu';
gojiro.move(1, 0);
gojiro.slash('left');
gojiro.shoot('right');