// adding javascript on navbar setting 
let click = document.getElementById("ham");//geting value from hambar class
let list_items = document.getElementById("block");//geting value from unordered list class
// console.log(list_items);
// console.log(click);
click.addEventListener("click",function(){
    // console.log("are you working");
    list_items.style.top = "100px";
    // console.log("are you working");

});
// cross button javascript is here 
let cross = document.getElementById("cross");
console.log(cross);
cross.addEventListener("click",function(){
    list_items.style.top = "-410px";
    // console.log("are you working");

});

// adding javascript on showing skills
let number = document.getElementById('number');
let counter  = 0;
setInterval(()=>{
    if(counter == 100)
    {
        clearInterval();
    }
    else{
        counter += 1;
        number.innerHTML = counter + "%";
    }
},10);

// second 
// adding javascript on showing skills
let number1 = document.getElementById('number1');
let counter1  = 0;
setInterval(()=>{
    if(counter1 == 95)
    {
        clearInterval();
    }
    else{
        counter1 += 1;
        number1.innerHTML = counter1 + "%";
    }
},10);

// third 
// adding javascript on showing skills
let number2 = document.getElementById('number2');
let counter2  = 0;
setInterval(()=>{
    if(counter2 == 75)
    {
        clearInterval();
    }
    else{
        counter2 += 1;
        number2.innerHTML = counter2 + "%";
    }
},10);

// fourth
// adding javascript on showing skills
let number3 = document.getElementById('number3');
let counter3  = 0;
setInterval(()=>{
    if(counter3 == 65)
    {
        clearInterval();
    }
    else{
        counter3 += 1;
        number3.innerHTML = counter3 + "%";
    }
},10);


// slider section javascript is here 
