const overlay = document.querySelector("#overlay");
const delBtn = document.querySelector("#delete-btn");
const closeBtn = document.querySelector("#close-btn");
const nameInput = document.querySelector("#playerName");

const toggleModal = () => {
  overlay.classList.toggle("hidden");
  overlay.classList.toggle("flex");
};

delBtn.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", toggleModal);

const handleSubmit = () => {
  const playerName = nameInput.value;
  if (!playerName || playerName.length < 3) {
    return alert("Please enter a valid name!");
  }
  console.log(playerName);
  nameInput.value = "";
  // logic to connect to db
  alert("Score uploaded ✨");
  toggleModal();
};
