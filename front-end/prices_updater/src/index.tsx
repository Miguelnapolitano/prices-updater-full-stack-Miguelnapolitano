import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MenuProvider } from './contexts';
import GlobalStyles from "./styles/globalStyle"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MenuProvider>
      <GlobalStyles/>      
      <App />
    </MenuProvider>
  </React.StrictMode>
);

reportWebVitals();
