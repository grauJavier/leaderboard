const newID = async () => {
  let hex = Math.random().toString(16).slice(2);

  let data = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: hex,
    }),
  });

  let output = await data.json();
  localStorage.gameID = await output.result.slice(14, -7);
};

export default newID;
