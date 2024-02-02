const form = document.querySelector('form');
const amountInput = document.querySelector('#amount');
const fromSelect = document.querySelector('#from');
const toSelect = document.querySelector('#to');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const amount = amountInput.value;
  const from = fromSelect.value;
  const to = toSelect.value;

  const url = `https://api.exchangerate-api.com/v4/latest/${from}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const rate = data.rates[to];

    const result = amount * rate;

    alert(`${amount} ${from} = ${result} ${to}`);
  } catch (error) {
    console.error(error);
  }
});
