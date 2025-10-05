const buttonBTF = document.getElementById("btf-player");
const buttonSB = document.getElementById("sb-player");
const buttonTSTCE = document.getElementById("tstce-player");
const buttonPAD = document.getElementById("pad-player");
const buttonTrombe = document.getElementById("trombe-player");
const buttonPDR = document.getElementById("pdr-player");

const volumeSlider = document.getElementById("volume");

let audioCtx;
let musVolume;
let bufferBTF;
let sourceBTF;
let bufferSB;
let sourceSB;
let bufferTSTCE;
let sourceTSTCE;
let bufferPAD;
let sourcePAD;
let bufferTrombe;
let sourceTrombe;
let bufferPDR;
let sourcePDR;

volumeSlider.addEventListener("input", function(){
	if(musVolume){
	musVolume.gain.setValueAtTime((volumeSlider.value / 255), audioCtx.currentTime);
	}
});

buttonBTF.addEventListener("click", async () => {
	if (sourcePDR){
		sourcePDR.stop();
		buttonPDR.innerHTML = "4";
	};
	if (sourceSB){
		sourceSB.stop();
		buttonSB.innerHTML = "4";
	};
	if (sourceTSTCE){
		sourceTSTCE.stop();
		buttonTSTCE.innerHTML = "4";
	};
	if (sourcePAD){
		sourcePAD.stop();
		buttonPAD.innerHTML = "4";
	};
	if (sourceTrombe){
		sourceTrombe.stop();
		buttonTrombe.innerHTML = "4";
	};
	if (!audioCtx){
		audioCtx = new AudioContext();
		musVolume = audioCtx.createGain();
		await loadAudioBTF();
	} else if (buttonBTF.innerHTML === ";") {
		sourceBTF.stop();
		buttonBTF.innerHTML = "4";
	} else {
		await loadAudioBTF();
	};
});

buttonSB.addEventListener("click", async () => {
	if (sourcePDR){
		sourcePDR.stop();
		buttonPDR.innerHTML = "4";
	};
	if (sourceBTF){
		sourceBTF.stop();
		buttonBTF.innerHTML = "4";
	};
	if (sourceTSTCE){
		sourceTSTCE.stop();
		buttonTSTCE.innerHTML = "4";
	};
	if (sourcePAD){
		sourcePAD.stop();
		buttonPAD.innerHTML = "4";
	};
	if (sourceTrombe){
		sourceTrombe.stop();
		buttonTrombe.innerHTML = "4";
	};
	if (!audioCtx){
		audioCtx = new AudioContext();
		musVolume = audioCtx.createGain();
		await loadAudioSB();
	} else if (buttonSB.innerHTML === ";") {
		sourceSB.stop();
		buttonSB.innerHTML = "4";
	} else {
		await loadAudioSB();
	};
});

buttonTSTCE.addEventListener("click", async () => {
	if (sourcePDR){
		sourcePDR.stop();
		buttonPDR.innerHTML = "4";
	};
	if (sourceBTF){
		sourceBTF.stop();
		buttonBTF.innerHTML = "4";
	};
	if (sourceSB){
		sourceSB.stop();
		buttonSB.innerHTML = "4";
	};
	if (sourcePAD){
		sourcePAD.stop();
		buttonPAD.innerHTML = "4";
	};
	if (sourceTrombe){
		sourceTrombe.stop();
		buttonTrombe.innerHTML = "4";
	};
	if (!audioCtx){
		audioCtx = new AudioContext();
		musVolume = audioCtx.createGain();
		await loadAudioTSTCE();
	} else if (buttonTSTCE.innerHTML === ";") {
		sourceTSTCE.stop();
		buttonTSTCE.innerHTML = "4";
	} else {
		await loadAudioTSTCE();
	};
});

