Webcam.set //serve paraas propriedades da webcam//
({
    width:350,
    height:300,
    imageFormat : 'png',
    pngQuality:90
});

camera = document.getElementById("camera");


Webcam.attach('#camera');

function takeSnapshot()//função pre definida do js//
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/[...]/model.json',modelLoaded);

function modelLoaded() 
{
   console.log('Model Loaded!');
}

function speak(){
   var synth = window.speechSyntesis;
   speakData1 = "A primeira previsão é " + prediction1;
   speakData2 = "A segunda previsão é " + prediction2;
   var utterThis = new SpeechSyntesisUtterrance(speakData1 + speakData2);
   synth.speak(utterThis);
}