const refresh = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/CDJ8oUTB9lzH5vIwdnUz/scores')
  const results = await response.json();
  return results.result;
}

export default refresh;
