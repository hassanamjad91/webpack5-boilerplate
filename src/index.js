import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div className="app"></div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('root'));