buttonPAD.addEventListener("click", async () => {
	if (sourcePDR){
		sourcePDR.stop();
		buttonPDR.innerHTML = "4";
	};
	if (sourceBTF){
		sourceBTF.stop();
		buttonBTF.innerHTML = "4";
	};
	if (sourceTSTCE){
		sourceTSTCE.stop();
		buttonTSTCE.innerHTML = "4";
	};
	if (sourceSB){
		sourceSB.stop();
		buttonSB.innerHTML = "4";
	};
	if (sourceTrombe){
		sourceTrombe.stop();
		buttonTrombe.innerHTML = "4";
	};
	if (!audioCtx){
		audioCtx = new AudioContext();
		musVolume = audioCtx.createGain();
		await loadAudioPAD();
	} else if (buttonPAD.innerHTML === ";") {
		sourcePAD.stop();
		buttonPAD.innerHTML = "4";
	} else {
		await loadAudioPAD();
	};
});

buttonTrombe.addEventListener("click", async () => {
	if (sourcePDR){
		sourcePDR.stop();
		buttonPDR.innerHTML = "4";
	};
	if (sourceBTF){
		sourceBTF.stop();
		buttonBTF.innerHTML = "4";
	};
	if (sourceTSTCE){
		sourceTSTCE.stop();
		buttonTSTCE.innerHTML = "4";
	};
	if (sourcePAD){
		sourcePAD.stop();
		buttonPAD.innerHTML = "4";
	};
	if (sourceSB){
		sourceSB.stop();
		buttonSB.innerHTML = "4";
	};
	if (!audioCtx){
		audioCtx = new AudioContext();
		musVolume = audioCtx.createGain();
		await loadAudioTrombe();
	} else if (buttonTrombe.innerHTML === ";") {
		sourceTrombe.stop();
		buttonTrombe.innerHTML = "4";
	} else {
		await loadAudioTrombe();
	};
});

buttonBTF.addEventListener("click", async () => {
	if (sourceBTF){
		sourceBTF.stop();
		buttonBTF.innerHTML = "4";
	};
	if (sourceSB){
		sourceSB.stop();
		buttonSB.innerHTML = "4";
	};
	if (sourceTSTCE){
		sourceTSTCE.stop();
		buttonTSTCE.innerHTML = "4";
	};
	if (sourcePAD){
		sourcePAD.stop();
		buttonPAD.innerHTML = "4";
	};
	if (sourceTrombe){
		sourceTrombe.stop();
		buttonTrombe.innerHTML = "4";
	};
	if (!audioCtx){
		audioCtx = new AudioContext();
		musVolume = audioCtx.createGain();
		await loadAudioPDR();
	} else if (buttonPDR.innerHTML === ";") {
		sourcePDR.stop();
		buttonPDR.innerHTML = "4";
	} else {
		await loadAudioPDR();
	};
});

function playBufferBTF(bufferBTF) {
	sourceBTF = audioCtx.createBufferSource();
	sourceBTF.buffer = bufferBTF;
	sourceBTF.loop = true;
	sourceBTF.loopStart = ((60/240) + (32*(60/150)));
	sourceBTF.loopEnd = ((60/240) + (208*(60/150)));
	musVolume.gain.setValueAtTime((volumeSlider.value / 255), audioCtx.currentTime);
	sourceBTF.connect(musVolume);
	musVolume.connect(audioCtx.destination);
	sourceBTF.start();
	buttonBTF.innerHTML = ";";
}

function playBufferSB(bufferSB) {
	sourceSB = audioCtx.createBufferSource();
	sourceSB.buffer = bufferSB;
	sourceSB.loop = true;
	sourceSB.loopStart = ((60/240) + (8*(60/178)));;
	sourceSB.loopEnd = ((60/240) + (216*(60/178)));;
	musVolume.gain.setValueAtTime((volumeSlider.value / 255), audioCtx.currentTime);
	sourceSB.connect(musVolume);
	musVolume.connect(audioCtx.destination);
	sourceSB.start();
	buttonSB.innerHTML = ";";
}

function playBufferTSTCE(bufferTSTCE) {
	sourceTSTCE = audioCtx.createBufferSource();
	sourceTSTCE.buffer = bufferTSTCE;
	sourceTSTCE.loop = true;
	sourceTSTCE.loopStart = ((0.75*(60/240)) + (40.25*(60/132)));
	sourceTSTCE.loopEnd = ((0.75*(60/240)) + (160.25*(60/132)));
	musVolume.gain.setValueAtTime((volumeSlider.value / 255), audioCtx.currentTime);
	sourceTSTCE.connect(musVolume);
	musVolume.connect(audioCtx.destination);
	sourceTSTCE.start();
	buttonTSTCE.innerHTML = ";";
}

