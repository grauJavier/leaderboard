const renderScores = (name, score) => {
  const scoreList = document.querySelector('#leaderboard__score-list tbody');

  // Adding previous scores to the newRow as a backup
  const newRow = `${scoreList.innerHTML
  }
  <tr>
    <td class="leaderboard__score-item">${name}: ${score}</td>
  </tr>`;

  // Reseting the scoreList so it will be loaded again with the backup
  scoreList.innerHTML = null;

  // Now the table will be loaded with alternated colors in style
  scoreList.insertAdjacentHTML('beforeend', newRow);
};

export default renderScores;
