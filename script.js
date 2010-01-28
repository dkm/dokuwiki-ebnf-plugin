
var original_size = [];
var ebnf_imgs
function addEvent(obj, evType, fn){
 if (obj.addEventListener){
   obj.addEventListener(evType, fn, false);
   return true;
 } else if (obj.attachEvent){
   var r = obj.attachEvent("on"+evType, fn);
   return r;
 } else {
   return false;
 }
}

function toggleImg(i){
  var tmp = this.width;
  this.width=this.owidth;
  this.owidth = tmp;
}

function resizeIfNeeded(){
  var ebnf_imgs = document.getElementsByClassName('ebnf');
  for (var i=ebnf_imgs.length-1; i>=0;--i) {
    var w = ebnf_imgs[i].width;
    ebnf_imgs[i].owidth = w;
    ebnf_imgs[i].width = Math.min(Math.round(window.innerWidth*0.90), w);
    addEvent(ebnf_imgs[i], 'click', toggleImg)
  }
}



addEvent(window, 'load', resizeIfNeeded);
