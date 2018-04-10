
document.addEventListener('DOMContentLoaded',function(event){

  // array with texts to type in typewriter
  var dataText = [ "entrepreneur.", "adventurer.", "data enthusiast.", "software engineer.", "david wallach."];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector("h2").innerHTML = text.substring(0, i+1) +'<span id="titlejs" aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       if (i == 4) { return; }
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});



setTimeout(function(){
    document.getElementById('hoja1').style.visibility = "visible";
    document.getElementById('res-download').style.visibility = "visible";
  },10500);

setTimeout(function(){
    document.getElementById('hoja2').style.visibility = "visible";
  },12000);


setTimeout(function(){
    document.getElementById('hoja3').style.visibility = "visible";
  },14000);


function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}



