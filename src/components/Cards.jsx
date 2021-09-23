import React from 'react'

const Cards = ( { dataList } ) => {
    return (
        Object.entries(dataList).map( ( [key, value], index ) => {
           return ( index > 25 && index < 30 ) &&
               ( <div className="card col-md-2" key={[key, value].index} >
                    <span className="number">
                        {value}
                        <span className="icon iconify" data-icon="ant-design:info-circle-outlined" data-inline="false"></span>
                    </span>
                    <span className="description" >{key}</span>
                </div> )
            }
        )
    )
}

export default Cards