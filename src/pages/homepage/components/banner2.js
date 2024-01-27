import React from 'react'
import Banner2Image from '../../../assets/side-image.png'
import Heart from '../../../assets/heart.png'
import puzzle from '../../../assets/puzzle.png'

function banner2() {
  return (
    <div>
        <section className='banner2_section'>
            <div className='left_side'>
                <img src={Banner2Image} alt='testing'></img>
            </div>
            <div className='right_side'>
                <h1>Premium <span>Learning</span> <div></div> Experience</h1>

                <div className='listing'>
                    <ul>
                        <li className='list_item'>
                            <div className='image_wrapper'>
                                <img src={Heart} alt='test'></img>
                            </div>
                            <div className='paras'>
                                <p>Easily Accessible</p>
                                <span>Learning Will fell Very Comfortable With Courslab.</span>
                            </div>
                        </li>
                        <li className='list_item'>
                            <div className='image_wrapper'>
                                <img src={puzzle} alt='test'></img>
                            </div>
                            <div className='paras'>
                                <p>Easily Accessible</p>
                                <span>Learning Will fell Very Comfortable With Courslab.</span>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </section>  
    </div>
  )
}

export default banner2
