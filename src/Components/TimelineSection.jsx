import React from "react";
import TimelineImage from "../images/img6.png";
import Earth from "../images/pri@4x.png";

function TimelineSection() {
  return (
    <section id="timeline-section">
        
        <h1 className="timeline-heading">Do you know the expected waste generation <br/> by 2030 and 2050?</h1>
        <p className="unit-para">(Unit: Metric Ton)</p>
      <div class="image-container">
        
        <img
          className="image-timeline"
          src={TimelineImage}
          alt="timeline_img "
        />
        <img
          className="image-earth"
          src={Earth}
          alt="timeline_img "
        />
      </div>
      <p className="learn-more-p-tag"><a href="https://www.statista.com/statistics/916625/global-generation-of-municipal-solid-waste-forecast/" class="timeline-learn-more link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Learn more...</a></p>

    </section>
  );
}

export default TimelineSection;
