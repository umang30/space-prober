var speech = new SpeechSynthesisUtterance(), audio;
audio = new Audio('assets/audio.mp3');
window.speechSynthesis.onvoiceschanged = function () {
    let voices = window.speechSynthesis.getVoices();
    for(let i=0;i<voices.length;i++){ 
        let voice = voices[i];
        if (voice.name.includes("(Natural) - English (India)")) {
            speech.voice = voice;
            break;
        }
        else if (voice.name.includes("(Natural) - English (United States)")) {
            speech.voice = voice;
        }
        else if (voice.name.includes("English (India)")) {
            speech.voice = voice;
        }
    }
};
function startTour(){
    alert("Scroll to watch solar system tour")
    var tourDiv = document.querySelector(".tour");
    var startDiv = document.querySelector(".start");
    startDiv.style.display = "none";
    tourDiv.style.display = "block";
    openFullscreen(tourDiv);
    audio.loop = true;
    audio.play();
    var playbackConst = 500, 
    setHeight = document.getElementById("set-height"), 
    vid = document.getElementById('v0'); 
    setHeight.style.height =( Math.floor(vid.duration) * playbackConst ) + "px";
    console.log(Math.floor(vid.duration) * playbackConst + "px");
    function scrollPlay(){  
        var tour = document.querySelector(".tour");
        var frameNumber  = tour.scrollTop/playbackConst;
        if(frameNumber >= vid.duration){
            window.cancelAnimationFrame(scrollPlay);
            tour.style.display = "none";
            startDiv.style.display = "block";
            audio.pause();
            closeFullscreen();
            return;
        }
        if(frameNumber!=vid.currentTime){
            vid.currentTime  = frameNumber;
        }
        window.requestAnimationFrame(scrollPlay);
    }
    var comparison = true, milkyway = true, solarSystem = true, mercury = true, earth = true, moon = true, mars = true, asteroidBelt = true, venus = true, jupiter = true, saturn = true, uranus = true, neptune = true, pluto = true, sun = true, Kuiper = true;
    vid.addEventListener('timeupdate', function() {
        if(Math.abs(vid.currentTime >= 30) && Math.abs(vid.currentTime<=44)){
            if(milkyway){
                milkyway = false;
                sayText("This is our Milky Way Galaxy");
            }
        } else{
            console.log("OUT");
            milkyway = true;
        }
        if(Math.abs(vid.currentTime >= 54) && Math.abs(vid.currentTime<= 60)){
            if(solarSystem){
                solarSystem = false;
                sayText("We are Entering in our Solar System");
            }
        } else {
            solarSystem = true;
        }
        if(Math.abs(vid.currentTime >= 61) && Math.abs(vid.currentTime<= 70)){
            if(Kuiper){
                Kuiper = false;
                sayText("We are in Kuiper belt");
            }
        } else {
            Kuiper = true;
        }
        if(Math.abs(vid.currentTime >= 71) && Math.abs(vid.currentTime<= 76)){
            if(pluto){
                pluto = false;
                sayText("Pluto, the dwarf planet");
            }
        } else {
            pluto = true;
        }
        if(Math.abs(vid.currentTime >= 79) && Math.abs(vid.currentTime<= 96)){
            if(neptune){
                neptune = false;
                sayText("Neptune, the eighth and farthest known Solar planet from the Sun.");
            }
        } else {
            neptune = true;
        }
        if(Math.abs(vid.currentTime >= 97) && Math.abs(vid.currentTime<= 121)){
            if(uranus){
                uranus = false;
                sayText("Uranus, the coldest planet in the Solar System.");
            }
        } else {
            uranus = true;
        }
        if(Math.abs(vid.currentTime >= 130) && Math.abs(vid.currentTime<= 159)){
            if(saturn){
                saturn = false;
                sayText("Approaching to Saturn, Wow! can you see the rings? Actually they are moons of saturn");
            }
        } else {
            saturn = true;
        }
        if(Math.abs(vid.currentTime >= 161) && Math.abs(vid.currentTime<= 190)){
            if(jupiter){
                jupiter = false;
                sayText("Can you see the Jupiter, the Biggest planet of our solar system.");
            }
        } else {
            jupiter = true;
        }
        if(Math.abs(vid.currentTime >= 200) && Math.abs(vid.currentTime<= 255)){
            if(asteroidBelt){
                asteroidBelt = false;
                sayText("Now we are in the middle of the solar system, As you can see the Asteroid Belt.");
            }
        } else {
            asteroidBelt = true;
        }
        if(Math.abs(vid.currentTime >= 264) && Math.abs(vid.currentTime<= 328)){
            if(mars){
                mars = false;
                sayText("Mars, the red planet, lets have a quick touch to the surface.");
            }
        } else {
            mars = true;
        }
        if(Math.abs(vid.currentTime >= 347) && Math.abs(vid.currentTime<= 384)){
            if(earth){
                earth = false;
                sayText("That's Our Earth, The most beautiful planet of solar system.");
            }
        } else {
            earth = true;
        }
        if(Math.abs(vid.currentTime >= 392) && Math.abs(vid.currentTime<= 402)){
            if(moon){
                moon = false;
                sayText("The Moon, The only natural satellite for our earth.");
            }
        } else {
            moon = true;
        }
        if(Math.abs(vid.currentTime >= 421) && Math.abs(vid.currentTime<= 438)){
            if(venus){
                venus = false;
                sayText("The Venus, Temprature is 475 degree celcius.");
            }
        }
        else {
            venus = true;
        }
        if(Math.abs(vid.currentTime >= 462) && Math.abs(vid.currentTime<= 490)){
            if(mercury){
                mercury = false;
                sayText("Mercury, It speeds around the sun every 88 Earth days.");
            }
        } else {
            mercury = true;
        }
        if(Math.abs(vid.currentTime >= 504) && Math.abs(vid.currentTime<= 514)){
            if(sun){
                sun = false;
                sayText("The Sun, The star of our solar system.");
            }
        } else {
            sun = true;
        }
        if(Math.abs(vid.currentTime >= 517) && Math.abs(vid.currentTime<= 530)){
            if(comparison){
                comparison = false;
                sayText("Now you can compare the size of planets with the giant sun.");
            }
        } else {
            comparison = true;
        }
    });
    window.requestAnimationFrame(scrollPlay);
}
async function sayText(text){
    audio.volume = 0.3;
    speech.text = text;
    window.speechSynthesis.speak(speech);
    speech.onend = function(event) {
        audio.volume = 1;
    }
}
function openFullscreen(elem) {
    var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
        (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
        (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
        (document.msFullscreenElement && document.msFullscreenElement !== null);

    if (!isInFullScreen) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    }
}

function closeFullscreen() {
    var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
        (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
        (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
        (document.msFullscreenElement && document.msFullscreenElement !== null);

    if (isInFullScreen) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }

}