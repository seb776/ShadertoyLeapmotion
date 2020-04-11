
/*
setTimeout(function(){
    console.log("test");
}, 1000/60);

https://cdnjs.cloudflare.com/ajax/libs/leapjs/0.6.1/leap.min.js
*/

alert('injection started');
var scrLeap = document.createElement('script');
scrLeap.src = chrome.runtime.getURL('leap.min.js');
(document.body||document.head).appendChild(scrLeap);

setTimeout(function(){
    var scrLeapCus = document.createElement('script');
    scrLeapCus.src = chrome.runtime.getURL('scriptLeap.js');
    (document.body||document.head).appendChild(scrLeapCus);
    
}, 3000)



/*
var url = 'https://cdnjs.cloudflare.com/ajax/libs/leapjs/0.6.1/leap.min.js';
var storedText;

fetch(url, { mode: 'no-cors'})
  .then(function(response) {
    response.text().then(function(text) {
      storedText = text;
      done();
    });
  });

function done() {
    var textMyScript = `
    
    Leap.loop(function(frame) {
        console.log("leap");
    });
    setTimeout(function(){
        console.log("test");
    }, 1000/60);
    document.body.appendChild(document.createElement('script')).src = 'https://cdnjs.cloudflare.com/ajax/libs/leapjs/0.6.1/leap.min.js';
`;



console.log("=>" + storedText);
var code=document.createTextNode('(function(){'+storedText+'\n'+textMyScript+'})();');
var script=document.createElement('script');
script.appendChild(code);
var scriptLeap = document.createElement('script');
scriptLeap.setAttribute("type", "text/javascript");
scriptLeap.setAttribute("async", true);
scriptLeap.setAttribute("src", chrome.extension.getURL("leap.min.js"));  
//(document.body||document.head).appendChild(scriptLeap);
(document.body||document.head).appendChild(script);
}
*/