import React from 'react'
import Objects from '../../../assets/OBJECTS.png';

function banner() {
  return (
    <div>
        <section className='banner'>
            <div className='banner_wrapper'>
            <div className='left_section'>
                <h1>The <span>Smart</span> Choice For <span>Future</span></h1>
                <p>Elearn is a global training provider based across the UK that specialises in accredited and bespoke training courses. We crush the...</p>
                <div className='groupInput'>
                <span className="input-icon">🔍</span>
                <input type="text" className="input-field" placeholder="Type something..." />
                <button className="input-button">Continue</button>
                </div>
            </div>
            <div className='right_section'>
                <img src={Objects} alt='banner'></img>
            </div>

            </div>
        </section>
    </div>
  )
}

export default banner
