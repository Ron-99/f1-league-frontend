import React, { useState, useRef } from 'react';

import InputMask from 'react-input-mask';

function useInput({type, className, id, name, min, max, data, mask}){
    const [value, setValue] = useState('');
    const inputRef = useRef(null);
    let input; 
    
    const handleChangeInput = () => {
        setValue(inputRef.current.value)
    }

    const handleChangeSelect = () => {
        const index = inputRef.current.selectedIndex;
        const optionElement = inputRef.current.childNodes[index];

        let option;

        option = optionElement.getAttribute('data-id');

        setValue(option);
    }
    
    if(type === "text" || type === "number" || type === "date" || type === "password" || type === "email")
        input = <input value={value} ref={inputRef} className={className} id={id} name={name} min={min} max={max} onChange={handleChangeInput} type={type} />;
    else if(type === "select"){
        input = (<select ref={inputRef} name={name} id={id} onChange={handleChangeSelect}>
                    {
                        data.map(value => (
                            <option key={value._id} data-id={value._id} value={value.name || value.number}>{value.name || value.number}</option>
                        ))
                    }
                </select>)
    }else if(type === "mask"){
        input = <InputMask ref={inputRef} id={id} name={name}  value={value} onChange={handleChangeInput} mask={mask}/> ;
    }
    return [value, input, setValue, inputRef];
}

export default useInput;