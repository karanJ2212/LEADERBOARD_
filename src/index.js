import "./style.css";
const refreshBtn = document.querySelector(".refresh");
const submitBtn = document.querySelector("#submit");
const nameOfPlayer = document.querySelector("#nameInput");
const scoreOfPlayer = document.querySelector("#scoreInput");

//  POST request using fetch()
const sendData = async () => {
  let name = nameOfPlayer.value;
  let score = scoreOfPlayer.value;
  console.log(name, score);
  fetch(
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ObQuEWVhBtSBKHyny4Vv/scores",
    {
      method: "POST",
      body: JSON.stringify({
        user: name,
        score: score,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  )
    .then((response) => response.json())
    .then((json) => console.log(json));
};

submitBtn.addEventListener("click", sendData);

//  GET request using fetch()

const getData = async () => {
  let response = await fetch(
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ObQuEWVhBtSBKHyny4Vv/scores"
  );

  let data = await response.json();
  console.log(data);
  // Create a variable to store HTML
  let li = ``;

  // Loop through each data and add a table row
  data.result.forEach((users) => {
    li += `  <li>
    <span class="name">${users.user}</span>: <span class="score">${users.score}</span>
  </li>`;
  });

  // Display result
  document.querySelector(".list").innerHTML = li;
};

refreshBtn.addEventListener("click", getData);
