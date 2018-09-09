let p1 = new Promise((res, rej) => {
  setTimeout(res, 2000, 'p1');
});
let p2 = new Promise((res, rej) => {
  setTimeout(res, 1000, 'p2');
});
let p3 = new Promise((res, rej) => {
  setTimeout(res, 3000, 'p3');
});


let po = new Promise((res, rej) => {
  setTimeout(res, 500, 'po');
});

// this doesn't seem to work
/*
let p4 = Promise;
setTimeout(() => {
  p4.resolve('p4');
}, 100);
*/

  
let p5resolve;
let p5reject;
let p5 = new Promise((res, rej) => {
  p5resolve = res;
  p5reject = rej;
});

setTimeout(() => {
  p5resolve('p5');
}, 100)

let pAll = Promise.all([p1,p2,p3,p5]);

let pRace = Promise.race([pAll, po]).then((winner) => {
  console.log(`Race winner: `, winner);
}).then(() => {
  console.log(`Participants: `, pAll, po);
})

pAll.then((values) => {
  console.log(values)
});
