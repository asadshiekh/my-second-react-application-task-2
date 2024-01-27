import React from 'react';
import Banner from './banner';
import Services from './services';
import Tracks from './tracks';
import Banner2 from './banner2';
// import Testimonial from './testimonial';
function index() {
  return (
    <div>
      <Banner/>
      <Services/>
      <Tracks/>
      <Banner2></Banner2>
      {/* <Testimonial/> */}
    </div>
  )
}

export default index
