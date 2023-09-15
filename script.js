var age = prompt("Write your age")
if (age>0 && age<18){
    console.log("You need to study")
}
else if(age>18 && age<50){
    console.log("You need to work")
}
else if(age>50 && age<60){
    console.log("You will retire soon")
}
else if(age>59 && age<150){
    console.log("You retired,if you alive :)")
}
else{
    console.log("Something is wrong")
}