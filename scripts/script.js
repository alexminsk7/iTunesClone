import { videoPlayerInit } from './videoPlayer.js';
import { radioPlayerInit } from './radioPlayer.js';
import { musicPlayerInit } from './musicPlayer.js';

const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');

const stopVideoPlayer = videoPlayerInit();
console.dir(stopVideoPlayer);
const stopRadioPlayer = radioPlayerInit();
musicPlayerInit();

const deactivationPlayer = () => {
	temp.style.display = 'none';
	playerBtn.forEach((item) => item.classList.remove('active'));
	playerBlock.forEach((item) => item.classList.remove('active'));

	stopVideoPlayer();
	stopRadioPlayer();
};

playerBtn.forEach((btn, i) =>
	btn.addEventListener('click', () => {
		deactivationPlayer();
		btn.classList.add('active');
		playerBlock[i].classList.add('active');
	})
);
