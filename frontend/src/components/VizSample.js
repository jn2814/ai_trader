import React from 'react';
import LineGraph from './LineGraph';
import './App.css';
import { Pie } from 'react-chartjs-2';

// DOW30 stocks
const dow30Stocks = [
  "MMM", "AXP", "AMGN", "AAPL", "BA", "CAT", "CVX", "CSCO", "DOW", "GS",
  "HD", "HON", "IBM", "INTC", "JNJ", "KO", "JPM", "MCD", "MRK", "MSFT",
  "NKE", "PG", "CRM", "TRV", "UNH", "VZ", "V", "WBA", "WMT"
];

const generateRandomPercentages = () => {
  const percentages = {};
  let remaining = 100;
  dow30Stocks.forEach((stock, index) => {
    if (index === dow30Stocks.length - 1) {
      percentages[stock] = remaining;
    } else {
      const randomPercentage = Math.floor(Math.random() * remaining);
      percentages[stock] = randomPercentage;
      remaining -= randomPercentage;
    }
  });
  return percentages;
};


const data = [
  { date: '1/4/16', averageaction: 1000, ensemble: 3000, dji: 2000, minvar: 1000, tangent: 1000000 },
  { date: '1/5/16', averageaction: 2000, ensemble: 2000, dji: 3000, minvar: 4000, tangent: 1000000 },
  { date: '1/6/16', averageaction: 5000, ensemble: 6000, dji: 4000, minvar: 5000, tangent: 1000000 },
  { date: '1/7/16', averageaction: 4000, ensemble: 4000, dji: 3500, minvar: 4000, tangent: 1000000 },
  { date: '1/8/16', averageaction: 10000, ensemble: 9000, dji: 6000, minvar: 6000, tangent: 1000000 }
];

const pieData = {
  labels: dow30Stocks,
  datasets: [
    {
      data: generateRandomPercentages(dow30Stocks.length),
      backgroundColor: [
        '#FF6384', '#36A2EB', '#FFCE56', '#8A2BE2', '#00FF7F',
        '#FF4500', '#800080', '#228B22', '#483D8B', '#FF1493',
        '#CD853F', '#20B2AA', '#4682B4', '#708090', '#00FFFF',
        '#FFD700', '#F4A460', '#00BFFF', '#7FFF00', '#00FA9A',
        '#FF6347', '#FFA07A', '#C71585', '#D2691E', '#191970',
        '#800000', '#8B0000', '#00008B', '#8B008B', '#008B8B'
      ],
    },
  ],
};

const VizSample = () => {
  const portfolio = generateRandomPercentages();

  return (
    <div className="App">
      <header className="App-header">
      <h1>Performance Overview: </h1>
      <LineGraph data={data} />
      <h1></h1>
      <h1>Portfolio Balance: </h1>
      <table className="App">
        <thead>
          <tr>
            <th>Stock</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {dow30Stocks.map(stock => (
            <tr key={stock}>
              <td>{stock}</td>
              <td>{portfolio[stock]}%</td>
            </tr>
          ))}
        </tbody>
      </table>
      </header>
    </div>
    
  );
}

export default VizSample;
