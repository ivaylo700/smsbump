import React, { useMemo } from 'react'
import { Svg } from './Svg';
import undo from '../static/Undo-icon.svg';
import redo from '../static/Redo-icon.svg';
import trash from '../static/trash-Icon.svg';

export const TopRightMenu = () => {
    return useMemo(() => (
        <div className="topmenu-right">
                <Svg className="undo" src={undo} width={14} height={17} />
                <span className="icon-text">
                    Undo
                </span>
                <span className="redo-icon">
                <Svg className="redo" src={redo} width={14} height={17} />
                <span className="icon-text redo-icon-text">
                    Redo
                </span>
                </span>
                <Svg className="trash" src={trash} width={14} height={17} />
                <span className="icon-text">
                    Delete Element
                </span>
            </div>
    ), [])
}
