import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const feedbackKey = 'feedback-form-state';
let formData = {};

form.addEventListener('input', throttle(onInputForm, 500));
form.addEventListener('submit', onSubmiteForm);
onAutoInput();

function onInputForm(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(feedbackKey, JSON.stringify(formData));
}
function onAutoInput() {
  if (!localStorage.getItem(feedbackKey)) {
    formData = {};
  } else {
    formData = JSON.parse(localStorage.getItem(feedbackKey));
    form.elements.email.value = formData.email ? formData.email : '';
    form.elements.message.value = formData.message ? formData.message : '';
  }
}

function onSubmiteForm(evt) {
  evt.preventDefault();
  form.reset();
  localStorage.removeItem(feedbackKey);
  console.log(formData);
}
