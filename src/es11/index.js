const button = document.getElementById("btn");

button.addEventListener("click", async function(){
    const module = await import("./file.js");
    module.hello();
});


const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

const promise1 = new Promise((resolve, reject)=> reject("Reject"));
const promise2 = new Promise((resolve, reject)=> resolve("Resolve"));
const promise3 = new Promise((resolve, reject)=> resolve("Resolve 1"));


Promise.allSettled([promise1,promise2,promise3])
    .then(response => console.log(response))
    

console.log(window);
console.log(globalThis);

const fooo = 'ads' ?? 'default string';
console.log(fooo);

const user = {};
console.log(user?.profile?.email);

(user?.profile?.email) 
    ? console.log('email') 
    : console.log('fail')

