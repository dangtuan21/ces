import React from 'react';
import { Bar } from 'react-chartjs-2';
import { i18n } from 'src/i18n';

const data = {
  labels: [
    // `${i18n('dashboard.charts.day')} 1`,
    // `${i18n('dashboard.charts.day')} 2`,
    // `${i18n('dashboard.charts.day')} 3`,
    // `${i18n('dashboard.charts.day')} 4`,
    // `${i18n('dashboard.charts.day')} 5`,

    `2016`,
    `2017`,
    `2018`,
    `2019`,
    `2020`,
  ],
  datasets: [
    {
      // label: i18n('dashboard.charts.red'),
      label: 'Chi phi qua tung nam (trieu VND)',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [165, 159, 180, 281, 242],
    },
  ],
};

const options = {
  legend: {
    display: true,
  },
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

export default function DashboardBarChart(props) {
  return (
    <Bar
      data={data}
      options={options}
      width={100}
      height={50}
    />
  );
}
