import React, {useState} from 'react';
import axios from 'axios';
import './SemanticAnalyzer.css';

const SemanticAnalyzer = () => {

  return (
    <section className='sa-section'>
      <div className='flexCenter paddings innerWidth sa-wrapper'>
        <div className=" flexColStart">
                <span className='title'>Semantic Analyzer</span>
                <span className='primaryText' >Analyze your documents easily and rapidly</span>
        </div>
        <div className='sa-container'>

            <div className='flexStart firstrow'>
                <h1 className='saTitle'>Semantic Analyzer</h1>
                <div className='languageBottons'>
                <button className=' enBotton'>English</button>
                <button className=' frBotton'>French</button>
                </div>
                <div className='flexStart summarylength'>
                <h3 className='summaryLengthTitle'>Summary Length</h3>
                <input type="range" id="range" min={3} max={10}/>
                </div>
              </div>

              <div className=' blocks'>
                  <div className='block_1'></div>
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

export default SemanticAnalyzer
