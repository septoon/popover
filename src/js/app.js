const btn = document.getElementById('btn');
const popover = document.getElementById('popover');
popover.classList.add('hide');

btn.addEventListener('click', () => {
  if (popover.classList.contains('active')) {
    popover.classList.remove('active');
    popover.classList.add('hide');
  } else {
    popover.classList.remove('hide');
    popover.classList.add('active');
  }
});
