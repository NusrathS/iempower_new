import React from 'react';
import './OverView.css';

const OverView = () => {
  return (
    <div className="landing-page-container5">
      <h1 className="landing-page-title5">Overview</h1>
      <p className="landing-page-text5">
        Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc<br/>
        vulputate libero et velit interdum, ac aliquet odio mattis.
      </p>
      <div className="content-boxes-container5">
        <div className="content-boxes5">
          <div className="content-box5">
            <h2>Resource Access</h2>
            <p>Jorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero</p>
            <span className="arrow-icon5">↗</span>
          </div>
          <div className="content-box5">
            <h2>Lorem ipsum xem</h2>
            <p>Jorem ipsum dolor sit amet, consectetur <br/>adipiscing elit. Nunc vulputate libero et<br/> velit interdum, ac aliquet odio mattis.</p>
            <span className="arrow-icon5">↗</span>
          </div>
          <div className="content-box5">
            <h2>Ideon deoen re</h2>
            <p>Jorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero</p>
            <span className="arrow-icon5">↗</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;