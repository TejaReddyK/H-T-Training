export {}

enum Size  {

    small='small',

    medium='medium',

    large='large'

}

enum Toppings  {

    cheese='cheese',

    nuts='nuts',

    paneer='paneer'

}

interface Pizza{

    id:number,

    base: string,

    size:Size,

    toppings:Toppings

}



let pizza1:Pizza;



pizza1={

    id:101,

    base : 'pan',
    
    size:Size.medium,

    toppings:Toppings.paneer



}

let pizza2:Pizza;



pizza2={

    id:102,

    base : 'big pan',

    size:Size.large,

    toppings:Toppings.cheese



}

console.log(pizza1);

console.log(pizza2);



function checkSize(pizza:Pizza){

    switch(pizza1.size){

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

function checkToppings(pizza:Pizza){

    switch(pizza1.toppings){

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
