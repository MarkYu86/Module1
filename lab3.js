// index.js

const button1 = document.querySelector("#column1 button");
const button2 = document.querySelector("#column2 button");

button1.addEventListener("click", function () {
  // alert('Alert button 1')
  console.log("Button 1 clicked");
  const input1 = document.getElementById("input1");
  const heading1 = document.getElementById("heading1");
  heading1.textContent = input1.value;
});

button2.addEventListener("click", function () {
  // alert('Alert button 2')
  console.log("Button 2 clicked");
  const input2 = document.getElementById("input2");
  const heading2 = document.getElementById("heading2");
  heading2.textContent = input2.value;
});

function changeButton1() {
  document.getElementById("column1").style.backgroundColor = "red";
  document.getElementById("heading1").textContent = "Cat";
}

function changeButton2() {
  document.getElementById("column2").style.backgroundColor = "green";
  document.getElementById("heading2").textContent = "Dog";
}