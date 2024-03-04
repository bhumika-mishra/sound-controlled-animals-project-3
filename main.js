function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundclassification('https://teachablemachine.withgoogle.com/models/ryOnZkScD/model.json',modelready);
}
function modelready(){
    classifier.classify(gotResult);
}
function gotResult(){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = math.floor(Math.random()*255) + 1;
        random_number_g = math.floor(Math.random()*255) + 1;
        random_number_b = math.floor(Math.random()*255) + 1;

        document.getElementById("detected").innerHTML = "detected dog - "+dog+" detected cat - "+cat+" detected lion - "+lion+" detected cow - "+cow+""
        document.getElementById("detected").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";

        document.getElementById("animal_voices").innerHTML = "Detected Voice is of - "+results[0].label;
        document.getElementById("animal_voices").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";

        img = document.getElementById("animal_images");

        if(results[0].label == "Barking"){
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/bark.gif";
            dog = dog + 1;
        }
       else if(results[0].label == "Meowing"){
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/meow.gif";
            cat = cat + 1;
        }
        else if(results[0].label == "Roar"){
            img.src = "https://tenor.com/en-GB/view/lion-african-lion-gif-23406367";
            lion = lion + 1;
        }
        else if(results[0].label == "Mooing"){
            img.src = "https://tenor.com/en-GB/view/wow-cow-cow-moo-nikaswow-gif-24076227";
            cow = cow + 1;
        }
        else{
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/listen.gif";
        }
    }
}