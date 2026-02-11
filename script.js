
const target = new Date("Dec 1, 2026 00:00:00").getTime();

setInterval(()=>{
let now=new Date().getTime();
let d=target-now;

if(d<0){
document.getElementById("timer").innerHTML="Admissions Closed";
return;
}

let days=Math.floor(d/(1000*60*60*24));
document.getElementById("timer").innerHTML="⏳ "+days+" Days Left";
},1000);


function login(){
let u=document.getElementById("user").value;
let p=document.getElementById("pass").value;

if(u==="Mikey Sano" && p==="131313")
document.getElementById("loginMsg").innerText="Login Successful";
else
document.getElementById("loginMsg").innerText="Wrong ID or Password";
}
