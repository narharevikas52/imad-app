console.log('Loaded!');

//change the textof the main-text div
var element = document.getElementByid('main-text'
  );
element.innerHTML = 'new value';  

// move the image
var img = document.getElementByid('mady');
var marginleft =0;
function moveright () {
    marginleft = marginleft + 10;
    img.style.marginleft = marginleft + 'px';
}
img.onclick = function () {
   var interval = setTnterval(moveRight, 100); 
};

