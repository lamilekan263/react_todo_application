import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'

import { ThemeProvider } from "@chakra-ui/core";

const ThemedApp = () => <ThemeProvider> <App /> </ThemeProvider>;
ReactDOM.render(
  <React.StrictMode>
    <ThemedApp></ThemedApp>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
if(module.hot){
  module.hot.accept()
}
