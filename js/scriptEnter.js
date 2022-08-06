const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () =>
container.classList.add('right-panel-active'));

signInButton.addEventListener('click', () =>
container.classList.remove('right-panel-active'));

let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
mask.classList.add('hide');
setTimeout(() => {
  mask.remove();
}, 600);
})
