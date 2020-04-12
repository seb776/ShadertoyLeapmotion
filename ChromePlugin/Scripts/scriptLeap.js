console.log('Shadertoy.Leapmotion : Starting leapmotion loop');

Leap.loop(function(frame){
    var leftAvailable = 0.0;
    var rightAvailable = 0.0;
    for (var i = 0; i < frame.hands.length; ++i)
    {
        if (frame.hands[i].type == 'left')
        {
            leftAvailable = 1.0;
        }
        if (frame.hands[i].type == 'right')
        {
            rightAvailable = 1.0;
        }
    }
    if (gShaderToy != null)
    {
        var curPass = gShaderToy.mEffect.mPasses[gShaderToy.mActiveDoc];
        if (curPass != null)
        {
            var renderer = curPass.mRenderer;

            renderer.SetShaderConstant1F("LeftAvailable", leftAvailable);
            renderer.SetShaderConstant1F("RightAvailable", rightAvailable);
        }
    }
    frame.hands.forEach(function(hand, index) {
        var targetHandVar = (hand.type == 'left' ? 'LeftHand' : 'RightHand');
        var targetHandConfidenceVar = (hand.type == 'left' ? 'LeftConfidence' : 'RightConfidence');

        var positions = [
            hand.arm.prevJoint[0], hand.arm.prevJoint[1], hand.arm.prevJoint[2],
            hand.arm.nextJoint[0], hand.arm.nextJoint[1], hand.arm.nextJoint[2],

            hand.palmPosition[0], hand.palmPosition[1], hand.palmPosition[2],

            hand.thumb.carpPosition[0], hand.thumb.carpPosition[1], hand.thumb.carpPosition[2],
            hand.thumb.mcpPosition[0], hand.thumb.mcpPosition[1], hand.thumb.mcpPosition[2],
            hand.thumb.pipPosition[0], hand.thumb.pipPosition[1], hand.thumb.pipPosition[2],
            hand.thumb.dipPosition[0], hand.thumb.dipPosition[1], hand.thumb.dipPosition[2],
            hand.thumb.tipPosition[0], hand.thumb.tipPosition[1], hand.thumb.tipPosition[2],

            
            hand.indexFinger.carpPosition[0], hand.indexFinger.carpPosition[1], hand.indexFinger.carpPosition[2],
            hand.indexFinger.mcpPosition[0], hand.indexFinger.mcpPosition[1], hand.indexFinger.mcpPosition[2],
            hand.indexFinger.pipPosition[0], hand.indexFinger.pipPosition[1], hand.indexFinger.pipPosition[2],
            hand.indexFinger.dipPosition[0], hand.indexFinger.dipPosition[1], hand.indexFinger.dipPosition[2],
            hand.indexFinger.tipPosition[0], hand.indexFinger.tipPosition[1], hand.indexFinger.tipPosition[2],

            hand.middleFinger.carpPosition[0], hand.middleFinger.carpPosition[1], hand.middleFinger.carpPosition[2],
            hand.middleFinger.mcpPosition[0], hand.middleFinger.mcpPosition[1], hand.middleFinger.mcpPosition[2],
            hand.middleFinger.pipPosition[0], hand.middleFinger.pipPosition[1], hand.middleFinger.pipPosition[2],
            hand.middleFinger.dipPosition[0], hand.middleFinger.dipPosition[1], hand.middleFinger.dipPosition[2],
            hand.middleFinger.tipPosition[0], hand.middleFinger.tipPosition[1], hand.middleFinger.tipPosition[2],

            hand.ringFinger.carpPosition[0], hand.ringFinger.carpPosition[1], hand.ringFinger.carpPosition[2],
            hand.ringFinger.mcpPosition[0], hand.ringFinger.mcpPosition[1], hand.ringFinger.mcpPosition[2],
            hand.ringFinger.pipPosition[0], hand.ringFinger.pipPosition[1], hand.ringFinger.pipPosition[2],
            hand.ringFinger.dipPosition[0], hand.ringFinger.dipPosition[1], hand.ringFinger.dipPosition[2],
            hand.ringFinger.tipPosition[0], hand.ringFinger.tipPosition[1], hand.ringFinger.tipPosition[2],

            hand.pinky.carpPosition[0], hand.pinky.carpPosition[1], hand.pinky.carpPosition[2],
            hand.pinky.mcpPosition[0], hand.pinky.mcpPosition[1], hand.pinky.mcpPosition[2],
            hand.pinky.pipPosition[0], hand.pinky.pipPosition[1], hand.pinky.pipPosition[2],
            hand.pinky.dipPosition[0], hand.pinky.dipPosition[1], hand.pinky.dipPosition[2],
            hand.pinky.tipPosition[0], hand.pinky.tipPosition[1], hand.pinky.tipPosition[2],
        ];
        var confidence = hand.confidence;

        if (gShaderToy != null)
        {
            var curPass = gShaderToy.mEffect.mPasses[gShaderToy.mActiveDoc];
            if (curPass != null)
            {
                var renderer = curPass.mRenderer;
                renderer.SetShaderConstant3FV(targetHandVar, positions);
                renderer.SetShaderConstant1F(targetHandConfidenceVar, hand.confidence);
            }
        }
    });
});