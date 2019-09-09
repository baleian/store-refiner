import React from 'react';
import './App.css';

import Navigator from './components/Navigator';
import { BrowserRouter, Route } from 'react-router-dom';
import GpsRefinerContainer from './containers/GpsRefinerContainer';
import StoreRefinerContainer from './containers/StoreRefinerContainer';
import AddressRefinerContainer from './containers/AddressRefinerContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigator />
        <Route path={process.env.REACT_APP_PUBLIC_URL + "/Gps"} component={GpsRefinerContainer} />
        <Route path={process.env.REACT_APP_PUBLIC_URL + "/Store"} component={StoreRefinerContainer} />
        <Route path={process.env.REACT_APP_PUBLIC_URL + "/Address"} component={AddressRefinerContainer} />
      </BrowserRouter>
    </div>
  );
}

export default App;
