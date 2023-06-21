const addScore = (name, score) => {
  let gameID = localStorage.getItem('gameID');
  fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: name,
      score: score,
    }),
  });
};

export default addScore;
