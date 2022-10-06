import React from "react";
import "../style/viewteam.css";

const ViewTeam = () => {
  return (
    <div className="container-fluid bg-white">
      <h1>Meet Our Team</h1>
      <div className="row" data-aos="flip-up">
          <div className="details" >
            <div className="col-sm-4">
              <img
                src="https://rukminim1.flixcart.com/image/416/416/k7xnukw0/poster/y/n/q/medium-sachin-tendulkar-cricket-team-player-wall-poster-high-original-imafq2mgubpgrfmw.jpeg?q=70"
                alt="sachin"
              />
              <h2>Sachin Tendulkar</h2>
            </div>
            <div className="col-sm-4">
            <img src='https://m.cricbuzz.com/a/img/v1/192x192/i1/c171002/virender-sehwag.jpg' alt='sehvag'/>
              <h2>Virendra Sehvag</h2>
            </div>
            <div className="col-sm-4">
            <img src='https://media.gettyimages.com/photos/yuvraj-singh-poses-during-the-icc-champions-photocall-session-of-the-picture-id90968090?s=612x612' alt='Yuvarj'/>
              <h2>Yuvraj Singh</h2>
            </div>
        </div>
        <div className="details">
            <div className="col-sm-4">
            <img src='https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg' alt='Dhoni'/>
              <h2>M.S. Dhoni</h2>
            </div>
            <div className="col-sm-4">
            <img src='https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg' alt='virat'/>
              <h2>Virat Kohli</h2>
            </div>
            <div className="col-sm-4">
            <img src='https://m.cricbuzz.com/a/img/v1/192x192/i1/c148324/suresh-raina.jpg' alt='raina'/>
              <h2>Suresh Raina</h2>
            </div>
        </div>
        <div className="details">
            <div className="col-sm-4">
            <img src='https://www.cricket.com.au/-/media/Players/Men/International/India/2021%20T20WC/Rohit-Sharma-2122.ashx' alt='rohit'/>
              <h2>Rohit Sharma</h2>
            </div>
            <div className="col-sm-4">
            <img src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/331100/331163.png' alt='sky'/>
              <h2>Surya Kumar Yadav</h2>
            </div>
            <div className="col-sm-4">
            <img src='https://m.cricbuzz.com/a/img/v1/192x192/i1/c170673/kl-rahul.jpg' alt='rahul'/>
              <h2>K.L. Rahul</h2>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTeam;
