import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip);

export default function Chart({ categories, colors, sums }) {
  const data = {
    labels: categories,
    datasets: [
      {
        data: sums,
        backgroundColor: colors,
      },
    ],
  };
  const options = {
    borderWidth: 0,
    cutout: '70%',
  };
  return <Doughnut data={data} options={options} />;
}
