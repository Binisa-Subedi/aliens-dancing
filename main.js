//https://teachablemachine.withgoogle.com/models/V5aeWhLM1/

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/V5aeWhLM1/model.json', modelReady);
}
function modelReady(){
    console.log("model is ready")
}