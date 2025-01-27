import {createPublications} from './data.js';
import {openBigPicture} from './rendering-full-photo.js';

const publications = createPublications();

const containerPublications = document.querySelector('.pictures');
const randomUserTemplate = document.querySelector('#picture').content.querySelector('a');

const similarFragment = document.createDocumentFragment();

publications.forEach(({url, likes, comments, description}) => {
  const userPublication = randomUserTemplate.cloneNode(true);
  userPublication.querySelector('.picture__img').src = url;
  userPublication.querySelector('.picture__likes').textContent = likes;
  userPublication.querySelector('.picture__comments').textContent = comments.length;
  userPublication.querySelector('.picture__img').addEventListener('click', () => {
    openBigPicture({url, likes, comments, description});
  });

  similarFragment.appendChild(userPublication);
});

containerPublications.appendChild(similarFragment);
