import React from 'react';
import coverImage from "../../assets/profilepic/profilePic.png";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img src={coverImage} className="my-1" style={{ width: "100%" }} alt="AboutMeImg" />
      <p className="my-5">Attended the University of Texas at Austin where I earned a BSA in Biology as well as certificates in both Business and Health Information Technology. In addition, I’m currently enrolled in UT Austin coding bootcamp working to be a full stack web developer. Will be earning a certificate from this bootcamp in October 2020.</p>
      <p className="my-5">I currently work as a Business Analyst  (BA) Consultant for eClinicalWorks. Responsabilities include implementing medical practices of various sizes with eCW Electronic Health Record (EHR) and Practice Management (PM) system from project initiation to application deployment. I also help optimize practices who typically have been live with eCW EHR & PM for a few years. I’ve worked for this company since 2017, as a software trainer for the first 8 months, and now as a BA.</p>
      <p className="my-5">In my free time, I enjoy playing soccer throughout the year in competitive leagues, running, and hiking the trails in Austin. I also like to travel regularly to places like Puerto Vallarta, Mexico for vacation, and to visit family in different parts in Mexico and California.</p>
    </section>
  );
}

export default About;