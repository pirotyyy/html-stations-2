function displayList() {
  fruits = document.getElementById("fruits");
  pElements = fruits.getElementsByTagName("p");
  var ulElement = document.createElement("ul");

  for (var i = 0; i < pElements.length; i++) {
    var liElement = document.createElement("li");
    liElement.innerHTML = pElements[i].innerHTML;
    ulElement.appendChild(liElement);
  }
  fruits.innerHTML = "";

  fruits.appendChild(ulElement);
}