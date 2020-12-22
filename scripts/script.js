import { videoPlayerInit } from './videoPlayer.js';
import { radioPlayerInit } from './radioPlayer.js';
import { musicPlayerInit } from './musicPlayer.js';

const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');

const deactivationPlayer = () => {
	temp.style.display = 'none';
	playerBtn.forEach((item) => item.classList.remove('active'));
	playerBlock.forEach((item) => item.classList.remove('active'));
};

playerBtn.forEach((btn, i) =>
	btn.addEventListener('click', () => {
		deactivationPlayer();
		btn.classList.add('active');
		playerBlock[i].classList.add('active');
	})
);

videoPlayerInit();
radioPlayerInit();
musicPlayerInit();

/* for (let i = 0; i < 3; i++) {
	setTimeout(() => {
		console.log(i);
	}, 0);
} */
/* 
const foo = ({ a, b }) => a + b;

const app = () => foo({ a: 292, b: 3125 });
console.log(app()); */
