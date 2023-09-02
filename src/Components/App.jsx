import React from "react";
import Navbar from "./Navbar";
import EntrySection from "./EntrySection";
import TimelineSection from "./TimelineSection";
import '../index.css';
import FeatureQuestionSection from "./FeatureQuestionSection";
import DownloadSection from "./DownloadSection";
import MapMarker from "./MapMarker";

function App() {
  return (
    <div>
      <Navbar />
      <EntrySection />
      <FeatureQuestionSection />
      <TimelineSection/>
      <DownloadSection/>
      <MapMarker />
    </div>
  );
}
export default App;
