// let d = new Date();
// let time = d.toLocaleTimeString();
// console.log(time);

function printTime(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
var intervalId = setInterval(printTime,1000); 