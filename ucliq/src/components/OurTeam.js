import React from 'react';
import '../style/ourteam.css';
import { useNavigate } from 'react-router-dom';

const OurTeam = () => {
    const navigate=useNavigate()
  return (
      <div className="container-fluid bg-white team">
      <h1>Our Team</h1>
      <div className="row" data-aos="flip-left">
        <div className="col-sm-3">
          <div className="line1Info">
            <h2>Sachin Tendulkar</h2>
            <span>Right Hand Batsman</span>
            <a href="abc"  target="_blank" rel="noreferrer">
            <i class="fa fa-linkedin" style={{fontSize:'48px',color:'white', backgroundColor:'blue', padding:'5px'}}></i>
              </a>
           </div>
        </div>
        <div className="col-sm-3 image1">
            <div>
            <img src='https://rukminim1.flixcart.com/image/416/416/k7xnukw0/poster/y/n/q/medium-sachin-tendulkar-cricket-team-player-wall-poster-high-original-imafq2mgubpgrfmw.jpeg?q=70' alt='sachin'/>
            </div> 
        </div>
        <div className="col-sm-3">
          <div className="line1Info">
            <h2>Virendra Sehvag</h2>
            <span>Right Hand Batsman</span>
            <a href="abc"  target="_blank" rel="noreferrer">
            <i class="fa fa-linkedin" style={{fontSize:'48px',color:'white', backgroundColor:'blue', padding:'5px'}}></i>
              </a>
           </div>
        </div>
        <div className="col-sm-3 image1">
            <div>
            <img src='https://m.cricbuzz.com/a/img/v1/192x192/i1/c171002/virender-sehwag.jpg' alt='sehvag'/>
            </div> 
        </div>
    </div>

    {/* ........................................................ */}

    <div className="row">
        <div className="col-sm-3 image1">
            <div>
            <img src='https://media.gettyimages.com/photos/yuvraj-singh-poses-during-the-icc-champions-photocall-session-of-the-picture-id90968090?s=612x612' alt='Yuvarj'/>
            </div> 
        </div>
        <div className="col-sm-3">
           <div className="line1Info">
            <h2>Yuvraj Singh</h2>
            <span>Left Hand Batsman</span>
            <a href="abc"  target="_blank" rel="noreferrer">
            <i class="fa fa-linkedin" style={{fontSize:'48px',color:'white', backgroundColor:'blue', padding:'5px'}}></i>
              </a>
           </div>
        </div>   
        <div className="col-sm-3 image1">
            <div>
            <img src='https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg' alt='Dhoni'/>
            </div> 
        </div>
        <div className="col-sm-3">
           <div className="line1Info">
            <h2>M.S. Dhoni</h2>
            <span>Right Hand Batsman</span>
            <a href="abc"  target="_blank" rel="noreferrer">
            <i class="fa fa-linkedin" style={{fontSize:'48px',color:'white', backgroundColor:'blue', padding:'5px'}}></i>
              </a>
           </div>
        </div>   
    </div>


    {/* ......................................................................... */}

    <div className="row">
        <div className="col-sm-3">
          <div className="line1Info">
            <h2>Virat Kohli</h2>
            <span>Right Hand Batsman</span>
            <a href="abc"  target="_blank" rel="noreferrer">
            <i class="fa fa-linkedin" style={{fontSize:'48px',color:'white', backgroundColor:'blue', padding:'5px'}}></i>
              </a>
           </div>
        </div>
        <div className="col-sm-3 image1">
            <div>
            <img src='https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg' alt='virat'/>
            </div> 
        </div>
        <div className="col-sm-3">
          <div className="line1Info">
            <h2>Suresh Raina</h2>
            <span>Left Hand Batsman</span>
            <a href="abc"  target="_blank" rel="noreferrer">
            <i class="fa fa-linkedin" style={{fontSize:'48px',color:'white', backgroundColor:'blue', padding:'5px'}}></i>
              </a>
           </div>
        </div>
        <div className="col-sm-3 image1">
            <div>
            <img src='https://m.cricbuzz.com/a/img/v1/192x192/i1/c148324/suresh-raina.jpg' alt='raina'/>
            </div> 
        </div>
    </div><br/>
    <div className='btn' onClick={()=>navigate('/our-team')}><span>View All</span></div>
  </div>
  )
}

export default OurTeam;
