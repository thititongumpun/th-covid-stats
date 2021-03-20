import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import CardComponent from './Card/Card';
import styles from './Cards.module.css'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Info = ({ data: {Confirmed, NewConfirmed, NewDeaths, Recovered, NewHospitalized, Hospitalized} }) => {
  if (!Confirmed) {
    return <Loader className="svgMain"
            type="Plane"
            color="#7B68EE"
            height={500}
            width={500}
          />
  }

  return (
    <div className={styles.container}>
      <Typography gutterBottom variant="h4" component="h2">Thailand Covid 19 Stats</Typography>
      <Grid container spacing={3} justify="center">
      <CardComponent
          className={styles.infected}
          cardTitle="ติดเชื้อสะสม"
          value={Confirmed}
          cardSubtitle="Number of active cases from COVID-19."
        />
        <CardComponent
          className={styles.currentInfected}
          cardTitle="ติดเชื้อวันนี้"
          value={NewConfirmed}
          cardSubtitle="Number of today active cases from COVID-19."
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="เสียชีวิต"
          value={NewDeaths}
          cardSubtitle="Number of today death cases from COVID-19."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="หายแล้ว"
          value={Recovered}
          cardSubtitle="Number of today recover cases from COVID-19."
        />
        <CardComponent
          className={styles.hospital}
          cardTitle="รักษาอยู่ใน รพ."
          value={Hospitalized}
          cardSubtitle="Number of today Hospitalized cases from COVID-19."
        />
        <CardComponent
          className={styles.hospitaled}
          cardTitle="รักษาหาย"
          value={NewHospitalized}
          cardSubtitle="Number of today recovered cases from COVID-19."
        />
      </Grid>
    </div>
  );
}

export default Info;
