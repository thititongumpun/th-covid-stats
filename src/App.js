import React from 'react';

import styles from './App.module.css';

import { fetchData } from './api/index';

import { Cards, Chart } from './components';

class App extends React.Component {
  state = {
    data: {}
  }

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <Cards data={data} />
        <Chart data={data} /> 
      </div>
    );
  }
}


export default App;
