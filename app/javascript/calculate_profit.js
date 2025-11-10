const setupPriceCalculation = () => {
  const priceInput = document.getElementById('item-price');
  if (priceInput) {
    const addTaxPriceElement = document.getElementById('add-tax-price');
    const profitPriceElement = document.getElementById('profit');

    const calculateAndDisplay = () => {
      const price = parseFloat(priceInput.value);

      if (!isNaN(price) && price >= 300 && price <= 9999999) {
        // 販売手数料 (10%) を計算
        const commission = Math.floor(price * 0.1);
        // 販売利益を計算
        const profit = price - commission;
        
        addTaxPriceElement.textContent = commission.toLocaleString();
        profitPriceElement.textContent = profit.toLocaleString();
      } else {
        // 無効な入力の場合、表示をクリア
        addTaxPriceElement.textContent = '0';
        profitPriceElement.textContent = '0';
        
      }
    };

    priceInput.addEventListener('input', calculateAndDisplay);
  }
};

window.addEventListener("turbo:load", setupPriceCalculation);
window.addEventListener("turbo:render", setupPriceCalculation);