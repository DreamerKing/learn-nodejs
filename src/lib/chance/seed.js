import Chance from 'chance';

const chance1 = new Chance('foo');
const chance2 = new Chance(1234);
const chance3 = new Chance("hold", "me", "closer");
const chance = new Chance().bool();
console.log(chance1.random(), chance2.random(), chance3.random(), chance);