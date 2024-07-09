import React, { useState } from 'react';

function CurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState(0);

  const rates = {
    USD: 1,
    EUR: 0.84,
    GBP: 0.76,
    JPY: 110.54,
    AUD: 1.38
  };

  const handleConvert = () => {
    const convertedAmount = (amount * rates[toCurrency]) / rates[fromCurrency];
    setResult(convertedAmount.toFixed(2));
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
        <option value="AUD">AUD</option>
      </select>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
        <option value="AUD">AUD</option>
      </select>
      <button onClick={handleConvert}>Convert</button>
      <p>
        {amount} {fromCurrency} = {result} {toCurrency}
      </p>
    </div>
  );
}
