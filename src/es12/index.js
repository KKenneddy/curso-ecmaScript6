const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web";
const replaceString = string.replace("JavaScript", "Python");
console.log(string);
console.log(replaceString);

const replaceString2 = string.replaceAll("JavaScript", "Python");
console.log(replaceString2);

class Message {
    #show (val){
        console.log(val);
    };
    //get #add(val){

    //}
}

const message = new Message();
message.show('Hola');


const promise1 = new Promise((resolve, reject)=> reject("1"))
const promise2 = new Promise((resolve, reject)=> resolve("2"))
const promise3 = new Promise((resolve, reject)=> resolve("3"))

Promise.any([promise1,promise2,promise3])
    .then(response => console.log(response))


class AnyClass {
    constructor(element){
        this.ref = new WeakRef(element)
    }
}

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);