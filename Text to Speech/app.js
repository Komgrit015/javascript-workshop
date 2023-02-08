(() => {

    const message = new SpeechSynthesisUtterance();

    function OnvoicesChanged (){
        const voices = speechSynthesis.getVoices();
        const enVoice = voices.find(voice => voice.lang === 'en-US');
        message.voice = enVoice;
        console.log(voices)
    }

    function onClick(event) {
        message.text = event.target.getAttribute('alt');
        speechSynthesis.speak(message);
    }

    function run(){
        speechSynthesis.addEventListener('voiceschanged', OnvoicesChanged);

        const imgElems = Array.from(document.querySelectorAll('img'));
        imgElems.forEach(imgElem => imgElem.addEventListener('click', onClick));

    }

    run();
})();