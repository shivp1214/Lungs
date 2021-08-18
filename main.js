var canvas=new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
block_width=30;
block_height=30;
var player_object="";
var block_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,left:player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_Image){
    fabric.Image.fromURL(get_Image,function(Img)
    {
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,left:player_x
        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown",my_Keydown);
function my_Keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey==true && keyPressed=="80"){
        console.log("P and Shift pressed together.");
        block_width=block_width+10;
        block_height=block_height+10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }if(e.shiftKey==true && keyPressed=="77"){
        console.log("P and Shift pressed together.");
        block_width=block_width-10;
        block_height=block_height-10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if(keyPressed=="37"){
        console.log("left");
        left();
    }
    if(keyPressed=="38"){
        console.log("up");
        up();
    }
    if(keyPressed=="39"){
        console.log("right");
        right();
    }
    if(keyPressed=="40"){
        console.log("down");
        down();
    }
    if(keyPressed=="87"){
        new_image("wall.jpg");
        console.log("w");
    }
    if(keyPressed=="71"){
        new_image("ground.png");
        console.log("g");
    }
    if(keyPressed=="76"){
        new_image("light_green.png");
        console.log("1");
    }
    if(keyPressed=="84"){
        new_image("trunk.jpg");
        console.log("t");
    }
    if(keyPressed=="82"){
        new_image("roof.jpg");
        console.log("r");
    }
    if(keyPressed=="89"){
        new_image("yellow_wall.png");
        console.log("y");
    }
    if(keyPressed=="68"){
        new_image("dark_green.png");
        console.log("d");
    }
    if(keyPressed=="83"){
        new_image("unnamed.png");
        console.log("s");
    }
    if(keyPressed=="79"){
        new_image("Minecraft-Obsidian-Block.jpeg");
        console.log("o");
    }
}
function up(){
    if(player_y>=0){
        player_y=player_y-block_height;
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y<=500){
        player_y=player_y+block_height;
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x>=0){
        player_x=player_x-block_width;
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x<=850){
        player_x=player_x+block_width;
        canvas.remove(player_object);
        player_update();
    }
}