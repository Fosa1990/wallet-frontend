import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { colors } from '../../helpers/constants';

ChartJS.register(ArcElement, Tooltip);

export default function Chart({ categories }) {
  let newCategories = categories.filter(item=>item._id !== 'income').map(function (current) {
    let category = Object.assign({}, current);
    category.color = '';
    return category;
  });
  for (let category of newCategories) {
    for (let color of colors) {
      if (color.category === category._id) {
        category.color = color.color;
      }
    }
  }

  const data = {
    labels: newCategories.map(category => category._id),
    datasets: [
      {
        data: newCategories.map(category => category.totalSum),
        backgroundColor: newCategories.map(category => category.color),
      },
    ],
  };
  const options = {
    borderWidth: 0,
    cutout: '70%',
  };
  return <Doughnut data={data} options={options} />;
}
