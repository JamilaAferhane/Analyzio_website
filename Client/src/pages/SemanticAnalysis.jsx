import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import SemanticAnalyzer from '../components/SemanticAnalyzer/SemanticAnalyzer'

const SemanticAnalysis = () => {
  // const [backendData, setBackendData] = useState([{}])
  // useEffect( () => {
  //   fetch("/api").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackendData(data)
  //     }
  //   )
  // }, [])
  return (
    <div className='App'>
      <Header/>
      <SemanticAnalyzer/>
      <Footer/>
        {/* {(typeof  backendData.users === 'undefined') ? (
          <p>loading...</p>
        ) : (
          backendData.users.map ((user,i) => (
            <p key={i}>{user}</p>
          ))
        )} */}
      </div>
  )
}

export default SemanticAnalysis
