function utter(text) {
  speechSynthesis.speak(new SpeechSynthesisUtterance(text.split('\n').join('. ')));
}

function evict(element) {
  element.className = "removing";
  element.addEventListener("transitionend", element.remove.bind(element));
}

function mark(element) {
  element.className = "added";
}

function append(line) {
  var p = document.createElement('p');
  p.textContent = line;
  this.appendChild(p);
}

function update(element, response) {
  var text = response.target.responseText;
  var div = document.createElement('div');
  element.appendChild(div);
  text.split('\n').forEach(append.bind(div));
  setTimeout(utter.bind(null, text), 0);
  setTimeout(mark.bind(null, div), 100);
  setTimeout(evict.bind(null, div), 75 * text.length);
}

function main() {
  var len = Math.sin(Date.now() / 3000) * 10 + 20;
  var order = Math.sin(Date.now() / 1700) * 8 + 11;  
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("load", update.bind(null, document.body));
  xhr.addEventListener("load", setTimeout.bind(window, main, 150 * len - 100));
  xhr.open("GET", "tickle.php?l=" + len);
  xhr.send();
}

document.addEventListener("DOMContentLoaded", main)