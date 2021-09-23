import {useState} from 'react'
import Todo from './Todo'


const LeftPane = ({ profile_info }) => {

    const [addTodo, setAddTodo] = useState('mamamaaa')

    return(

        <div className="left-pane col-md-3" style={{
            maxWidth: '24vw',
            marginLeft: '1rem'
        }}>

            <div className="personal-data">
                <h3 style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 0 1rem 0'
                }}> <span className="iconify" data-icon="gg:home-screen" data-inline="false" style={{
                        fontSize: '25px',
                        color: '#000',
                        padding: '0.3rem 0.2rem',
                        backgroundColor: '#00A2D6',
                        borderRadius: '5px'
                        }}>
                    </span> <span style={{
                        fontSize: '18px'
                    }}>Profile infomation</span> </h3>
                <p>
                    <span className="iconify" data-icon="grommet-icons:phone" data-inline="false">
                    </span> 07062725781
                </p>
                <p>
                    <span className="iconify" data-icon="ph:envelope-thin" data-inline="false">
                    </span>&nbsp;martinsanya19@gmail.com
                    {/* { profile_info.blog } */}
                </p>
                <p>
                    <span className="iconify" data-icon="mdi-light:map-marker" data-inline="false">
                    </span>Aba, Nigeria
                    {/* {profile_info.location} */}
                </p>
                <p>
                    <span className="iconify" data-icon="fluent:notebook-24-regular" data-inline="false">
                    </span> 0 journal entry
                </p>
                <p>
                    <span className="iconify" data-icon="iconoir:fingerprint-squared" data-inline="false">
                    </span> 3 Fingerprints enrolled
                </p>
            </div>

            <div className="to-do">
                <Todo addTodo={addTodo} />
            </div>
        </div>
    )
}

export default LeftPane