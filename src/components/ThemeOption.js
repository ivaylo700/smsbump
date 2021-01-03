import React, { useMemo } from 'react'

export const ThemeOption = ({ svgComponent, className, svgname, steps, handleThemeOptionsImage })  => {
    return useMemo(() => (
        <div className={className} onClick={() => handleThemeOptionsImage(svgname)}>
            {svgComponent}
            <div className="theme-options-text">This form  has <b>{steps} steps</b></div>
        </div>
    ), [svgComponent, className, svgname, steps, handleThemeOptionsImage] )
}
