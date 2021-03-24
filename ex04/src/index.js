const BAKING_TEMPERATURES = {
    cake: { low: 100, high: 250 },
    bread: { low: 150, high: 220 },
    pie: { low: 200, high: 230 }
};

function main(baking) {
    const { bread: { low: lowBread } } = baking;
    const { bread: { high: highBread } } = baking; 
    
    return { lowBread, highBread };
}

console.log(main(BAKING_TEMPERATURES));
module.exports = main;