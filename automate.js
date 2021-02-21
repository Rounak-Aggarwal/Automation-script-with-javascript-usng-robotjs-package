var robot = require("robotjs"); 
setTimeout(startOpenBoard, 1000);

function startOpenBoard(){
    robot.moveMouseSmooth(98,844);
    robot.mouseClick();
    robot.typeString(" openboard ");
    robot.keyTap("enter");
    setTimeout(writeHI, 1000);
}

function writeHI(){
    robot.moveMouseSmooth(600,300);
    robot.mouseToggle("down", "left");
    robot.dragMouse(600,700);
    robot.mouseToggle("up", "left");

    robot.moveMouseSmooth(600,500);
    robot.mouseToggle("down", "left");
    robot.dragMouse(800,500);
    robot.mouseToggle("up", "left");

    robot.moveMouseSmooth(800,300);
    robot.mouseToggle("down", "left");
    robot.dragMouse(800,700);
    robot.mouseToggle("up", "left");

    robot.moveMouseSmooth(900,300);
    robot.mouseToggle("down", "left");
    robot.dragMouse(1100,300);
    robot.mouseToggle("up", "left");

    robot.moveMouseSmooth(1000,300);
    robot.mouseToggle("down", "left");
    robot.dragMouse(1000,700);
    robot.mouseToggle("up", "left");

    robot.moveMouseSmooth(900,700);
    robot.mouseToggle("down", "left");
    robot.dragMouse(1100,700);
    robot.mouseToggle("up", "left");

    robot.moveMouseSmooth(1433,28);
    robot.mouseClick();
    setTimeout(startSublimeText, 1000);
}

function startSublimeText(){
    robot.moveMouseSmooth(98,844);
    robot.mouseClick();
    robot.typeString(" sublime text ");
    robot.keyTap("enter");
    //Sometimes this may not work. So, I can give some break or interval here or write like this.
    // setTimeout(function(){
    //     robot.mouseClick();
    //     robot.typeString(" visual studio code ");
    //     robot.keyTap("enter"); 
    // },1000);
    robot.moveMouseSmooth(1418,8);
    robot.mouseClick();
    setTimeout(startChrome, 1000);
}

function startChrome(){
    robot.moveMouseSmooth(98,844);
    robot.mouseClick();
    robot.typeString(" chrome ");
    robot.keyTap("enter"); 

    robot.moveMouseSmooth(506,516);
    robot.mouseClick();
    robot.typeString("whatsapp web");
    robot.keyTap("enter"); 

    robot.moveMouseSmooth(349,389);
    robot.mouseClick();

    robot.keyToggle("control","down");
    robot.keyTap("t");
    robot.keyToggle("control","up");

    robot.moveMouseSmooth(506,516);
    robot.mouseClick();
    robot.typeString("gfg practice");
    robot.keyTap("enter"); 

    robot.moveMouseSmooth(362,788);
    robot.mouseClick();

    robot.keyToggle("control","down");
    robot.keyTap("t");
    robot.keyToggle("control","up");

    robot.moveMouseSmooth(1398,23);
    robot.mouseClick();
    setTimeout(startOneNote, 1000); 
} 

function startOneNote(){
    robot.moveMouseSmooth(98,844);
    robot.mouseClick();
    robot.typeString(" oneNote ");
    robot.keyTap("enter"); 

    robot.moveMouseSmooth(1443,10);
    robot.mouseClick();
    setTimeout(startNotePad, 1000);
}

function startNotePad(){
    robot.moveMouseSmooth(98,844);
    robot.mouseClick();
    robot.typeString(" notepad ");
    robot.keyTap("enter");
    robot.moveMouseSmooth(600,500);
    robot.mouseClick(); 
    robot.typeString(" Your System is ready to use, Sir.");
}

