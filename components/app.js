import React from 'react';
import Header from './header';
import Main from './main';
import Spinner from './spinner';

class App extends React.Component {
  constructor() {
    super();

  }
  render() {
    return(
      <div>
        <Header />
        <Spinner/>
        <Main />
      </div>
    )
  }
}
export default App;
