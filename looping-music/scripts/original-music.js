const buttonIHF = document.getElementById("ihf-player");
const buttonTB = document.getElementById("tb-player");

const volumeSlider = document.getElementById("volume");

let audioCtx;
let musVolume;
let bufferIHF;
let sourceIHF;
let bufferTB;
let sourceTB;

volumeSlider.addEventListener("input", function(){
	if(musVolume){
	musVolume.gain.setValueAtTime((volumeSlider.value / 255), audioCtx.currentTime);
	}
});

buttonIHF.addEventListener("click", async () => {
	if (sourceTB){
		sourceTB.stop();
		buttonTB.innerHTML = "4";
	};
	if (!audioCtx){
		audioCtx = new AudioContext();
		musVolume = audioCtx.createGain();
		await loadAudioIHF();
	} else if (buttonIHF.innerHTML === ";") {
		sourceIHF.stop();
		buttonIHF.innerHTML = "4";
	} else {
		await loadAudioIHF();
	};
});

buttonTB.addEventListener("click", async () => {
	console.log("buttonTB clicked!");
	if (sourceIHF){
		sourceIHF.stop();
		buttonIHF.innerHTML = "4";
		console.log("In His Footsteps (Ares's Theme) stopped!");
	};
	if (!audioCtx){
		audioCtx = new AudioContext();
		musVolume = audioCtx.createGain();
		await loadAudioTB();
		console.log("The Basics (Ares's Battle Theme) started!");
	} else if (buttonTB.innerHTML === ";") {
		sourceTB.stop();
		buttonTB.innerHTML = "4";
		console.log("The Basics (Ares's Battle Theme) paused!");
	} else {
		await loadAudioTB();
		console.log("The Basics (Ares's Battle Theme) resumed!");
	};
});

function playBufferIHF(bufferIHF) {
	sourceIHF = audioCtx.createBufferSource();
	sourceIHF.buffer = bufferIHF;
	sourceIHF.loop = true;
	sourceIHF.loopStart = (48*(60/77));
	sourceIHF.loopEnd = (96*(60/77));
	musVolume.gain.setValueAtTime((volumeSlider.value / 255), audioCtx.currentTime);
	sourceIHF.connect(musVolume);
	musVolume.connect(audioCtx.destination);
	sourceIHF.start();
	buttonIHF.innerHTML = ";";
}

function playBufferTB(bufferTB) {
	console.log("playBufferTB reached!");
	sourceTB = audioCtx.createBufferSource();
	sourceTB.buffer = bufferTB;
	sourceTB.loop = true;
	sourceTB.loopStart = (160*(60/187));
	sourceTB.loopEnd = (256*(60/187));
	musVolume.gain.setValueAtTime((volumeSlider.value / 255), audioCtx.currentTime);
	sourceTB.connect(musVolume);
	musVolume.connect(audioCtx.destination);
	sourceTB.start();
	buttonTB.innerHTML = ";";
}

async function loadAudioIHF(){
	try {
		const responseIHF = await fetch("In His Footsteps.ogg");
		bufferIHF = await audioCtx.decodeAudioData(await responseIHF.arrayBuffer(), playBufferIHF);
  } catch (err) {
    console.error(`Unable to fetch the audio file. Error: ${err.message}`);
  }
}

async function loadAudioTB(){
	console.log("loadAudioTB reached!");
	try {
		const responseTB = await fetch("The Basics.ogg");
		bufferTB = await audioCtx.decodeAudioData(await responseTB.arrayBuffer(), playBufferTB);
  } catch (err) {
    console.error(`Unable to fetch the audio file. Error: ${err.message}`);
  }
}