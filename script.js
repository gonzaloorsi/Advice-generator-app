const advice = document.querySelector("#advice");
advice.textContent = `"It is easy to sit up and take notice, what's difficult is getting up and taking action."`
const adviceCounter = document.querySelector(".advice-counter");
adviceCounter.textContent = `ADVICE #177`;
const button = document.querySelector(".ask");

button.addEventListener('click', async () => {
  button.setAttribute('disabled', 'disabled');

  const response = await fetch('https://api.adviceslip.com/advice');
  const data = await response.json();
  advice.textContent = `"${data.slip.advice}"`;
  adviceCounter.textContent = `ADVICE #${data.slip.id}`;

    button.removeAttribute('disabled', 'disabled')


  
})