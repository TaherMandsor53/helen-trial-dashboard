import React from 'react';
import centerImg from '../assets/images/center_image.png';
import DonutComponent from './common-components/DonutComponent';

export default function Dashboard() {
  return (
    <div>
      <div className="circle-container">
        <div className="center-content">
          <img src={centerImg} alt="Center Image" className="center-img " />
        </div>

        <DonutComponent
          buttonText="More"
          title={"<span class='text1'>My</span> <span class='text2'>COURSES</span>"}
          //   description="my course description"
          customClass="donut-part-1"
          customInnerClass="inner-content-1"
        />

        <DonutComponent
          buttonText="More"
          title={"<div class='text1'>Useful</div> <div class='text2'>RESOURCES</div>"}
          //   description="Useful RESOURCES description"
          customClass="donut-part-2"
          customInnerClass="inner-content-2"
        />

        <DonutComponent
          buttonText="More"
          title={"<div class='text1'>1:1</div> <div class='text2'>COACHING</div>"}
          //   description="1:1 COACHING description"
          customClass="donut-part-3"
          customInnerClass="inner-content-3"
        />

        <DonutComponent
          buttonText="More"
          title="CHALLENGE"
          //   description="CHALLENGE description"
          customClass="donut-part-4"
          customInnerClass="inner-content-4"
        />

        <DonutComponent
          buttonText="More"
          title="SUPPORT"
          //   description="SUPPORT description"
          customClass="donut-part-5"
          customInnerClass="inner-content-5"
        />

        <DonutComponent
          buttonText="More"
          title={"<div class='text1'>Upcoming</div> <div class='text2'>WORKSHOPS</div>"}
          //   description="Upcoming WORKSHOPS description"
          customClass="donut-part-6"
          customInnerClass="inner-content-6"
        />

        <DonutComponent
          buttonText="More"
          title={"<div class='text1'>Upcoming</div> <div class='text2'>EVENTS</div>"}
          //   description="Upcoming EVENTS description"
          customClass="donut-part-7"
          customInnerClass="inner-content-7"
        />
      </div>
    </div>
  );
}
