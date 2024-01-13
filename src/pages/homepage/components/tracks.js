import React from 'react';
import TrackImage1 from '../../../assets/little-girl-participating-online-classes 1.png';
import TrackImage2 from '../../../assets/image 7.png';
import TrackImage3 from '../../../assets/image 6.png';
 import Star from '../../../assets/star.svg';
 import UnStar from '../../../assets/unstar.svg';
 import VideoImage from '../../../assets/video-svgrepo-com 1.svg';
 import TimeImage from '../../../assets/time-svgrepo-com 1.svg';
 import DownloadImage from '../../../assets/download-svgrepo-com 1.svg';
function tracks() {
  return (
    <div>
      <section className='tracks'>
        <div className='sec_heading'>
            <h2>Our Tracks</h2>
            <p>Lorem Ipsum is simply dummy text of the printing.</p>
        </div>
        <div className='wrapper_services'>
            <div className='single_track'>
                <div className='image_wrapper'>
                    <img src={TrackImage1} alt='tracks'></img>
                </div>
                <div className='track_content'>
                    <div className='track_rating'>
                        <span>UI/UX Design</span>
                        <div className='star'>
                        <img src={Star} alt='tracks start'></img>
                        <img src={Star} alt='tracks start'></img>
                        <img src={Star} alt='tracks start'></img>
                        <img src={Star} alt='tracks start'></img>
                        <img src={UnStar} alt='tracks unstart'></img>
                        </div>
                    </div>
                    <div className='track_price'>
                    <h2>UI/UX Design for Beginners</h2>
                    <p>$98</p>
                    </div>
                    <div className='border_dotted'></div>
                    <ul className='tracks_features'>
                        <li><img src={VideoImage} alt='vide'></img><span>22hr 30min</span></li>
                        <li><img src={DownloadImage} alt='vide'></img><span>34 Courses</span></li>
                        <li><img src={TimeImage} alt='vide'></img><span>250 Sales</span></li>
                    </ul>
                    <div className='btn_wrapper'>
                        <button className='track_btn'>Join Course</button>
                    </div>
                 </div>
            </div>
            <div className='single_track'>
                <div className='image_wrapper'>
                    <img src={TrackImage2} alt='tracks'></img>
                </div>
                <div className='track_content'>
                    <div className='track_rating'>
                        <span>UI/UX Design</span>
                        <div className='star'>
                        <img src={Star} alt='tracks start'></img>
                        <img src={Star} alt='tracks start'></img>
                        <img src={Star} alt='tracks start'></img>
                        <img src={Star} alt='tracks start'></img>
                        <img src={UnStar} alt='tracks unstart'></img>
                        </div>
                    </div>
                    <div className='track_price'>
                    <h2>UI/UX Design for Beginners</h2>
                    <p>$98</p>
                    </div>
                    <div className='border_dotted'></div>
                    <ul className='tracks_features'>
                        <li><img src={VideoImage} alt='vide'></img><span>22hr 30min</span></li>
                        <li><img src={DownloadImage} alt='vide'></img><span>34 Courses</span></li>
                        <li><img src={TimeImage} alt='vide'></img><span>250 Sales</span></li>
                    </ul>
                    <div className='btn_wrapper'>
                        <button className='track_btn'>Join Course</button>
                    </div>
                 </div>
            </div>
            <div className='single_track'>
                <div className='image_wrapper'>
                    <img src={TrackImage3} alt='tracks'></img>
                </div>
                <div className='track_content'>
                    <div className='track_rating'>
                        <span>UI/UX Design</span>
                        <div className='star'>
                        <img src={Star} alt='tracks start'></img>
                        <img src={Star} alt='tracks start'></img>
                        <img src={Star} alt='tracks start'></img>
                        <img src={Star} alt='tracks start'></img>
                        <img src={UnStar} alt='tracks unstart'></img>
                        </div>
                    </div>
                    <div className='track_price'>
                    <h2>UI/UX Design for Beginners</h2>
                    <p>$98</p>
                    </div>
                    <div className='border_dotted'></div>
                    <ul className='tracks_features'>
                        <li><img src={VideoImage} alt='vide'></img><span>22hr 30min</span></li>
                        <li><img src={DownloadImage} alt='vide'></img><span>34 Courses</span></li>
                        <li><img src={TimeImage} alt='vide'></img><span>250 Sales</span></li>
                    </ul>
                    <div className='btn_wrapper'>
                        <button className='track_btn'>Join Course</button>
                    </div>
                 </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default tracks
