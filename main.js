var today = new Date();
var date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
var time = today.getHours()%12 + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
document.querySelector("body > h3").innerHTML += dateTime;
