
// The playlist  --------------------------------------
let playlist = [
	//royalty free music from https://www.bensound.com/
	{src:"../audio/bensound-smile.mp3", title:"Smile", artist:"bensound"},  // 0
	{src:"../audio/bensound-smallguitar.mp3", title:"Small Guitar", artist:"bensound"},  // 1
    {src:"../audio/bensound-tenderness.mp3", title:"Tenderness", artist:"bensound"}//2
]

let whichSongAmIOn = 0 //array index
let isPlaying = false
let audio = null // empty for now
let volume = 0.1;//volume so all songs are the same volume


// Load up songs  -------------------------------------
let playASong = function(whichSong) {
	let song = playlist[whichSong] // The song you want to play from the Array above
	if (audio) { // means it's not null (something was previously loaded)
		audio.src = song.src // Change the song
		if (isPlaying) { audio.play() } // Play it
	} else {
		audio = new Audio(song.src) 
	}
}


// Play/Pause song -------------------------------------
let pressedPlay = function() {
	if (isPlaying) {
		audio.pause()
		isPlaying = false  // Flip the switch
		play.textContent = `PLAY`
	} else {
		audio.play()
		isPlaying = true
		play.textContent = `PAUSE`
	}

	if (whichSongAmIOn == 0){ //if on first song, display song info 1
		document.getElementById("songInfo").innerHTML = "Song: Smile <br>Artist: bensound";
	}
	else if (whichSongAmIOn == 1) { //if on second song, display song info 2
		document.getElementById("songInfo").innerHTML = "Song: Small Guitar <br>Artist: bensound";
	} 
	else if (whichSongAmIOn == 2) { //if on third song, display song info 3
		document.getElementById("songInfo").innerHTML = "Song: Tenderness <br>Artist: bensound";
	}
}

let play = document.querySelector(`#play`)
play.addEventListener(`click`, pressedPlay)


// Next song -----------------------------------------
let pressedNext = function() {
	whichSongAmIOn = whichSongAmIOn + 1
	
    // What if there is no song at that index? 😬

	if (whichSongAmIOn == playlist.length) { //current song is equal to playlist length, restart at the beginning next button is pressed
		whichSongAmIOn = 0;       // resets to first audio song 
	}
	playASong(whichSongAmIOn)

	if (whichSongAmIOn == 0){ //if on first song, display song info 1
		document.getElementById("songInfo").innerHTML = "Song: Smile <br>Artist: bensound";
	}
	else if (whichSongAmIOn == 1) { //if on second song, display song info 2
		document.getElementById("songInfo").innerHTML = "Song: Small Guitar <br>Artist: bensound";
	} 
	else if (whichSongAmIOn == 2) { //if on third song, display song info 3
		document.getElementById("songInfo").innerHTML = "Song: Tenderness <br>Artist: bensound";
	}

}

let next = document.querySelector(`#next`)
next.addEventListener(`click`, pressedNext)

playASong(0)

audio.volume = volume;

