const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.add('open');
}
function toggleClose() {
  this.classList.remove('open');
}

function toggleActive(e) {
  if (e.propertyName.includes('flex') && this.classList.contains('open')) {
    this.classList.add('open-active');
  } else if (e.propertyName.includes('flex')) {
    this.classList.remove('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('mouseover', toggleOpen));
panels.forEach(panel => panel.addEventListener('mouseleave', toggleClose));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));