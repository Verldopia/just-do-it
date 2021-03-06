const $btn = document.getElementById('btn-totop');
const $main = document.querySelector('.main-container');

function scrollDown() {
  if ($main.scrollTop > 100) {
    $btn.style.right = 'calc(5.5rem - 3px)';
    $btn.style.opacity = '1';
  } else {
    $btn.style.right = '-10rem';
    $btn.style.opacity = '0';
  }
}

function toTop() {
  $main.scrollTop = 0;
}

$main.addEventListener('scroll', scrollDown);
$btn.addEventListener('click', toTop);
