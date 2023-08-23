import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import PartialAnalyzer from '../components/PartialAnalyzer/PartialAnalyzer'

const PartialAnalysis = () => {
  return (
    <div className='App'>
      <Header/>
      <PartialAnalyzer/>
      <Footer/>
    </div>
  )
}

export default PartialAnalysis
