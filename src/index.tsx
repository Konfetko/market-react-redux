
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store, {persister} from './app/store';
import App from './App';
import {PersistGate} from "redux-persist/integration/react";


const container = document.getElementById('root')!;
const root = createRoot(container);


root.render(
  <React.StrictMode>
      <PersistGate persistor={persister}>
          <Provider store={store}>
              <App />
          </Provider>
      </PersistGate>
  </React.StrictMode>
);


