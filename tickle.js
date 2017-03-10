function update(element, response) {
  var text = response.target.responseText;
  var span = document.createElement('span');
  span.textContent = text;
  while (element.firstChild) element.removeChild(element.firstChild);
  element.appendChild(span);
}

function main() {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("load", update.bind(null, document.body));
  xhr.addEventListener("load", setTimeout.bind(window, main, 1000));
  xhr.open("GET", "tickle.php");
  xhr.send();
}

document.addEventListener("DOMContentLoaded", main)