import React from "react";
import FloatingCard from "./FloatingCard";


function DownloadSection() {
  return (
    <div className="down-section-parent">
      <FloatingCard text={<>Revolutionize Waste Management: Download the AI-Powered Waste<br/> Scanner Now!</>} />
      <div className="col">
        <div class="download-content row">Download the app now!</div>
        <div type="button" class="btn-down-main">
        Download for <i class="fa-brands fa-windows"></i>
      </div>
      </div>
      <div id="download-section-page">
        
        </div>
      
    </div>
  );
}

export default DownloadSection;
