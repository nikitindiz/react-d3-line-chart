import React from 'react';
import Chart from './Chart';
import './App.css';





function App() {
  return (
    <div className="App">
      <Chart
        data={[
          {
              x_date: new Date('10.06.2020'),
              y_min: 0.01,
              y_last: 0.06,
              y_max: 0.10
          },
          {
              x_date: new Date('10.07.2020'),
              y_min: 0.12,
              y_last: 1.23,
              y_max: 1.56
          },
          {
              x_date: new Date('10.08.2020'),
              y_min: 1.23,
              y_last: 1.67,
              y_max: 2.05
          },
          {
              x_date: new Date('10.09.2020'),
              y_min: 0.12,
              y_last: 3.56,
              y_max: 4.00
          },
          {
              x_date: new Date('10.10.2020'),
              y_min: 3.00,
              y_last: 2.00,
              y_max: 3.5
          },
          {
              x_date: new Date('10.11.2020'),
              y_min: 1.5,
              y_last: 3.70,
              y_max: 4.89
          },

      ]}
      />
    </div>
  );
}

export default App;
