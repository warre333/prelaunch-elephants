import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBO_ET0TGdrVmEe5AN7JFHhz-okNvSTrxw",
  authDomain: "drippy-elephants.firebaseapp.com",
  projectId: "drippy-elephants",
  storageBucket: "drippy-elephants.appspot.com",
  messagingSenderId: "40370301170",
  appId: "1:40370301170:web:107aedf440d080ae84c86b",
  measurementId: "G-F5957J8W07"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);