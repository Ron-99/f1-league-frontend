import React, { useState, useRef } from 'react';

import InputMask from 'react-input-mask';

function useInput({type, className, id, name, min, max, data, mask, placeholder}){
    const [value, setValue] = useState(null);
    const inputRef = useRef(null);
    let input; 
    
    const handleChangeInput = () => {
        setValue(inputRef.current.value)
    }

    const handleChangeCheck = (e) => {
        setValue(e.target.checked)
    }

    const handleChangeSelect = () => {
        const index = inputRef.current.selectedIndex;
        const optionElement = inputRef.current.childNodes[index];

        let option;

        option = optionElement.getAttribute('data-id');

        setValue(option);
    }
    
    if(type === "text" || type === "number" || type === "date" || type === "password" || type === "email")
        input = <input value={value} ref={inputRef} className={className} id={id} name={name} min={min} max={max} onChange={handleChangeInput} type={type} placeholder={placeholder} />;
    else if(type === "select"){
        input = (<select ref={inputRef} name={name} id={id} onChange={handleChangeSelect}>
                    {
                        data.map(value => (
                            <option key={value.id} data-id={value.id} value={value.name || value.number}>{value.name || value.number}</option>
                        ))
                    }
                </select>)
    }else if(type === "mask"){
        input = <InputMask ref={inputRef} id={id} name={name}  value={value} onChange={handleChangeInput} mask={mask}/> ;
    }else if(type === "checkbox"){
        input = <input value={value} ref={inputRef} className={className} id={id} name={name} min={min} max={max} onChange={handleChangeCheck} type={type} placeholder={placeholder} />;
    }
    return [(type === 'checkbox' ? value ? value : false : value), input, setValue, inputRef];
}

export default useInput;
