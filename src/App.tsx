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


  const { Countdown } = Statistic;
  const deadline = Date.now() + 990.8 * 60 * 60 * 24 * 2 * 7 + 1000*30 ;
  const deadline2 = Date.now() + 1040 * 60 * 60 * 24 * 2 * 7 + 1000 * 30 + 180;
  const deadline3 = Date.now() + 1055 * 60 * 60 * 24 * 2 * 7 + 1000 * 30 + 180;
  const deadline4 = Date.now() + 79000 + 1000 * 22 ;
  return (
   <div>
   
   <h1><AiFillAlert color={'red'}/> Contagem Regressiva</h1>




   <h4><AiFillShop color={'green'} size={30}/>  Para o show!</h4>  
   <Countdown value={deadline} format="HH:mm:ss:SSS" />



   <h4><FaUmbrellaBeach color={'yellow'} size={30}/>  Para praia!</h4>
   <Countdown value={deadline2} format="HH:mm:ss:SSS" />



   <h4><GiPartyPopper color={'pink'} size={30}/>  Para noite temática!</h4>
   <Countdown value={deadline3} format="HH:mm:ss:SSS" />

   <h4><GiPiercedHeart color={'red'} size={30}/>  Para o Kaio achar uma namorada!</h4>
   <Countdown value={deadline4} format="HH:mm:ss:SSS" />
   
   
   </div>
  );
}

export default App;
