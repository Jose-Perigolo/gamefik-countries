import React from 'react';
import { GiCapitol } from "react-icons/gi";
import './styles.css'

function Cards({
  title,
  text1,
  text2,
  image
}) {
  return (
          <div className="col p-3">
            <div className="card thumbimg">
              <img src={image.svgFile} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-text">{text1}</h6>
                <p className="card-text"><GiCapitol className="capitalicon" />{text2}</p>
              </div>
            </div>
          </div>
  )
}

export default Cards;
