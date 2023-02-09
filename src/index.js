import "./style.css";
import { getData, sendData } from "./modules/API";
import Leaderboard from "./modules/leaderboard";

const refreshBtn = document.querySelector(".refresh");
const submitBtn = document.querySelector("#submit");
const nameOfPlayer = document.querySelector("#nameInput");
const scoreOfPlayer = document.querySelector("#scoreInput");

//adding eventlistner on both button
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let name = nameOfPlayer.value;
  let score = scoreOfPlayer.value;
  let list = new Leaderboard(name, score);
  sendData(list);
  nameOfPlayer.value = "";
  scoreOfPlayer.value = "";
});

refreshBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getData();
});

//pageload event
window.addEventListener("DOMContentLoaded", getData);
