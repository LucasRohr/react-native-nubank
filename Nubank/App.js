import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { STORE } from './src/storage'
import { MainMenu } from './src/screens';

export class App extends PureComponent {
  
  render() {
    return (
      <Provider store={ STORE } >
        <MainMenu />
      </Provider>
    )
  }

}

export default App;
