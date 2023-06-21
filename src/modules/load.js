import emptyMsg from './emptyMsg.js';
import getScores from './getScores.js';
import newID from './newID.js';
import renderScores from './renderScores.js';

const load = async () => {
  let gameID = localStorage.getItem('gameID') || (await newID());
  let loaderArr = await getScores(gameID);

  if (loaderArr.length) {
    loaderArr.forEach((data) => {
      renderScores(data.user, data.score);
    });
  } else {
    emptyMsg(false);
  }
};

export default load;
