/*
** This is used to inject javascript leapmotion SDK and scriptLeap which
** transmits infos from the SDK to shadertoy.
*/

chrome.runtime.sendMessage({iconOn: true});

// Timeout a bit dirty but sometime the renderer takes a bit to load
setTimeout(function(){
    console.log('Shadertoy.Leapmotion : Injecting leapmotion SDK');
    var scrLeap = document.createElement('script');
    scrLeap.onload = function() {
        console.log('Shadertoy.Leapmotion : Injecting leapmotion-shadertoy interface');
        var scrLeapCus = document.createElement('script');
        scrLeapCus.src = chrome.runtime.getURL('Scripts/scriptLeap.js');
        (document.body||document.head).appendChild(scrLeapCus);
    };
    scrLeap.src = chrome.runtime.getURL('Dependencies/leap.min.js'); // leap.min.js gotten from here https://cdnjs.cloudflare.com/ajax/libs/leapjs/0.6.1/leap.min.js
    (document.body||document.head).appendChild(scrLeap);

}, 1000);