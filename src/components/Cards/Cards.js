import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import CardComponent from './Card/Card';
import styles from './Cards.module.css'


const Info = ({ data: {Confirmed} }) => {
  if (!Confirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
      <Typography gutterBottom variant="h4" component="h2">Covizz</Typography>
      <Grid container spacing={3} justify="center">
      <CardComponent
          className={styles.infected}
          cardTitle="Infected"
          value={Confirmed.value}
          // lastUpdate={lastUpdate}
          cardSubtitle="Number of active cases from COVID-19."
        />
      </Grid>
    </div>
    );
}

export default Info;
