"use strict";
exports.__esModule = true;
var Size;
(function (Size) {
    Size["small"] = "small";
    Size["medium"] = "medium";
    Size["large"] = "large";
})(Size || (Size = {}));
var Toppings;
(function (Toppings) {
    Toppings["cheese"] = "cheese";
    Toppings["nuts"] = "nuts";
    Toppings["paneer"] = "paneer";
})(Toppings || (Toppings = {}));
var pizza1;
pizza1 = {
    id: 101,
    base: 'pan',
    size: Size.medium,
    toppings: Toppings.paneer
};
var pizza2;
pizza2 = {
    id: 102,
    base: 'big pan',
    size: Size.large,
    toppings: Toppings.cheese
};
console.log(pizza1);
console.log(pizza2);
function checkSize(pizza) {
    switch (pizza1.size) {
        case Size.small:
            console.log("pizza of small size will be delivered");
            break;
        case Size.medium:
            console.log("pizza of medium size will be delivered");
            break;
        case Size.large:
            console.log("pizza of large size will be delivered");
            break;
    }
}
function checkToppings(pizza) {
    switch (pizza1.toppings) {
        case Toppings.cheese:
            console.log("cheese topping is selected for pizza");
            break;
        case Toppings.nuts:
            console.log("cheese topping is selected for pizza");
            break;
        case Toppings.paneer:
            console.log("cheese topping is selected for pizza");
            break;
    }
}
checkSize(pizza1);
checkToppings(pizza1);
