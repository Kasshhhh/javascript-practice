const endDate = "1 march 2024 10:00 PM";
document.getElementById("end-Date").innerText=endDate;
const inputs =document.querySelectorAll("input")
function clock()
{
    const end =new Date(endDate);
    const now=new Date();
    const diff = (end-now)/1000;//divide by 1000 convert milisec to sec......
    //if(diff<0)return;//pass ki date ke liye esliye date negative na jaye....
    //console.log(diff);
    inputs[0].value =Math.floor(diff/3600/24);//3600 milisec
    inputs[1].value =Math.floor(diff/3600) % 24;
    inputs[2].value =Math.floor(diff/3600)%60;
    inputs[3].value =Math.floor(diff)%60
    //console.log(now);
    //console.log(end);
}
clock()
setInterval(
()=>{
    clock()
},
1000
)