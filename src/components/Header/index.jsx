import React, { useState } from "react";
import './style.css';
import LogoIcon from '../../icons/logo.svg';
import { BsFillBookmarkFill } from "react-icons/bs";

import { getData } from '../../helpers/GetInformations';


export const Header = (props) => {
  const [city, setCity] = useState('');

  const getHour = () => {
    const currentHour = new Date().getTime();
    const convertedHour = new Date(currentHour);

    return convertedHour.toString();
  }

  const handleSubmit = async (e) => {
    if(e.code === 'Enter' && city !== '') {
     const response = await getData(city);
     props.data(response);
     setCity('');
    }
  }

  return (
    <header className="header">
      <div className="container d-flex align-items-center">
        <div className="header-logo">
          <img src={LogoIcon} alt="Logo" />
          <p><span>N</span>osso <span>C</span>lima</p>          
        </div>
        <div className="header-search">
          <input
            type="text"
            placeholder="Busque por uma cidade..."
            onChange={(e) => setCity(e.target.value)}
            value={city}
            onKeyUp={handleSubmit}
          />
        </div>
      </div>
    </header>
  );
}