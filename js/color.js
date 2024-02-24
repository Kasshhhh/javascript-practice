const getcolor=()=>{
    //hex cod
    const randomnumber=Math.floor(Math.random()*1677215);
    console.log(randomnumber);
    const randomcode="#"+randomnumber.toString(16);//convert to string 16 stands for hexa decimal  code
    document.body.style.backgroundColor=randomcode;//click krke color aayenga
    document.getElementById("color-code").innerText=randomcode;
}
document.getElementById("btn").addEventListener(
    "click",
    getcolor
)
getcolor();