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