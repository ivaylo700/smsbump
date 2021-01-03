import React, { useMemo } from 'react'
import './TopMenu.css';
import { Button } from './Button';
import { TopRightMenu } from './TopRightMenu';

export const TopMenu = () => {
    return useMemo(() => (
        <nav className="topmenu">

            <div className="topmenu-centered">
                <Button className="form-1-button" text="Form 1" />
                <Button className="success" text="Form 1" />
            </div>
            
            <div className="design">
                1.Design
            </div>

            <div className="behavior">
                2.Behavior
            </div>
            
            <TopRightMenu />
      </nav>
    ), [])
}
