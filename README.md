# ShadertoyLeapmotion
A small POC made for revision 2020 that make possible to use leapmotion on shadertoy.
Here's the [Youtube Video](https://www.youtube.com/watch?v=9G-Jb9_HNrU)

![Screenshot](https://github.com/seb776/ShadertoyLeapmotion/raw/master/Images/ShaderleapScreenshot.PNG)


# Roadmap
- publish it to firefox store (for webVR)
- Rethink the input ? Using channels
- Check if it works with multipass shaders (I think not)
- Other browsers ?

# How to ?
- clone / download the repo / Or add it from the chrome store https://chrome.google.com/webstore/detail/shadertoy-for-leapmotion/gadhelfebmbbjkjmnkgpajjaachobjbf
- (if clone or download) load the unpacked extension (ChromePlugin folder) https://developer.chrome.com/extensions/getstarted#unpacked
- Go to shadertoy
- click on the "Sh" icon that's been added click on "Copy code"
- paste it in the beginning of your shader

![Screenshot](https://github.com/seb776/ShadertoyLeapmotion/raw/master/Images/ExtensionUI.PNG)

# Sample
https://www.shadertoy.com/view/wsSyWW
![Screenshot](https://github.com/seb776/ShadertoyLeapmotion/raw/master/Images/CaptureHandsSemantics.PNG)
```C
// Code provided by the plugin
uniform vec3 LeftHand[28]; uniform vec3 RightHand[28];uniform float LeftConfidence;uniform float RightConfidence;uniform float LeftAvailable; uniform float RightAvailable;
const int ELBOW = 0, WRIST = 1, PALM = 2;
const int FINGER_THUMB = 3, FINGER_INDEX = 8, FINGER_MIDDLE = 13, FINGER_RING = 18, FINGER_PINKY = 23;
const int CARP_POS = 0, MCP_POS = 1, PIP_POS = 2, DIP_POS = 3, TIP_POS = 4;

// you can use LeftHand[N] or RightHand[N] where N can be ELBOW,WRIST,PALM or
// FINGER_XXX + YYY_POS to retrieve joints positions.
```
