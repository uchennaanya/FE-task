
import '../App.scss';
import Cards from './Cards'
import LeftPane from './LeftPane'
import Header from './Header'
import Table from './Table'
import Breadcrumb from './Breadcrumb'
import AddToDo from './AddToDo'
import axios from 'axios'
import { useState, useEffect } from 'react';


const tables = "https://api.github.com/users/uchennaanya/repos?type=all&sort=updated"

const users = "https://api.github.com/users/uchennaanya"


function App() {
  const [secData, setSecData] = useState(null)
  const [data, setData] = useState(null)

  const fetchData = async () => {
    const res = await axios(users)
    setData(res.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(data)

// Table data;
  const fetchSecData = async () => {
    const res = await axios(tables)
    setSecData(res.data)
  }

  useEffect(() => {
    fetchSecData()
  }, [])

  console.log(secData)

  return (
    <>
      <Header />
      <Breadcrumb />

      <div className="container-fluid" style={{
        display: 'flex'
      }}>

        <LeftPane profile_info={data} />

        <div className="col-md-9" style={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap'
        }}>
          <div className="card-wrapper">
            { data && <Cards dataList={data} /> }
          </div>
          <div style={{
            maxWidth: '69.5vw',
            margin: '1rem 0 0 1rem',
            boxShadow: '0 3px 10px 0 #ccc'
          }}>
            { secData && <Table tableData={secData} /> }
          </div>
        </div>
      </div>
      <AddToDo />
    </>
  );
}

export default App;
