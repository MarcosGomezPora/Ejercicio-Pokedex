// Iteration1
const suma = (a = 10, b = 5) => {
    console.log(a + b);
};
  
suma();
suma(5);
suma(5, 1);

//Iteraion2
const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020};
let {title, gender, year} = game;
console.log(title);
console.log(gender);
console.log(year);

const fruits = ['Banana', 'Strawberry', 'Orange'];
const [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};
const {name, race} = animalFunction();
console.log(name);
console.log(race);

const car = {name1: 'Mazda 6', itv: [2015, 2011, 2020] };
const {name1, itv} = car;
const [year1, year2, year3] = itv
console.log(name1);
console.log(itv);
console.log(year1);
console.log(year2);
console.log(year3);
