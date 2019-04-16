import React from 'react';

export default props => {
    const{col = 's12', input, id, label, type = 'text'} = props;
    console.log('Input Props:', props);
    return (
        <div className={`input-field col ${col}`}>
            <input {...input} id={id} type={type}/>
            <label htmlFor={id}>{label}</label>
        </div>
    )
}