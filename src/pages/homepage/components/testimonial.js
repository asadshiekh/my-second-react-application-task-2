import React from 'react'



function testimonial() {
  return (
    <div>
      
      <section className='testimonial'>
        <h1>What student’s say</h1>
        <p>Lorem Ipsum is simply dummy text of the printing.</p>

        <div className='testiomials'>
            <div className='service_card'>
                <p>“Teachings of the great explore of truth, 
                the master-builder of human happiness. 
                no one rejects,dislikes, or avoids pleasure 
                itself, pleasure itself”</p>
                <div className='bottom_warpper'>
                    <div className='img_container'>
                        <img src='/' alt='testing'></img>
                    </div>
                    <div className='names'>
                        <p>Finlay Kirk</p>
                        <span>Web Developper</span>
                    </div>
                </div>
            </div>
        </div>
      </section>


    </div>
  )
}

export default testimonial
