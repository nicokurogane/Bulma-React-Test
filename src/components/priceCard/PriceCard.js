import React from 'react';
import euroIcon from '../../assets/icons/euro.svg'
import './price-card.scss';

const PriceCard = () => {
    return (
        <div className="price-card-container">
            <img src={euroIcon} alt=""/>

            <div className="price-info">
            <span>Ingresos</span>
            <h2>18.677,30 &euro;</h2>
            <span>year 2020</span>
            </div>
        </div>
      );
}
 
export default PriceCard;