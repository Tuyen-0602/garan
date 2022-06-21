var index = 1;
changimg = function(){
    var imgs = ["./img/3_1.jpg","./img/3_2.jpg", "./img/3_3.jpg", "./img/3_4.jpg", "./img/3_5.jpg"];
    document.getElementById('img').src = imgs[index];
    index++;
    if(index==5){
        index = 0;
    }
}
setInterval(changimg,3000);