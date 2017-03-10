function update() {
  var text = this.responseText;
  var span = document.createElement('span');
  span.textContent = text;
  while (document.body.firstChild) document.body.removeChild(document.body.firstChild);
  document.body.appendChild(span);
}

function main() {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("load", update);
  xhr.addEventListener("load", setTimeout.bind(window, main, 1000));
  xhr.open("GET", "tickle.php");
  xhr.send();
}

document.addEventListener("DOMContentLoaded", main)