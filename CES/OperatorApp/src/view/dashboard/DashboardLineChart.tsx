import React from 'react';
import { Line } from 'react-chartjs-2';
import { i18n } from 'src/i18n';

const data = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  datasets: [
    {
      // label: i18n('dashboard.charts.green'),
      label: 'Dan cu trong nam 2020',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [
        365,
        359,
        380,
        381,
        375,
        373,
        370,
        361,
        378,
        365,
        372,
        374,
      ],
    },
  ],
};

const options = {
  scales: {
    xAxes: [
      {
        display: true,
      },
    ],
    yAxes: [
      {
        display: true,
      },
    ],
  },
};

export default function DashboardLineChart(props) {
  return <Line data={data} options={options} />;
}
