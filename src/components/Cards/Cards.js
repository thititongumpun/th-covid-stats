import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import CardComponent from './Card/Card';
import styles from './Cards.module.css'


const Info = ({ data: {Confirmed, NewConfirmed, UpdateDate } }) => {
  if (!Confirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
      <Typography gutterBottom variant="h4" component="h2">Thailand Covid 19 Stats</Typography>
      <Grid container spacing={3} justify="center">
      <CardComponent
          className={styles.infected}
          cardTitle="ติดเชื้อสะสม"
          value={Confirmed}
          lastUpdate={UpdateDate}
          cardSubtitle="Number of active cases from COVID-19."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="NewConfirmed"
          value={NewConfirmed}
          // lastUpdate={lastUpdate}
          cardSubtitle="Number of today active cases from COVID-19."
        />
      </Grid>
    </div>
    );
}

export default Info;
