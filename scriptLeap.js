alert('started scriptLeap');
/*
var channelId = 3;
var dz=document.getElementById('myUnitCanvas'+channelId);

var minp = gShaderToy.mEffect.mPasses[gShaderToy.mActiveDoc].mInputs[channelId]
*/
Leap.loop(function(frame){
    //console.log(frame.hands.length);

    frame.hands.forEach(function(hand, index) {
        var targetHandVar = (hand.type == 'left' ? 'LeftHand' : 'RightHand');
        var targetHandConfidenceVar = (hand.type == 'left' ? 'LeftConfidence' : 'RightConfidence');



        var positions = [
            hand.palmPosition[0], hand.palmPosition[1], hand.palmPosition[2],

            //hand.thumb.mcpPosition[0], hand.thumb.mcpPosition[1], hand.thumb.mcpPosition[2],
            hand.thumb.distal.prevJoint[0], hand.thumb.distal.prevJoint[1], hand.thumb.distal.prevJoint[2],
            hand.thumb.distal.nextJoint[0], hand.thumb.distal.nextJoint[1], hand.thumb.distal.nextJoint[2],

            hand.indexFinger.mcpPosition[0], hand.indexFinger.mcpPosition[1], hand.indexFinger.mcpPosition[2],
            hand.indexFinger.pipPosition[0], hand.indexFinger.pipPosition[1], hand.indexFinger.pipPosition[2],
            hand.indexFinger.dipPosition[0], hand.indexFinger.dipPosition[1], hand.indexFinger.dipPosition[2],
            hand.indexFinger.distal.nextJoint[0], hand.indexFinger.distal.nextJoint[1], hand.indexFinger.distal.nextJoint[2],

            hand.middleFinger.mcpPosition[0], hand.middleFinger.mcpPosition[1], hand.middleFinger.mcpPosition[2],
            hand.middleFinger.pipPosition[0], hand.middleFinger.pipPosition[1], hand.middleFinger.pipPosition[2],
            hand.middleFinger.dipPosition[0], hand.middleFinger.dipPosition[1], hand.middleFinger.dipPosition[2],
            hand.middleFinger.distal.nextJoint[0], hand.middleFinger.distal.nextJoint[1], hand.middleFinger.distal.nextJoint[2],

            hand.ringFinger.mcpPosition[0], hand.ringFinger.mcpPosition[1], hand.ringFinger.mcpPosition[2],
            hand.ringFinger.pipPosition[0], hand.ringFinger.pipPosition[1], hand.ringFinger.pipPosition[2],
            hand.ringFinger.dipPosition[0], hand.ringFinger.dipPosition[1], hand.ringFinger.dipPosition[2],
            hand.ringFinger.distal.nextJoint[0], hand.ringFinger.distal.nextJoint[1], hand.ringFinger.distal.nextJoint[2],

            hand.pinky.mcpPosition[0], hand.pinky.mcpPosition[1], hand.pinky.mcpPosition[2],
            hand.pinky.pipPosition[0], hand.pinky.pipPosition[1], hand.pinky.pipPosition[2],
            hand.pinky.dipPosition[0], hand.pinky.dipPosition[1], hand.pinky.dipPosition[2],
            hand.pinky.distal.nextJoint[0], hand.pinky.distal.nextJoint[1], hand.pinky.distal.nextJoint[2],
        ];
        var confidence = hand.confidence;



            if (gShaderToy != null)
            {
                console.log("update uniforms " + positions.length);
                var renderer = gShaderToy.mEffect.mPasses[gShaderToy.mActiveDoc].mRenderer;
                renderer.SetShaderConstant3FV(targetHandVar, positions);
                renderer.SetShaderConstant1F(targetHandConfidenceVar, hand.confidence);

                //console.log(index + " " + hand.type + " " + hand.indexFinger.tipPosition[2]);
            }
 
    });
});