var canvas = new fabric.Canvas('myCanvas');

block_image_width = 20;
block_image_height = 20;

player_x = 10;
player_y = 10;

var plr_object = "";

function plr_update()
{
    fabric.Image.fromURL("player.png",function(Img){
        plr_object = Img;
        
        plr_object.scaleToWidth(150);
        plr_object.scaleToHeight(140);
        plr_object.set({
            top:player_y,
            left:player_x
        });

        canvas.add(plr_object);
    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
keyPressed = e.keyCode;
console.log(keyPressed)
if(e.shiftKey == true && keyPressed == '80'){
    console.log("p and shift pressed together");
    block_image_width = block_image_width + 20;
    block_image_height = block_image_height + 20;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
}
if (e.shiftKey && keyPressed == '77'){
    if(block_image_width >= 0){
        console.log("m and shift pressed together");
        block_image_width = block_image_width - 20;
        block_image_height = block_image_height - 20;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
}

if(keyPressed == '38')
{
    up();
    console.log("UP");
}

if(keyPressed == '40')
{
    down();
    console.log("down");
}

if(keyPressed == '37')
{
    left();
    console.log("left");
}

if(keyPressed == '39')
{
    right();
    console.log("right");
}

if(keyPressed == '87')
{
    new_image('wall.jpg');
    console.log("W");
}

if(keyPressed == '71')
{
    new_image('ground.png');
    console.log("GG");
}

if(keyPressed == '76')
{
    new_image('light_green.png');
    console.log("L");
}

if(keyPressed == '84')
{
    new_image('trunk.jpg');
    console.log("T");
}

if(keyPressed == '82'){
    new_image('roof.jpg');
    console.log("R");
}

if(keyPressed == '89'){
    new_image('yellow_wall.png');
    console.log("Y");
}

if(keyPressed == '68'){
    new_image('dark_green.png');
    console.log("D");
}
}

function up()
{
	if(player_y >=0)
	{
		player_y = player_y - block_image_height;
		console.log("block img height = " + block_image_height);
		console.log("When Up arrow key is pressed, X = " + player_x + " , Y = "+player_y);
		canvas.remove(plr_object);
		plr_update();
	}
}


function down()
{
	if(player_y <= 500)
	{
		player_y = player_y + block_image_height;
		console.log("block img height = " + block_image_height);
		console.log("When Down arrow key is pressed, X = " + player_x + " , Y = "+player_y);
		canvas.remove(plr_object);
		plr_update();
	}
}


function left()
{
	if(player_x >0)
	{
		player_x = player_x - block_image_width;
		console.log("block img width = " + block_image_width);
		console.log("When Left arrow key is pressed, X = " + player_x + " , Y = "+player_y);
		canvas.remove(plr_object);
		plr_update();
	}
}

function right()
{
	if(player_x <=850)
	{
		player_x = player_x + block_image_width;
		console.log("block img width = " + block_image_width);
		console.log("When Right arrow key is pressed, X = " + player_x + " , Y = "+player_y);
		canvas.remove(plr_object);
		plr_update();
	}
}

