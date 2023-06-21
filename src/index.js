import './styles.css';
import load from './modules/load.js';
import renderScores from './modules/renderScores.js';
import addScore from './modules/addScore.js';
import refresh from './modules/refresh.js';
import emptyMsg from './modules/emptyMsg.js';

load();

const addScoreForm = document.querySelector('#add-score__form');
const nameInput = document.querySelector('#add-score__name-input');
const scoreInput = document.querySelector('#add-score__score-input');

addScoreForm.addEventListener('submit', (event) => {
  event.preventDefault();
  emptyMsg(true);
  renderScores(nameInput.value, scoreInput.value);
  addScore(nameInput.value, scoreInput.value);
  addScoreForm.reset();
});

const refreshBtn = document.querySelector('#recent-scores__refresh-btn');

refreshBtn.addEventListener('click', () => {
  refresh();
});
