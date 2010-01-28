function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

// function getElementsByClassName(classname, node)  {
//     if(!node) node = document.getElementsByTagName("body")[0];
//     var a = [];
//     var re = new RegExp('\\b' + classname + '\\b');
//     var els = node.getElementsByTagName("*");
//     for(var i=0,j=els.length; i<j; i++)
//         if(re.test(els[i].className))a.push(els[i]);
//     return a;
// }

function resizeIfNeeded(){
  var ebnf_imgs = document.getElementsByClassName('ebnf');
  for (var i=ebnf_imgs.length-1; i>=0;--i) {
    var w = ebnf_imgs[i].width;
    ebnf_imgs[i].width = Math.min(window.innerWidth-20, w);
    ebnf_imgs[i].alt = "toto";
  }
}

addLoadEvent(resizeIfNeeded);
