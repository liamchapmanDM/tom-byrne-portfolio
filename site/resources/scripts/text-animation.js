var i = 0;
var txt = 'London City at night. A photographer explores the world revealed around him. A film about colour, perspectives and creation.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("animate-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
