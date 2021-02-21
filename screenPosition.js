var robot = require("robotjs");         //In built function which provides us with variable or object(functionalities) of installed library
// robot.moveMouseSmooth(500,200);
// var mouseposition = robot.getMousePos();    // My screen is 1536*864
// console.log(mouseposition);

var id = setInterval(showMouseLocation,1000);    //Her i have not written showMouseLocation() which happens in all other
//programming languages but here i have passed the entire function which is like pointer to a function in c
//setInterval is a js function which will keep calling the function for after every 1s till either the script ends or clearInterval(id) is called
//we can build both digital and analog watches using these two func
function showMouseLocation(){
var mousePosition = robot.getMousePos();
console.log(mousePosition);
if(mousePosition.x == 0 && mousePosition.y == 0){
    clearInterval(id);
    
}
}