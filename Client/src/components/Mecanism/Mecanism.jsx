import React from 'react'
import './Mecanism.css'

function Contact() {
  return (
   <section className="c-wrapper">
    <div className="paddings innerWidth flexCenter c-container">

        {/*left side*/}
        <div className="flexColStart c-left">
            <span className='orangeText'>How Analyzio works </span>
            <span className='primaryText'>Easy and Efficient</span>
            <span className='secondaryText'>Unlock the power of Analyzio with just a few simple steps.</span>

            <div className="flexColStart contactModes">

                {/* first row */}
                <div className="flexStart row">
                    
                    {/** first mode */}
                    <div className="flexColCenter mode">

                        <div className="flexStart">
                            <div className="flexColStart detail">
                                <span className='primaryText'>Step 1: Upload PDFs</span>
                                <span className='secondaryText'>Easily upload your PDF documents to Analyzio's user-friendly interface</span>
                            </div>
                        </div>

                    </div>

                    {/**second mode */}
                    <div className="flexColCenter mode">

                        <div className="flexStart">
                            
                            <div className="flexColStart detail">
                                <span className='primaryText'>Step 2: Semantic Analysis</span>
                                <span className='secondaryText'>Our semantic analysis algorithm dives deep into the PDFs, extracting key insights, providing summaries, and identifying essential keywords.</span>
                            </div>
                        </div>

                    </div>
                </div>

                 {/* second row */}
                 <div className="flexStart row">
                    
                    {/** tirth mode */}
                    <div className="flexColCenter mode">

                        <div className="flexStart">
                            
                            <div className="flexColStart detail">
                                <span className='primaryText'>Step 3: Partial Analysis</span>
                                <span className='secondaryText'>Select specific sections of the PDFs for in-depth analysis, saving time and focusing on the most relevant content.</span>
                            </div>
                        </div>
                    </div>

                    {/**forth mode */}
                    <div className="flexColCenter mode">

                        <div className="flexStart">
                            
                            <div className="flexColStart detail">
                                <span className='primaryText'>Step 4: Insights & Visualizations</span>
                                <span className='secondaryText'>After the analysis is complete, Analyzio presents you with valuable insights and visualizations. </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        {/*right side*/}
        <div className="c-right">
            <img src="./r3.png" alt="" className="image-container" />
        </div>

    </div>
   </section>
  )
}

export default Contact
