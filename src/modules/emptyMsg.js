const emptyMsg = (boolean = true) => {
  const msg = document.querySelector('#leaderboard__empty-msg');

  if (boolean) {
    msg.classList.add('d-none');
  } else {
    msg.classList.remove('d-none');
  }
};

export default emptyMsg;
