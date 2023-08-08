import React from 'react'
import './AnalyzingTypes.css'

function Residencies() {
  return (
    <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart">
                <span className='title'>Analyse Your Document</span>
                <span className='primaryText' >Choose An Option</span>
            </div>
            <div className="flexCenter cards-container">

              <div class="card-container">
              <a href="/SemanticAnalysis" >
                <div class="card">
                  <div class="front-content">
                    <p>Semantic Analysis</p>
                  </div>
                  <div className="content">
                    <p className="heading">Semantic Analysis</p>
                    <div>
                    <p className='text'>
                    Discover the true essence of text with Semantic Analysis.  
                    </p>
                    <p>
                      Create precise summaries.
                    </p>
                    <p className='text'>
                    Elevate content comprehension and tailor personalized interactions.
                    </p>
                    </div>
                    <button className='button btn' >Start Now</button>
                  </div>
                </div>
                </a>
              </div>

              <div className="card-container">
                <a href="/PartialAnalysis">
                <div className="card">
                  <div className="front-content">
                    <p>Partial Analysis</p>
                  </div>
                  <div className="content">
                    <p className="heading">Partial Analyis</p>
                    <div>
                    <p className='text'>
                      Gain valuable data points and key highlights.
                    </p>
                    <p >
                      Understand the essential elements and key features of your content.
                    </p>
                    <p className='text'>
                      Fine-tune your strategies and decision-making.
                    </p>

                    </div>
                    <button className='button btn' >Start Now</button>
                  </div>
                </div>
                </a>
              </div>

            </div>
        </div>
    </section>

  )
}

export default Residencies

