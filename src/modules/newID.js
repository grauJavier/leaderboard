const newID = async () => {
  const hex = Math.random().toString(16).slice(2);

  const data = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: hex,
    }),
  });

  const output = await data.json();
  localStorage.gameID = await output.result.slice(14, -7);
};

export default newID;
