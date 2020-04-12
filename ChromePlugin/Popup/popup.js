function copyToClipboard(text) {
    var copyFrom = document.createElement("textarea");  
    copyFrom.textContent = text;
    document.body.appendChild(copyFrom);

    copyFrom.select();
    document.execCommand('copy');

    copyFrom.blur(); // (Optional) De-select the text using blur(). 
    document.body.removeChild(copyFrom);
  }

var leapShaderCode = 'uniform vec3 LeftHand[28]; uniform vec3 RightHand[28];uniform float LeftConfidence;uniform float RightConfidence;uniform float LeftAvailable; uniform float RightAvailable;\n' +
  'const int ELBOW = 0, WRIST = 1, PALM = 2;\n' +
  'const int FINGER_THUMB = 3, FINGER_INDEX = 8, FINGER_MIDDLE = 13, FINGER_RING = 18, FINGER_PINKY = 23;\n' +
  'const int CARP_POS = 0, MCP_POS = 1, PIP_POS = 2, DIP_POS = 3, TIP_POS = 4;\n';

var docBtn = document.getElementById('documentationId');
docBtn.addEventListener('click', function(){
  var link ='https://github.com/seb776/ShadertoyLeapmotion/blob/master/README.md';
  chrome.tabs.create({ url: link });
});

var githubBtn = document.getElementById('githubId');
githubBtn.addEventListener('click', function(){
  var link ='https://github.com/seb776/ShadertoyLeapmotion';
  chrome.tabs.create({ url: link });
});

var shaderSampleBtn = document.getElementById('shaderSampleId');
shaderSampleBtn.addEventListener('click', function(){
  var link ='https://www.shadertoy.com/view/wsSyWW';
  chrome.tabs.create({ url: link });
});

var copyBtnOriginalText = "Copy GLSL code to clipboard";
var copyBtn = document.getElementById('copycodeId');
copyBtn.innerHTML = copyBtnOriginalText;

copyBtn.addEventListener('click', function() {
  copyToClipboard(leapShaderCode);
  copyBtn.innerHTML = "Copied to clipboard !";
  setTimeout(function() {
    copyBtn.innerHTML = copyBtnOriginalText;
  }, 3000)
});