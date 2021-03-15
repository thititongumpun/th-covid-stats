import './App.css';
import React from 'react';

import { fetchData } from './api/index';

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
    const { data, error, isLoading } = this.state;

    return (
      <div>
        <p>TEST</p>
      </div>
    );
  }
}


export default App;
