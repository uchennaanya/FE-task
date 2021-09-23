import React from 'react'

const Breadcrumb = () => {
    return (
        <div style={{
            display: 'flex',
            padding: '10px 0 0 2rem',
            color: '#778699',
            fontSize: '14px',
            fontFamily: 'DM Sans',
            fontWeight: 'normal',
        }}>
            <p>Divisions</p>
            <span className="iconify" data-icon="iconoir:nav-arrow-right" data-inline="false"></span>
            <p>Modules</p>
        </div>
    )
}

export default Breadcrumb