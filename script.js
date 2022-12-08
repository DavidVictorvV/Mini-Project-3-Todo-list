var btn = document.getElementById("add-btn");
var input = document.getElementById("to-do-text");
var list = document.getElementById("to-do-list");
var nrItems = document.getElementById("nr-items");
var clearAll = document.getElementById("clear-all");
var listItems = document.getElementById("list-items");
console.log("list", listItems);

btn.onclick = () => {
  if (input.value) {
    updateList(input.value);
    nrItems.textContent++;
    input.value = "";
  }
};

clearAll.onclick = () => {
  listItems.innerHTML = "<div id='list-items'></div>";
  nrItems.textContent = 0;
};

function deleteEl(thisBtn) {
  thisBtn.parentElement.remove();
  nrItems.textContent--;
}

function toggleCheck(thisCheck) {
  thisCheck.classList.toggle("check");
}

function updateList(text) {
  var html = "";
  html += `<li>
    <input type="checkbox" onclick="toggleCheck(this)" class="check-button check-item" />
    <div class="text">${text}</div>
    <button onclick="deleteEl(this)" class="check-item del-item">X</button>
  </li>`;
  listItems.innerHTML += html;
}
