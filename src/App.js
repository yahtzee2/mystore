import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import mac from './asset/mac.png';
import surface from './asset/Image 1.png';
import swift from './asset/Image 2.png';
import xps from './asset/xps.png';
import zen from './asset/Image 3.png';

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  let styles = {
    width: '200px',

  };
  return (
    <div id="container mx_auto">
      <div class="nav">
        <ul class="nav justify-content-center">
          <li style={styles} class="nav-item">
            <a class="nav-link" href="macbook.js">Macbook</a>
          </li>
          <li style={styles} class="nav-item">
            <a class="nav-link" href="#">Surface</a>
          </li>
          <li style={styles} class="nav-item">
            <a class="nav-link" href="#">Swift</a>
          </li>
          <li style={styles} class="nav-item">
            <a class="nav-link" href="#">XPS</a>
          </li>
          <li style={styles} class="nav-item">
            <a class="nav-link" href="#">ZenBook</a>
          </li>
        </ul>
      </div>
      <br/><br/><br/>
      <h1 class="middle">Macbook Pro</h1>
      <h6 class="middle">Prolong in the dark</h6> <br/>
     
      <img class="k" src={mac} alt="mac" /> 
      <img class="l" src={surface} alt="surface" />
      <img class="l" src={swift} alt="swift" />
      <img class="l" src={xps} alt="xps" />
      <img class="l" src={zen} alt="zen" />
      <br />
    </div>


  );
}

export default App;
