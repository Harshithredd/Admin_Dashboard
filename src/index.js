import React from "react";
import  ReactDOM  from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import { SnackbarProvider } from "notistack";
import "./index.css"
import store from "./store";
import { Provider } from 'react-redux';

store.subscribe(()=>console.log(store.getState()))
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <SnackbarProvider
                maxSnack={1}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
                preventDuplicate
            >
               <Provider store={store}>
                    <App />
                </Provider>
            </SnackbarProvider>
        </BrowserRouter>
    </React.StrictMode>
   
,document.getElementById('root'));