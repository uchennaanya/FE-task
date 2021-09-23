import React from 'react'

const Header = () => {
    return (
        <header>
            <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <div style={{
                    display: 'flex'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <span style={{
                            border: '1px solid'
                        }}>

                        </span>
                        <img src="/img/logo2.jpg" alt="logo" /> Front&nbsp;Enginneer&nbsp;Test1
                    </div>
                    <nav>
                            <li style={{display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <span className="iconify" data-icon="dashicons:admin-home" data-inline="false"></span>
                                <span style={{color: '#778699'}}>Home</span>
                            </li>
                        </nav>
                </div>
            </div>
            <div>
                <span className="iconify" data-icon="si-glyph:bell" data-inline="false"></span>
                <span className="iconify" data-icon="bx:bxs-user-circle" data-inline="false"></span>
                <span className="iconify" data-icon="dashicons:arrow-down-alt2" data-inline="false"></span>
            </div>
        </header>
    )
}

export default Header