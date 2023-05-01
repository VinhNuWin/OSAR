import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import { NavigationProvider } from './context/navigation';
import { store } from "./store";

// if (process.env.NODE_ENV === 'production') disableReactDevTools();

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    <NavigationProvider>
        <Provider store={store}>
         <App />
        </Provider>
    </NavigationProvider>
)
