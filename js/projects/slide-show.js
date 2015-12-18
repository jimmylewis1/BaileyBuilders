var app=angular.module('bailey');

var image1 = new Image();
    image1.src = "images/background-main.jpg";

var image1 = new Image();
    image1.src = "images/Zumiez.jpg";

var image1 = new Image();
    image1.src = "images/little-scholars.jpg";

var image1 = new Image();
    image1.src = "images/uvsc.png";

var image1 = new Image();
    image1.src = "spaghetti.jpg";


function slide() {
    document.images.slide.src = eval("image" + step + " .src");
        if(step < 5){
            step++;
        }
        else {
            step = 1;
        }
    setTimeout("slide()", 4000);
};

slide();