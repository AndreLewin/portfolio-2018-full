import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Portfolio from './Portfolio.jsx';


class App extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route render={ () => <Portfolio/>} />
        </Switch>
      </div>
    );
  }
}

export default App;