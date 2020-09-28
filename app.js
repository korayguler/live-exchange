const dollar = document.querySelector('[data-dollar]');
const euro = document.querySelector('[data-euro]');
const pound = document.querySelector('[data-pound]');

(update = (api = 'https://api.exchangeratesapi.io/latest?base=TRY') => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', api, true);
  xhr.onload = function (e) {
    const data = JSON.parse(e.target.response);
    const TRY = data.rates.TRY;
    const USD = TRY / data.rates.USD;
    const EUR = TRY / data.rates.EUR;
    const GBP = TRY / data.rates.GBP;
    setData(USD, EUR, GBP);
    console.log(USD, EUR, GBP);
  };
  xhr.send();
})();

const setData = (USD, EUR, GBP) => {
  dollar.textContent = USD.toString().slice(0, 4);
  euro.textContent = EUR.toString().slice(0, 4);
  pound.textContent = GBP.toString().slice(0, 4);
};

setInterval(update, 60000);
