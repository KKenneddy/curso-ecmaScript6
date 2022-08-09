function newFunction(name, age, country){
    var name = name || 'Kenendy';
    var age = age || 24;
    var country = country || 'Rep. Dom.';
    console.log(name, age, country);
}

//es6
function newFunction2(name = 'kennedy', age = 24, country = 'RD'){
    console.log(name, age, country);
}

newFunction2();
newFunction2('Juan', 32, 'EEUU');

let hello = 'hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = "Qui consequatur. commodi. Ipsum vel duis yet minima \n" + "otra frase epica que necesitamos.";
//es6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);

let person = {
    name: 'Kennedy',
    age: 24,
    country: 'RD'
}

console.log(person.name, person.age);

let {name} = person;
console.log(name);

let team1 = ['Kennedy', 'Julian', 'Richardo'];
let team2 = ['Valeria', 'Jessica', 'Camila'];

let education = ['david', ...team1, ...team2];
console.log(education);

{
    var globalVar = 'global var'
}
{
    let globalLet = 'global let'
    console.log(globalLet);
}
console.log(globalVar);

const a = 'b';
a = 'a';
console.log(a);

let nameA = 'Kennedy';
let age = 24;

let obj = {name: name, age: age};
//es6
let obj2 = {name, age}
console.log(obj2);

const names = [
    {name: 'Kennedy', age: 24},
    {name: 'Yesica', age: 27}
];

let listOfNames = names.map(function (item){
    console.log(item.name);
});

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country)=>{
    //...
}

const listOfNames4 = name => {
    //...
}

const square = num => num * num;

const helloPromise = () => {
    return new Promise ((resolve, reject) => {
        if(false){
            resolve('hey!');
        }else{
            reject('Ups!')
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(()=> console.log('hola'))
    .catch((err) => {
        console.log(err)
    });

class Calculator {
    constructor (){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valorA, valueB){
        this.valueA = valorA;
        this.valueB =valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new Calculator();
console.log(calc.sum(2, 8));

import { hello } from './module';

hello();

function* helloWorld(){
    if(true){
        yield 'Hello, '
    }
    if(true){
        yield 'world';
    }
};

const generateHello = helloWorld();

console.log(generateHello.next().value);
console.log(generateHello.next().value);
console.log(generateHello.next().value);