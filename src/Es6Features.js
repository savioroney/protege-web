const [a, ...resto] = [1, 2, 3, 4, 5];

console.log(a);
console.log(resto);

// --

const [start] = [1, 2, 3, 4, 5];

console.log(start);

// --

const peaks = ["Tallac", "Ralston", "Rose"];
const canyons = ["Ward", "Blackwood"];
const tahoe = [...peaks, ...canyons];

console.log(tahoe);
// --

const names = ["Tallac", "Ralston", "Rose"];
const [last] = names.reverse();

console.log(last);
console.log(names.join(", "));
const morning = {
    breakfast: "oatmeal",
    lunch: "peanut butter and jelly"
};

// --

const dinner = "mac and cheese";

const backpackingMeals = {
    ...morning,
    dinner
};

console.log(backpackingMeals);

//-

const obj = {
    message: "They can be added to objects like variables",
    log(message) {
        console.log(message);
    }
};

obj.log(obj.message);
