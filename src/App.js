import './App.css';
import React from 'react';

import { fetchData } from './api/index';

import { Cards } from './components';

class App extends React.Component {
  state = {
    data: {},
    error: null,
    isLoading: false
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <Cards data={data} />
      </div>
    );
  }
}


export default App;
