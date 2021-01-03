import React, { useMemo } from 'react'

export const Button = ({ className, text }) => {
    return useMemo(() => (
        <button type="button" className={className}>{text}</button>
    ), [className, text])
}
