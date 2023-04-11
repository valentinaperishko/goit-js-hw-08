import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

const FEEDBACKKEY = 'feedback-form-state';
let data = {};

form.addEventListener('submit', onSubmit);
form.addEventListener('input', throttle(onInput, 1000));

savedTextarea();

function onSubmit(evt) {
  evt.preventDefault();
  if (input.value !== '' && textarea.value !== '') {
    console.log(data);
    localStorage.removeItem(FEEDBACKKEY);
    evt.currentTarget.reset();
    return;
  }
  alert('Fill all the forms!');
}

function onInput(evt) {
  data[evt.target.name] = evt.target.value;
  localStorage.setItem(FEEDBACKKEY, JSON.stringify(data));
}

function savedTextarea() {
  const savedMessage = localStorage.getItem(FEEDBACKKEY);
  if (savedMessage) {
    data = JSON.parse(savedMessage);
    textarea.value = data.message || '';
    input.value = data.email || '';
  }
}
