import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { i18n } from 'src/i18n';

const options = {
  legend: {
    display: true,
  },
  scales: {
    xAxes: [
      {
        display: false,
      },
    ],
    yAxes: [
      {
        display: false,
      },
    ],
  },
};
const data = {
  labels: [
    // i18n('dashboard.charts.red'),
    // i18n('dashboard.charts.blue'),
    // i18n('dashboard.charts.yellow'),
    'Hang sang',
    'Hang trung',
    'Hang binh dan',
  ],
  datasets: [
    {
      label: 'Ty trong phan loai',
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
      ],
    },
  ],
};

export default function DashboardDoughnutChart(props) {
  return <Doughnut data={data} options={options} />;
}
