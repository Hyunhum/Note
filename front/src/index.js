import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Web3ReactProvider} from "@web3-react/core";
import getLibrary from "./library";
import {BrowserRouter} from 'react-router-dom';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Web3ReactProvider getLibrary={getLibrary}>
    <RecoilRoot>
      <App />
    </RecoilRoot>
    </Web3ReactProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);