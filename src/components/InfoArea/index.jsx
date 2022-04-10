import React from "react"
import { formatData } from "../../helpers/GetInformations";
import image from '../../images/openWeather.jpg';

import './style.css';

export const InfoArea = (props) => {
  return(
    <section className="container d-flex align-items-center">
      <div className="left-side mt-5">
        <img src={image} alt="" />
      </div>
      <div className="right-side mt-5">
        
        { props.handler ?
            typeof props.info === 'string' 
            ? props.info
            :<>
              <p><span>Cidade: </span> {props.info.name}</p>
              <p><span>Região: </span> {props.info.region}</p>
              <p><span>Sensação térmica: </span> {`${props.info.feelslike}°`}</p>
              <p><span>Hora/Data: </span> {formatData(props.info.localtime)}</p>
              <p><span>Temperatura atual: </span> {`${props.info.temperature}°`}</p>
              <p><span>Sensação térmica: </span> {`${props.info.feelslike}°`}</p>
              <img src={props.info.condition.icon} alt='Simbolo da condição' />
            </>
          : ''
        }    
      </div>
    </section>
  )
}