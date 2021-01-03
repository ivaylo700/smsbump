import React, { useContext } from 'react'
import './Content.css';
import { DeviceContext } from '../App'
import { DynamicSvg } from './DynamicSvg';

export const Content = ({ themeOptionsImage }) => {
    const device = useContext(DeviceContext);
    return (
        <>
            <div className={`${device.device || 'desktop'}-content`}>
                <div className="main-content">
                     <DynamicSvg name={themeOptionsImage} width={350} height={350} />
                </div>
            </div>
            <div className="desktop-content-background"></div>
        </>
    )
}
