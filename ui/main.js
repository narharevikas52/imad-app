console.log('Loaded!');

//change the textof the main-text div
var element = document.getElementByid('main-text'
  );
element.innerHTML = 'new value';  

// move the image
var img = document.getElementByid('mady');
img.onclick = function () {
   img.style.marginleft = '100px'; 
     
};

