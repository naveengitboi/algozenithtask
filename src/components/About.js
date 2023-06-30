import React from 'react'
import '../css/About.css'

function About() {
  return (
    <div className='aboutContainer gradientBg'>
        <div className="aboutContentDiv">
          <div className="infoAbout">
              <p className='boldMainTexts'>
                Be better at DSA & CP
            </p>
            <p className='regularMediumTexts'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
            <div className="btnDiv">
                <button className='miniTexts'>Join Now </button>
                <button className='miniTexts gradientBg'>View curriculum </button>
            </div>

            <div className="boxesDiv">
                <div className="itemDiv">
                    <div className="tickBox"></div>
                    <p className='regularMediumTexts'>
                        Lorem ipsum dolor sit amet 
                    </p>
                </div>
                 <div className="itemDiv">
                    <div className="tickBox"></div>
                    <p className='regularMediumTexts'>
                        Lorem ipsum dolor sit amet 
                    </p>
                </div>
                 <div className="itemDiv">
                    <div className="tickBox"></div>
                    <p className='regularMediumTexts'>
                        Lorem ipsum dolor sit amet 
                    </p>
                </div>
                 <div className="itemDiv">
                    <div className="tickBox"></div>
                    <p className='regularMediumTexts'>
                        Lorem ipsum dolor sit amet 
                    </p>
                </div>
            </div>
        </div>
        <div className="imageContainer">
            <img src="/assets/Group\ 316.png" alt="" />
        </div>
    </div>
  )
}

export default About