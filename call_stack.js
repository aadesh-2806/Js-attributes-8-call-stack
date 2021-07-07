// call stack
// lifo
// Web Api's        ---------> link gto c++ eg setTimeOut() wait 3sec due to c++;

// zxcvgbh

function randomColor(){
    const r= Math.floor(Math.random()*255);
    const g= Math.floor(Math.random()*255);
    const b= Math.floor(Math.random()*255);
    return `rgb(${r} , ${g} , ${b})`;
}
let t=0;
const body = document.querySelector('body')
 while(parseInt(t)<=10000){
    setTimeout( function(){
        body.bgColor = randomColor();
    } , (1000 + t) )
    t+=1000;
}

const fakeRequestPromise = (url) =>{
    return new Promise((resolve , reject) => {
        const delay = Math.floor(Math.random()*4500)+500;
        setTimeout(()=> {
            if (delay>4000) {
                reject('Connection Timeout!!');
            }
            else{
                resolve(`data from ${url}`);
            }
        },delay)
    })
}
const fakeRequest = (url , success , faliure) =>{
        const delay = Math.floor(Math.random()*4500)+500;
        setTimeout(()=> {
            if (delay>4000) {
                faliure('Connection Timeout!!');
            }
            else{
                success(`data from ${url}`);
            }
        },delay)
}
fakeRequest('books.com/page1' , function(response){
    console.log('it worked');
    console.log(response);
    
    fakeRequest('books.com/page2' , function(response){
        console.log('it worked');
        console.log(response);
    } , function(err) {
        console.log('Error!!!');
    })

} , function(err) {
    console.log('Error!!!');
})

//fakeRequestPromise('google.com')
/* Promise {<pending>}__proto__: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined

Uncaught (in promise) Connection Timeout!!
(anonymous) @ call_stack.js:27
setTimeout (async)
(anonymous) @ call_stack.js:25
fakeRequestPromise
(anonymous) @ VM94:1
*/

/*res
//Promise {<pending>}__proto__: Promisecatch: ƒ catch()constructor: ƒ Promise()finally: ƒ finally()then: ƒ then()Symbol(Symbol.toStringTag): "Promise"__proto__: Object[[PromiseState]]: "fulfilled"[[PromiseResult]]: "data from google.com"
res
//Promise {<fulfilled>: "data from google.com"}*/


// const res= fakeRequestPromise('google.com')
// res
//     .then(()=> {
//         console.log('It Worksdvbgg');
//         fakeRequestPromise('google.com')
//         res
//             .then(()=> {
//                 console.log('It Worksdvbgg');
//                 fakeRequestPromise('google.com')
//                 res
//                     .then(()=> {
//                         console.log('It Worksdvbgg');
//                     })
//                     .catch(()=>{
//                         console.log("ohh nonoo");
//                     })                
//             })
//             .catch(()=>{
//                 console.log("ohh nonoo");
//             })
//     })
//     .catch(()=>{
//         console.log("ohh nonoo");
//     })

//best way is below

fakeRequestPromise('google.com')
    .then(()=> {
        console.log('It Worksdvbgg');
        return  fakeRequestPromise('google/page1')  //return for next than
    })
    .then(()=> {
        console.log('It Worksdvbgg');
        return  fakeRequestPromise('google/page2')
    })
    .then(()=> {
        console.log('It Worksdvbgg');
    })
    .catch(()=>{
        console.log("ohh nonoo");
    })