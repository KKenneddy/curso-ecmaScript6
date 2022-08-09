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
