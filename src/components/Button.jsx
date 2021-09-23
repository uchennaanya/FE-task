import React from 'react'


const Button = ({ value, dataTarget, dataToggle, myStyle }) => {

    const className = `button btn-${myStyle}`

    return (
        // <button className="custombutton classname" dataToggle="modal" dataTarget="#exampleModal" >
        //     {value}
        // </button>
        <button className={className} data-bs-toggle="modal" data-bs-target="#exampleModal">
            {value}
        </button>
    )
}

export default Button