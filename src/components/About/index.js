import React from 'react';
import coverImage from "../../assets/profilepic/profilePic.png";

function About() {
  return (
    <section>
      <h1 id="about">About Me</h1>
      <img src={coverImage} className="my-1" style={{ width: "100%" }} alt="AboutMeImg" />
      <p className="my-5">I attended the University of Texas at Austin where I earned a BSA in Biology, as well as certificates in both Business and Health Information Technology. Additionally, I completed UT Austin's full stack web development bootcamp, earning a certificate in September 2020.</p>
      <p className="my-5">I currently work as a Business Analyst (BA) Consultant for eClinicalWorks. I’ve worked for this company since 2017, beginning as a software trainer. As a BA, my responsibilities include implementing medical practices of various sizes with eCW's Electronic Health Record (EHR) and Practice Management (PM) system from project initiation to application deployment. I also help optimize practices who typically have been live with eCW EHR & PM for a few years.</p>
      <p className="my-5">In my free time, I enjoy playing soccer throughout the year in competitive leagues, running, and hiking the trails in Austin. I also like to travel to beach destinations like Puerto Vallarta, Mexico.</p>
    </section>
  );
}

export default About;