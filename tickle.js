function utter(text) {
  speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}

function evict(element) {
  element.className = "removing";
  element.addEventListener("transitionend", element.remove.bind(element));
}

function mark(element) {
  element.className = "added";
}

function update(element, response) {
  var text = response.target.responseText;
  var span = document.createElement('span');
  span.textContent = text;
  element.appendChild(span);
  setTimeout(utter.bind(null, text), 0);
  setTimeout(mark.bind(null, span), 100);
  setTimeout(evict.bind(null, span), 50 * text.length);
}

function main() {
  var len = Math.sin(Date.now() / 3000) * 40 + 50;
  var order = Math.sin(Date.now() / 1700) * 8 + 11;  
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("load", update.bind(null, document.body));
  xhr.addEventListener("load", setTimeout.bind(window, main, 120 * len - 100));
  xhr.open("GET", "tickle.php?l=" + len);
  xhr.send();
}

document.addEventListener("DOMContentLoaded", main)