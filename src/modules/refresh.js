import load from './load.js';
import newID from './newID.js';
import emptyMsg from './emptyMsg.js';

const refresh = async () => {
  const scoreList = document.querySelectorAll('.leaderboard__score-item');

  if (scoreList.length) {
    scoreList.forEach((element) => element.remove());
    emptyMsg(false);
    await newID();
    load();
  }
};

export default refresh;
