import React, { useMemo } from 'react';
import './Header.css';
import { Svg } from './Svg'
import logo from '../static/SMSBump-Logo.svg';
import Pen from '../static/Pen-icon.svg';
import Exit from '../static/Exit-icon.svg'; 

export const Header = () => {
    return useMemo(() => (
        <header className="header">
            <Svg className="logo left" src={logo} />
            <Svg className="pen-icon left" src={Pen} />
            
            <span className="form-1 left">
                Form 1
            </span>

            <div className="header-right">
   
                <span className="dropdown">
                <select name="cars" className="select">
                    <option value="draft">Draft</option>
                </select>
                </span>

                <span className="exit-icon">
                    <img src={Exit} alt="exit icon" />
                </span>
                <span className="exit">
                    Exit
                </span>
            </div>
        </header>
    ), [])
}
