import React, { useEffect, useState } from "react"
import './style.css';

import { getData, formatData } from '../../helpers/GetInformations';

export const Navbar = () => {
  const [defaultCity, setDefaultCity] = useState({name: '', temperature: 0, dateHour: ''});

  useEffect(() => {
    handleDefaultCity('sao paulo');
  }, []);

  const handleDefaultCity = async (city) => {
    const currentCity = await getData(city); 
    setDefaultCity({ 
      name: currentCity.name,
      temperature: currentCity.temperature,
      dateHour: formatData(currentCity.localtime),
    });
    
  }

  return(
    <div className="navbar-area">
      <div className="container d-flex align-items-center justify-content-between">
        <p className="m-0">Temperatura atual</p>
        <p className="m-0">{ `${defaultCity.name} / ${defaultCity.temperature} C° `}</p>
      </div>
    </div>
  );
}