import React from "react";
import Feature from "./Feature";
import FloatingCard from "./FloatingCard";

function FeatureQuestionSection() {
  return (
    <section id="feature-question-section">
      <FloatingCard
        text="Things we serve"
      />
      <div className="features-div row">
        <Feature
          icon={<i class="fa-solid fa-trash-can-arrow-up feature-icon"></i>}
          heading="Discover Nearby Waste"
          para="Explore garbage and waste locations near you with ease."
        />
        <Feature
          icon={<i class="fa-solid fa-upload feature-icon"></i>}
          heading={
            <>
              User-Driven <br />
              Data
            </>
          }
          para="Empower users to upload waste details for a cleaner community."
        />
        <Feature
          icon={<i class="fa-solid fa-newspaper feature-icon"></i>}
          heading={
            <>
              Updates and <br />
              News
            </>
          }
          para="Stay informed with the latest articles and news on waste management."
        />
        <Feature
          icon={<i class="fa-solid fa-filter feature-icon"></i>}
          heading="Intelligent Waste Scanner"
          para="Harness the power of AI to identify and categorize various waste
          materials."
        />
      </div>
    </section>
  );
}

export default FeatureQuestionSection;