function playBufferPAD(bufferPAD) {
	sourcePAD = audioCtx.createBufferSource();
	sourcePAD.buffer = bufferPAD;
	sourcePAD.loop = true;
	sourcePAD.loopStart = (60/240);
	sourcePAD.loopEnd = ((60/240) + (128*(60/120)));
	musVolume.gain.setValueAtTime((volumeSlider.value / 255), audioCtx.currentTime);
	sourcePAD.connect(musVolume);
	musVolume.connect(audioCtx.destination);
	sourcePAD.start();
	buttonPAD.innerHTML = ";";
}

function playBufferTrombe(bufferTrombe) {
	sourceTrombe = audioCtx.createBufferSource();
	sourceTrombe.buffer = bufferTrombe;
	sourceTrombe.loop = true;
	sourceTrombe.loopStart = ((60/240) + (28.5*(60/150)) + (4*(60/170)));
	sourceTrombe.loopEnd = ((60/240) + (28.5*(60/150)) + (196*(60/170)));
	musVolume.gain.setValueAtTime((volumeSlider.value / 255), audioCtx.currentTime);
	sourceTrombe.connect(musVolume);
	musVolume.connect(audioCtx.destination);
	sourceTrombe.start();
	buttonTrombe.innerHTML = ";";
}

function playBufferPDR(bufferPDR) {
	sourcePDR = audioCtx.createBufferSource();
	sourcePDR.buffer = bufferPDR;
	sourcePDR.loop = true;
	sourcePDR.loopStart = (64*(60/70));
	sourcePDR.loopEnd = (128*(60/70));
	musVolume.gain.setValueAtTime((volumeSlider.value / 255), audioCtx.currentTime);
	sourcePDR.connect(musVolume);
	musVolume.connect(audioCtx.destination);
	sourcePDR.start();
	buttonPDR.innerHTML = ";";
}

async function loadAudioBTF(){
	try {
		const responseBTF = await fetch("SRW OG/song0032.ogg");
		bufferBTF = await audioCtx.decodeAudioData(await responseBTF.arrayBuffer(), playBufferBTF);
  } catch (err) {
    console.error(`Unable to fetch the audio file. Error: ${err.message}`);
  }
}

async function loadAudioSB(){
	try {
		const responseSB = await fetch("SRW OG/song0001.ogg");
		bufferSB = await audioCtx.decodeAudioData(await responseSB.arrayBuffer(), playBufferSB);
  } catch (err) {
    console.error(`Unable to fetch the audio file. Error: ${err.message}`);
  }
}

async function loadAudioTSTCE(){
	try {
		const responseTSTCE = await fetch("SRW OG/song0029.ogg");
		bufferTWTCE = await audioCtx.decodeAudioData(await responseTSTCE.arrayBuffer(), playBufferTSTCE);
  } catch (err) {
    console.error(`Unable to fetch the audio file. Error: ${err.message}`);
  }
}

async function loadAudioPAD(){
	try {
		const responsePAD = await fetch("SRW OG/song0033.ogg");
		bufferPAD = await audioCtx.decodeAudioData(await responsePAD.arrayBuffer(), playBufferPAD);
  } catch (err) {
    console.error(`Unable to fetch the audio file. Error: ${err.message}`);
  }
}

async function loadAudioTrombe(){
	try {
		const responseTrombe = await fetch("SRW OG/song0030.ogg");
		bufferTrombe = await audioCtx.decodeAudioData(await responseTrombe.arrayBuffer(), playBufferTrombe);
  } catch (err) {
    console.error(`Unable to fetch the audio file. Error: ${err.message}`);
  }
}

async function loadAudioPDR(){
	try {
		const responsePDR = await fetch("GT PD/SEQ_GHOST_BGM037.ogg");
		bufferPDR = await audioCtx.decodeAudioData(await responsePDR.arrayBuffer(), playBufferPDR);
  } catch (err) {
    console.error(`Unable to fetch the audio file. Error: ${err.message}`);
  }
}