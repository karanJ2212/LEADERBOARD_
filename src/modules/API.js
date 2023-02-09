//  POST request using fetch()
export const sendData = async (list) => {
  fetch(
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ObQuEWVhBtSBKHyny4Vv/scores",
    {
      method: "POST",
      body: JSON.stringify({
        user: list.name,
        score: list.score,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
};

//  GET request using fetch()

export const getData = async () => {
  let response = await fetch(
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ObQuEWVhBtSBKHyny4Vv/scores"
  );

  let data = await response.json();
  data.result.sort((a, b) => {
    return b.score - a.score;
  });

  // Create a variable to store HTML
  let li = ``;

  // Loop through each data and add to li
  data.result.forEach((users) => {
    li += `  <li>
    <span class="name">${users.user}</span>: <span class="score">${users.score}</span>
  </li>`;
  });

  // Display result
  document.querySelector(".list").innerHTML = li;
};
