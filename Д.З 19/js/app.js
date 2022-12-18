
const numbersPicture = ['image/1.jpg', 'image/2.jpg', 'image/3.jpg', 'image/4.jpg', 'image/5.jpg']

const arrowAfter = document.querySelector('.arrowAfter');
const arrowBefore = document.querySelector('.arrowBefore');
let picture = document.querySelector('.view');
arrowAfter.addEventListener('click', showNextPicture);
arrowBefore.addEventListener('click', showPreviousPicture);

function defaultValue() {
  picture.setAttribute('src', numbersPicture[0]);
  arrowAfter.setAttribute('data-current', 0);
}

function showNextPicture() {
  const currentIndex = Number(arrowAfter.getAttribute('data-current'));
  let nextIndex = currentIndex + 1;
  if (nextIndex > numbersPicture.length - 1) {
    nextIndex = 0;
  }
  picture.setAttribute('src', numbersPicture[nextIndex]);
  arrowAfter.setAttribute('data-current', nextIndex);
  clearInterval(timer);
  timer = setInterval(showNextPicture, 3000);
}

function showPreviousPicture() {
  const currentIndex = Number(arrowAfter.getAttribute('data-current'));
  let nextIndex = currentIndex - 1;
  if (nextIndex < 0) {
    nextIndex = numbersPicture.length - 1;
  }
  picture.setAttribute('src', numbersPicture[nextIndex]);
  arrowAfter.setAttribute('data-current', nextIndex);

  clearInterval(timer);
  timer = setInterval(showNextPicture, 3000);
}

let timer = setInterval(showNextPicture, 3000);

defaultValue();



