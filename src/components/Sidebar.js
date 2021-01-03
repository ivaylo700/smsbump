import React, { useState, useContext, useCallback } from 'react'
import './Sidebar.css';
import { Svg } from '../components/Svg';
import desktop from '../static/sidebar/Desktop.svg';
import pad from '../static/sidebar/Pad.svg';
import phone from '../static/sidebar/Phone.svg';

import MainMenuSelector from '../static/sidebar/MainMenuSelector.svg';
import { SideBarMenu } from './SideBarMenu';
import { Device } from './Device';
import { ThemeOption } from './ThemeOption';

import Theme from '../static/sidebar/Theme.svg';
import { themeOptionsConfig } from '../config/themeOptionConfig';

import { DeviceContext } from '../App';

export const Sidebar = ({ handleThemeOptionsImage }) => {

    const { setDevice } = useContext(DeviceContext);
    const [hide, setHide] = useState(true);

    const handleMenuToggle = useCallback(() => {
        setHide(!hide)
    }, [hide])
    
    const devices = [{
            deviceSvg: desktop,
            deviceName: 'desktop',
            id: 1
        },{
            deviceSvg: pad,
            deviceName: 'pad',
            id: 2
        },{
            deviceSvg: phone,
            deviceName: 'phone',
            id: 3
        }
    ]
    return (
        <nav className="sidebar">
            <div className="sidebar-devices">
                {devices.map((device) => (
                    <Device key={device.id} svgComponent={<Svg className={device.deviceName} src={device.deviceSvg} />} setDevice={setDevice} device={device.deviceName} />
                ))}
                </div>
            <a href="#Theme" onClick={handleMenuToggle}>
                {!hide &&
                    <Svg className="MainMenuSelector" src={MainMenuSelector} /> 
                }
                <Svg className="Theme" src={Theme} /> 
                <span> Theme </span> 
            </a>
            <SideBarMenu />

            {/* There is something wrong with the right arrow svg, so just improvising */}
            <a href="#NextForm" className="sidebar-footer">Next Form 1/4    <span className="arrow">-{'>'} </span></a>
      
            <div className={`theme-options-menu ${hide ? 'hide-menu' : ''}`}>
                {themeOptionsConfig.map((option) => (
                    <ThemeOption key={option.id} svgComponent={<Svg src={option.svgComponent } />} className={option.className} svgname={option.svgname} steps={option.steps} handleThemeOptionsImage={handleThemeOptionsImage} />
                ))}
                
            </div>
        </nav>

    )
}
