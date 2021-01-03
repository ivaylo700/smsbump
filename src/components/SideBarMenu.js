import React, { useMemo } from 'react'
import { Svg } from '../components/Svg';
import ButtonField from '../static/sidebar/ButtonField.svg';
import Checkbox from '../static/sidebar/Checkbox.svg';
import CloseButton from '../static/sidebar/CloseButton.svg';
import Compliance from '../static/sidebar/Compliance.svg';
import NameField from '../static/sidebar/NameField.svg';
import EmailField from '../static/sidebar/EmailField.svg';
import Form from '../static/sidebar/Form.svg';
import PhoneField from '../static/sidebar/PhoneField.svg';
import Textnew from '../static/sidebar/Textnew.svg';

export const SideBarMenu = () => {

    return useMemo(() => {
        // This can be combined into array with objects...
        const sidebarOptions = ['Form', 'Text', 'Phone Field', 'Email Field', 'Name Field', 'Button Field', 'Checkbox', 'Close Button', 'Compliance'];
        const svgs = [Form, Textnew, PhoneField, EmailField, NameField, ButtonField, Checkbox, CloseButton, Compliance]
        return (
        <>
            {sidebarOptions.map((option, index) => {
               const formattedOption = option.split(' ').join('');
               return <a key={index} href={`#${formattedOption}`}><Svg className={formattedOption} src={svgs[index]} /> <span> {option} </span> </a>
            })}
        </>
        )
    }, [])
} 
