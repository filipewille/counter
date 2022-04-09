import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Statistic } from 'antd';
import { AiFillAlert } from "react-icons/ai";
import { AiFillShop } from "react-icons/ai";
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import { GiPiercedHeart } from "react-icons/gi";




function App() {

  const partyDate = new Date("04/22/2022 10:00 PM").getTime();
  const beachDate = new Date("04/23/2022 02:00 PM").getTime();
  const nightDate = new Date("04/23/2022 07:00 PM").getTime();
  const kaioDate = new Date("04/09/2022 10:00 PM").getTime();
  const { Countdown } = Statistic;
  const deadline = partyDate;
  const deadline2 = beachDate;
  const deadline3 = nightDate;
  const deadline4 = kaioDate;
  return (
    <div>

      <h1><AiFillAlert color={'red'} /> Contagem Regressiva</h1>




      <h4><AiFillShop color={'green'} size={30} />  Para o show!</h4>
      <Countdown value={deadline} format="DD:HH:mm:ss:SSS" />



      <h4><FaUmbrellaBeach color={'yellow'} size={30} />  Para praia!</h4>
      <Countdown value={deadline2} format="DD:HH:mm:ss:SSS" />



      <h4><GiPartyPopper color={'pink'} size={30} />  Para noite temática!</h4>
      <Countdown value={deadline3} format="DD:HH:mm:ss:SSS" />

      <h4><GiPiercedHeart color={'red'} size={30} />  Para o Kaio achar uma namorada!</h4>
      <Countdown value={deadline4} format="HH:mm:ss:SSS" />


    </div>
  );
}

export default App;
