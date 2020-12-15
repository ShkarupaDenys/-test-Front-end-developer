import React from 'react'
import classnames from "classnames";

const Radio = ({name, value, text, className, checked, onChange, defaultChecked}) => {
    const classNameRadio = classnames('radio', className)
    return (
        <label className={classNameRadio}>
            <input className='radio__input' type='radio' onChange={onChange} name={name} value={value} checked={checked} defaultChecked={defaultChecked} />
            <span className='radio__input-custom'>
                <span className='radio__input-custom-inner'></span>
            </span>
            <span className='radio__text'>{text}</span>
        </label>
    )
}

export default Radio;