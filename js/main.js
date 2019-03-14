let modal = document.getElementById('overlay');
let close = document.getElementById('close');

setTimeout("modal.style.display = 'block'", 5000);
close.onclick = () => {
  modal.style.display = 'none';
}