import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    datasets: [
      {
        label: '# of transactions',
        data: [5, 285, 10],
        backgroundColor: [
          'rgb(178, 69, 255)',
          'rgb(50, 9, 80)',
          'rgb(70, 8, 115)',

        ],
        borderWidth: 0,
      },
    ],
  };
const Chart = () => {
  return (
    <Pie data={data}/>
  )
}

export default Chart