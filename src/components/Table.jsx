import React from 'react'


const Table = ({ tableData }) => {
    return (
        <div className="table-responsive">
            <table className="table">
                <thead className="table-light">
                    <tr>
                        <th><input type="checkbox" name="" id="" /></th>
                        <th></th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Open_Issue</th>
                        <th>Home Page URL/ Stargazers_Count</th>
                        <th></th>
                        <th>Fork</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map( dt => (
                            <tr>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>
                                    <span style={{
                                        border: '1px solid green',
                                        borderRadius: '100%'
                                    }} className="iconify" data-icon="dashicons:arrow-down-alt2" data-inline="false"></span>
                                </td>
                                <td>
                                    { dt.name}
                                </td>
                                <td>
                                    {dt.description}<br />
                                    <span className="span">48 Igwebike St.</span>
                                </td>
                                <td>
                                   {dt.open_issues_count}
                                </td>
                                <td>
                                    <li>
                                        {dt.stargazers_count} <br />
                                        <span className="span" >Homogenous</span>
                                    </li>
                                </td>
                                <td>
                                </td>
                                <td colSpan="2">
                                    <p style={{
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}>
                                        <span className="iconify" data-icon="codicon:arrow-small-right" data-inline="false"></span>
                                        {dt.forks}
                                        <span className="iconify" data-icon="ph:dots-three-outline-vertical-fill" data-inline="false"></span>
                                    </p>

                                </td>
                            </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table
