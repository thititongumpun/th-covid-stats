import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import { fetchData } from '../../api';

import styles from './Chart.module.css';

const Chart = ({ data: { Confirmed, NewConfirmed, NewDeaths, NewHospitalized } }) => {
  const [dataDaily, setDataDaily] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      const initialData = await fetchData();

      setDataDaily(initialData);
    };

    fetchAPI();
  }, []);


  const barChart = (
    Confirmed ? (
      <Bar
        data={{
          labels: ['ติดเชื้อวันนี้', 'รักษาหาย', 'เสียชีวิต'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(243, 8, 173, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [NewConfirmed, NewHospitalized, NewDeaths],
            },
          ],
        }}
        options={{
          legend: { display: true },
          title: { display: true, text: `Current stats in Thailand` },
        }}
      />
    ) : null
  );

  // const lineChart = (
  //   dataDaily[0] ? (
  //     <Line
  //       data={{
  //         labels: dataDaily.map(({ date }) => new Date(date).toLocaleDateString()),
  //         datasets: [{
  //           data: dataDaily.map((data) => data.Confirmed),
  //           label: 'Infected',
  //           borderColor: '#3333ff',
  //           fill: true,
  //         }, {
  //           data: dataDaily.map((data) => data.Recovered),
  //           label: 'Deaths',
  //           borderColor: 'red',
  //           backgroundColor: 'rgba(255, 0, 0, 0.5)',
  //           fill: true,
  //         }, {
  //           data: dataDaily.map((data) => data.NewDeaths),
  //           label: 'Recovered',
  //           borderColor: 'green',
  //           backgroundColor: 'rgba(0, 255, 0, 0.5)',
  //           fill: true,
  //         },
  //         ],
  //       }}
  //     />
  //   ) : null
  // );

  return (
    <div className={styles.container}>
      {barChart}
    </div>
  );

};

export default Chart;