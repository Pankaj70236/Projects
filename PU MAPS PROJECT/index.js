const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning Boss");
    }

    else if(hr == 12) {
        speak("Good noon Boss");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon Boss");
    }

    else {
        speak("Good Evening Boss");
    }
}

window.addEventListener('load', ()=>{
    speak("welcome to pu maps");
    speak("Hello I am your vistual assistant alpha");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = " yes how can i help you ";
        speech.text = finalText;
    }
    else if(message.includes('where is poornima university')) {
        const finalText = "vidhani vatika road sitapura, jaipur rajasthan";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine boss tell me how can i help you";
        speech.text = finalText;
    }else if(message.includes('where is hod sitting') || message.includes('hod office')) {
        const finalText = "pratish rawat sitting at first floor in block b";
        speech.text = finalText;
    }
    else if(message.includes('dean')) {
        const finalText = "ajay khunteta";
        speech.text = finalText;
    }
    else if(message.includes('where is dsw office')|| message.includes('dsw office')) {
        const finalText = " Dr rakesh gupta sir sitting is inside admin block ";
        speech.text = finalText;
    }

    else if(message.includes('name')) {
        const finalText = "My name is Alpha";
        speech.text = finalText;
    }
    else if(message.includes('how to go to library')|| message.includes('how to go library')) {
        const finalText = "go inside admin block walk straight and then take stairs and you will find the library on you left";
        speech.text = finalText;
    }
    else if(message.includes('how to go to gargi hostel')|| message.includes('where is gargi hostel')) {
        const finalText = "go inside main gate of poornima university and the go to central plaza and walk round cp then you will find way to gargi hostel";
        speech.text = finalText;
    }
    else if(message.includes('how to go in md lab')|| message.includes('where is md lab')) {
        const finalText = "go to second floor in bhi block and go to room no 242 and u can also check our videos if u dont understand";
        speech.text = finalText;
    }
    else if(message.includes('how to go in 144')|| message.includes('how to go room no 144')) {
        const finalText = "go from admin block take right then take first staircase the go straight at first floor at you will find 144 there ";
        speech.text = finalText;
    }
    
    else if(message.includes('where is chemistry lab')) {
        const finalText = "near laundry";
        speech.text = finalText;
    }
    else if(message.includes('where is cricket ground')) {
        const finalText = "near gargi hostel";
        speech.text = finalText;
    }
    else if(message.includes('where is workshop')) {
        const finalText = "near laundry";
        speech.text = finalText;
    } 
    else if(message.includes('where is registrar office')) {
        const finalText = "in admin one in front of main gate";
        speech.text = finalText;
    }
    else if(message.includes('where is physics lab')) {
        const finalText = "first floor near library at room no 123";
        speech.text = finalText;
    }
    else if(message.includes('where is python lab')) {
        const finalText = "at first floor in b block at room no 156 and 157";
        speech.text = finalText;
    }
    else if(message.includes('where is laundry')) {
        const finalText = "near football ground";
        speech.text = finalText;
    }
    else if(message.includes('who is my friend')) {
        const finalText = "pranav , anubhav and pankaj";
        speech.text = finalText;
    }
    
    else if(message.includes('where is room number 144')) {
        const finalText = "at first floor in block b";
        speech.text = finalText;
    }
    else if(message.includes('where is webtech lab')) {
        const finalText = "at first floor in b block at room no 156 and 157";
        speech.text = finalText;
    }
    else if(message.includes('where is placement cell')) {
        const finalText = "in admin two in front of main gate";
        speech.text = finalText;
    }
    else if(message.includes('where is md lab')) {
        const finalText = "at second floor in b block at room no 242";
        speech.text = finalText;
    }
    else if(message.includes('guide of pu maps')) {
        const finalText = " doctor satya prakash awasthi sir";
        speech.text = finalText;
    }

    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }
    else if(message.includes('where is gym')) {
        const finalText = "ground floor h one hostel pu";
        speech.text = finalText;
    }
    else if(message.includes('where is library')) {
        const finalText = "first floor in A block";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "poornima university");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }
   
    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}