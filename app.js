class DrumKit {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.playBtn = document.querySelector(".play");
    this.currentKick = "./sounds/kick-classic.wav";
    this.currentSnare = "./sounds/snare-acoustic01.wav";
    this.currentHihat = "./sounds/hihat.acoustic01.wav";
    this.kickAudio = document.querySelector(".kick-sound");
    this.snareAudio = document.querySelector(".snare-sound");
    this.hihatAudio = document.querySelector(".hihat-sound");
    this.index = 0;
    this.bpm = 150;
    this.isPlaying = null;
    this.selects = document.querySelectorAll("select");
    this.muteBtns = document.querySelectorAll(".mute");
    this.tempoSlider = document.querySelector(".tempo-slider");
  }
  activePad(){
    // console.log(this);
    this.classList.toggle('active');
  }

  repeat(){
    let step = this.index % 8;
    const activeBars = document.querySelectorAll(`.b${step}`);
    // console.log(activeBars);
    this.index ++;
  }
  start(){
    const interval = (60/this.bpm) * 1000;
    setInterval(()=>{
      this.repeat();
    }, interval);
  }
  
};


const drumkit = new DrumKit();
drumkit.pads.forEach(pad=>{
  pad.addEventListener('click', drumkit.activePad)
})
drumkit.playBtn.addEventListener('click', ()=>{
  drumkit.start();
})