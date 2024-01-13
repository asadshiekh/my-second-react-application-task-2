import React from 'react';
import OnlineTestImage from '../../../assets/online-test 1.png';
import CertImage from '../../../assets/certification 1.png';
import ExamImage from '../../../assets/exam 1.png';
function services() {
  return (
    <div>
        <section className='servics'>
            <div className='service_container'>
                <div className='service_block'>
                    <div className='image_wrapper'>
                        <img src={OnlineTestImage} alt='service1'></img>
                    </div>
                    <div className='text_wrapper'>
                    <h2>Learn The Latest Skills</h2>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>
                    </div>
                </div>
                <div className='service_block'>
                    <div className='image_wrapper'>
                        <img src={ExamImage} alt='service1'></img>
                    </div>
                    <div className='text_wrapper'>
                    <h2>Get Ready For a Career</h2>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>
                    </div>
                </div>
                <div className='service_block'>
                    <div className='image_wrapper'>
                        <img src={CertImage} alt='service1'></img>
                    </div>
                    <div className='text_wrapper'>
                    <h2>Earn a Certificate</h2>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default services
