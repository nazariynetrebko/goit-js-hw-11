import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector(`.form`);

form.addEventListener(`submit`, e => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const delay = parseInt(formData.get(`delay`));
  const state = formData.get(`state`);

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      state === `fulfilled` ? resolve(delay) : reject(delay);
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    });
  form.reset();
});
