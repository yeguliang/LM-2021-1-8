'use strict';
function getRandom(max, base) {
    return Math.floor(Math.random() * max + (base ? base : 0));
}
module.exports ={
    getRandom,
}
