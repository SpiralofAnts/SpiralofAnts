const buttonIHF = document.getElementById("ihf-player");

const volumeSlider = document.getElementById("volume");

let audioCtx;
let musVolume;
let bufferIHF;
let sourceIHF;

volumeSlider.addEventListener("input", function(){
	if(musVolume){
	musVolume.gain.setValueAtTime((volumeSlider.value / 255), audioCtx.currentTime);
	}
});

buttonIHF.addEventListener("click", async () => {
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

// OLD REMOVED BUTTON FROM LOOPING-MUSIC INDEX, USE ONLY FOR REFERENCE
//buttonSB.addEventListener("click", async () => {
//	if (sourcePDR){
//		sourcePDR.stop();
//		buttonPDR.innerHTML = "4";
//	};
//	if (sourceBTF){
//		sourceBTF.stop();
//		buttonBTF.innerHTML = "4";
//	};
//	if (sourceTSTCE){
//		sourceTSTCE.stop();
//		buttonTSTCE.innerHTML = "4";
//	};
//	if (sourcePAD){
//		sourcePAD.stop();
//		buttonPAD.innerHTML = "4";
//	};
//	if (sourceTrombe){
//		sourceTrombe.stop();
//		buttonTrombe.innerHTML = "4";
//	};
//	if (!audioCtx){
//		audioCtx = new AudioContext();
//		musVolume = audioCtx.createGain();
//		await loadAudioSB();
//	} else if (buttonSB.innerHTML === ";") {
//		sourceSB.stop();
//		buttonSB.innerHTML = "4";
//	} else {
//		await loadAudioSB();
//	};
//});

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

async function loadAudioIHF(){
	try {
		const responseIHF = await fetch("In His Footsteps.ogg");
		bufferIHF = await audioCtx.decodeAudioData(await responseIHF.arrayBuffer(), playBufferIHF);
  } catch (err) {
    console.error(`Unable to fetch the audio file. Error: ${err.message}`);
  }
}