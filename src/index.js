const numberFormat = (inputNumber) => {
  return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const prices = document.getElementsByClassName('price');
for (const price of prices) {
  price.innerText = numberFormat(price.innerText);
}
