var today = new Date();
var date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours()%12 + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
document.write(dateTime);
// console.log('Date is: ', dateTime);
