const postGame = async (userName, userScore) => {
  const values = JSON.stringify({
    user: userName,
    score: userScore,
  });
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/CDJ8oUTB9lzH5vIwdnUz/scores', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: values,
  });
};

export default postGame;