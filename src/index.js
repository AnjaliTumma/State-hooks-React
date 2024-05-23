import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Banner from './Components/Banner';
import Voting from './Components/Voting';
import Votingstate from './Components/Votingstate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App />
    <Banner />
    <Voting name1="BJP" name2="INC" name3="AAP" name4="SP" t1="Bharatiya Janata Party" t2="Indian National Congress" t3="Aam Admi Party" t4="Samajvdi(Mulayam)"/>
    <Votingstate  name1="JD" name2="BSP" name3="SWA" name4="SHS" t1="Janata Dal" t2="Bahujan Samaj Party" t3="Swatantra Party" t4="Shivsena"/>
  </div>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
