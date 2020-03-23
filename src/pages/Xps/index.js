import React from 'react'
import pic from '../../asset/Image 6.png';
import { Link } from 'react-router-dom'
import './index.css';
export default () => (
  <div id="container mx_auto">
    <br />
    <img class="ld" src={pic} alt="surface" />
    <br />
    <div class="right">
      <h1> Customize your XPS 13 </h1>
      <br />
      <p> 1.8GHz Intel Core i7-8565U (quad-core, 8MB cache, up to 4.6GHz) </p>
      <p> 16GB 2133MHz DDR3 memory RAM </p>
      <p> Intel UHD Graphics 620   </p>
      <p> Ultra HD UltraSharp InfinityEdge touch display  </p> <p> 2 x Thunderbolt 3 (USB-C)  </p>
      <p> 1 x USB-C 3.1   </p>   <p> micro SD card reader    </p>
      <p> headset jack  </p> <p> Killer 1435 802.11ac Wi-Fi </p>
      <br /> <h3> Select Storage </h3>
      <select class="form-control form-control-lg" id="mySelect" >
        <option value="20 Baht">256GB SSD Storage</option>
        <option value="30 Baht">512GB SSD Storage</option>
        <option value="40 Baht">1TB SSD Storage</option>
      </select> <br />
      <h3> Price </h3>  <h3> 144,900 Baht </h3>
      <Link to="/" ><button type="button" class="btn btn-primary">Purchase</button></Link>
      <br /><br /><br /><br /><br /><br /><br />
    </div>
  </div>
)
