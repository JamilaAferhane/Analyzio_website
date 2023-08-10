import React from 'react'
import './PartialAnalyzer.css'

const PartialAnalysis = () => {
  return (
    <section className='pa-section'>
    <div className='flexCenter paddings innerWidth sa-wrapper'>
      <div className=" flexColStart">
              <span className='title'>Partial Analyzer</span>
              <span className='primaryText' >Analyze specific sections </span>
      </div>
      <div className='sa-container'>

          <div className='flexCenter head '>
              <h1 className='paTitle'>Partial Analyzer</h1>
              <div className='btns'>
              <button className=' enBotton'>English</button>
              <button className=' frBotton'>French</button>
              </div>
            </div>

            <div className=' blocks'>
                <div className='block_1'>
                  <div className='sections'>Founded Sections:</div>
                </div>
                <div className='block_2'></div>
            </div>
            
            <div className='b-container'>
                <input type="file" id="upload" hidden/>
                <label for="upload">Upload PDF</label>
                <button className='bouton analyze'>Analyze</button>
                <button className='bouton download'>Download</button>
            </div>

    </div>
    </div>
  </section>
  )
}

export default PartialAnalysis
