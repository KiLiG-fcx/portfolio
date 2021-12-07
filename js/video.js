var video=document.querySelector("#pvplayer");
window.onkeydown = keyfunc;

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play();
	document.getElementById("volume").innerHTML = document.getElementById("volumerange").value + "%";
 });

 document.querySelector("#pause").addEventListener("click",function(){
	console.log("Pause Video");
	video.pause();
 })

 document.querySelector("#slower").addEventListener("click",function(){
	video.playbackRate=0.5;
 })

 document.querySelector("#faster").addEventListener("click",function(){
	video.playbackRate=2;
 })

 document.querySelector("#normal").addEventListener("click",function(){
	video.playbackRate=1;
 })

 document.querySelector("#skipahead").addEventListener("click",function(){
	console.log("Original location "+video.currentTime);
	if (video.currentTime >= video.duration-2){
		video.currentTime = 0;
		video.play();
	}
	else {
		video.currentTime += 2
	}
 })

 document.querySelector("#mute").addEventListener("click",function(){
	if (video.muted == false){
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	else if	(video.muted = true){
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
 })

 document.querySelector("#volumerange").addEventListener("click", function(){  
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML=video.volume *100 + "%"
	console.log(video.volume);
}); 

function keyfunc(e){
    const key = e.code;
    if (key === 'ArrowLeft') {
        video.currentTime -= 3;
        if (video.currentTime < 0) {
            video.pause();
            video.currentTime = 0;
    }
    } 
    else if (key === 'ArrowRight') {
        video.currentTime += 3;
        if (video.currentTime > video.duration) {
            video.pause();
            video.currentTime = 0;
        }
    } 
    else if (key === 'Space') {
        if (video.paused || video.ended) {
            video.play();
        }
        else {
            video.pause();
        }
}}
