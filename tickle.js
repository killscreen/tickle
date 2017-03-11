function utter(text) {
  var utterance = new SpeechSynthesisUtterance(text.split('\n').join('. '));
  var voices = speechSynthesis.getVoices();
  utterance.pitch = Math.sin(Date.now() / 600) + 1;
  utterance.rate = Math.sin(Date.now() / 3400) + 1.25;
  utterance.volume = Math.sin(Date.now() / 9000) / 2 + 1;
  utterance.voice = voices[Math.floor(Date.now() / 60000) % voices.length];
  speechSynthesis.speak(utterance);
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
  setTimeout(evict.bind(null, div), 100 * text.length);
}

function main() {
  var len = Math.sin(Date.now() / 3000) * 20 + 28;
  var order = Math.sin(Date.now() / 1700) * 24 + 26;  
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("load", update.bind(null, document.body));
  xhr.addEventListener("load", setTimeout.bind(window, main, 150 * len - 200));
  xhr.open("GET", "tickle.php?l=" + len);
  xhr.send();
}

document.addEventListener("DOMContentLoaded", main)