
   const { Date, Math } = require("core-js");

//var date=new Date(month)
var num=Math.random()*9000

//const dt=Date.now();
const date= new Date();
let month=date.getMonth()+1;
if(month<10){
    month='0'+month
}

let year=date.getFullYear();

var id="LBF"+parseInt(num)+month+year


console.log(id)




