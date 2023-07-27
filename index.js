const button = document.querySelector("#back");

const disapperButton = () => {
  button.style.display = "none";
};

button.addEventListener("click", disapperButton);
