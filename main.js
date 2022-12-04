let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');

let start1 = ["Hello I'm AI powered Chatbot For Noble hospital!! Please tell me how may I help you!!","Hello I'm AI powered Chatbot For Noble hospital!! Please tell me how may I help you!!"];

let intro = ["Hello, I am Bot","Hello I'm AI powered Chatbot For Noble hospital!! Please tell me how may I help you!!", "Hello, My name is Bot"];

let help = ["How may i assist you?","How can i help you?","What i can do for you?"];

let greetings = ["i am fine, what about you", "i am good"];

let hobbies = ["i love to talk with humans", "i like to make friends like you", "My work is to help people with their queries"];

let thank = ["Most welcome","Not an issue","Its my pleasure","Mention not"];

let closing = ['Ok bye-bye','As you wish, bye take-care!','Bye-bye, see you soon..'];

let specialist =["Yes !! there is a specialist visit as per need !! We will let you know schedule to your Email as per appointment", "Yes !! there is a specialist visit as per need !! We will let you know schedule to your Email as per appointment."];

let beds = ["In an average there are currently 25 ICU beds available","In an average there are currently 20 ICU beds available"];

let doctime = ["Doctors are available in between morning 9 am to evening 9 am shift vise..","Doctors visit time is 10 am onwards "];

let med = ["Yes ! Noble hospital provides 24 by 7 medical facility to patients !", "yes! we provide health care facility 24 by 7"];
 
let oxy = ['In an average we can provide Oxygen to 100 patients in a day', 'We have 100 oxygen tanks in store for tratement of patients','We are always ready for imergency, our hospital can provide oxygen cylinder to in average to 50 patients at a time!!'];

let staff = [' Our hospital is well equipped and have most efficient staff which is always ready for emergency and to treat patients'];

let service= ['we provide Emergency room services, Short-term hospitalization, X-ray radiology services, General and specialty surgical services, Blood services, Laboratory services, Home nursing service, Mental health care, Nutritional counseling and many more..'];

let blood = ["Yes we have upto 3 bags of 300 ml of O positive, A positive , A negative and B positive, blood groups right now, and if needy we can manage within 30 minute in any serious emergency"];

let chatareaouter = document.querySelector('.chatarea-outer');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function showusermsg(usermsg){
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg){
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message)
{
    const speech = new SpeechSynthesisUtterance();
    speech.text = "This is test message";
    if(message.includes('who are you'))
    {
        let finalresult = intro[Math.floor(Math.random()* intro.length)];
        speech.text =  finalresult;
    }
    if(message.includes('hello'))
    {
        let finalresult = start1[Math.floor(Math.random()* start1.length)];
        speech.text =  finalresult;
    }
    if(message.includes('specialist doctors visit' || 'specialist doctor\'s visit' || 'does specialist visit'))
    {
        let finalresult = specialist[Math.floor(Math.random()*specialist.length)];
        speech.text = finalresult;
    }
    if(message.includes('fine')){
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech.text = finalresult;
    }
    if(message.includes('how are you' || 'how are you doing today')){
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalresult;
    }
    if(message.includes('tell me something about you' || 'tell me something about your hobbies')){
        let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
        speech.text = finalresult;
    }
    if(message.includes('number of ICU beds available'||'how many ICU beds are available'))
    {
        let finalresult = beds[Math.floor(Math.random() * beds.length)];
        speech.text = finalresult;
    }
    if(message.includes('thank you' || 'thank you so much')){
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
    }
    if(message.includes('talk to you' ||'done')){
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
    }

    if(message.includes('when doctors are available'||'doctors visit time'))
    {
        let finalresult = doctime[Math.floor(Math.random() * doctime.length)];
        speech.text = finalresult;
    }
    if(message.includes('is there 24/7 medical facility'))
    {
        let finalresult = med[Math.floor(Math.random() * med.length)];
        speech.text = finalresult;
    }
    if(message.includes('oxygen unit capacity at present time in your hospital'))
    {
        let finalresult = oxy[Math.floor(Math.random() * oxy.length)];
        speech.text = finalresult;
    } 
    if(message.includes('oxygen unit capacity in hospital'))
    {
        let finalresult = oxy[Math.floor(Math.random() * oxy.length)];
        speech.text = finalresult;
    }
    if(message.includes('how is your service'))
    {
        let finalresult = staff[Math.floor(Math.random() * staff.length)];
        speech.text = finalresult;
    }
    if(message.includes('services offered by Hospital'))
    {
        let finalresult = service[Math.floor(Math.random() * service.length)];
        speech.text = finalresult;
    }
    if(message.includes('what is blood availability'))
    {
        let finalresult = blood[Math.floor(Math.random() * blood.length)];
        speech.text = finalresult;
    }

    
    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));

}


recognition.onresult = function(e)
{
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    console.log(transcript);
}
recognition.onend = function()
{
    mic.style.background = '#ff3b3b';
}
mic.addEventListener("click",function()
{
    mic.style.background = '#39c81f';
    recognition.start();
    console.log("Activated");
})