const getScores = async (gameID) => {
  const pullData = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const output = await pullData.json();
  return output.result;
};

export default getScores;
