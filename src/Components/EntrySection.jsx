import React from "react";
import EntryTitle from "./EntryTitle";
import EntryDownload from "./EntryDownload";

function EntrySection() {
  return (
    <section class="entry-section">
      <div class="entry-content">
        <div className="row d-flex p-2">
          <EntryTitle/>
          <EntryDownload/>
        </div>
      </div>
    </section>
  );
}

export default EntrySection;