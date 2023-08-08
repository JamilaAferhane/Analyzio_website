import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import SemanticAnalyzer from '../components/SemanticAnalyzer/SemanticAnalyzer'

const SemanticAnalysis = () => {
  return (
    <div className='App'>
      <Header/>
      <SemanticAnalyzer/>
      <Footer/>
    </div>
  )
}

export default SemanticAnalysis
