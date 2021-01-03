import React, { useMemo } from 'react'

export const Device = ({ svgComponent, setDevice, device }) => {
    // svgComponent - alternative to props.children for better control and readability
    return useMemo(() => (
        <span onClick={() => {setDevice(device)}}> {svgComponent} </span>
    ), [svgComponent, setDevice, device])
}
