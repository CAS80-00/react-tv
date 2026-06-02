// import "./shows.css";

// /** Allows users to browse through the episodes of the given show */
// export default function ShowDetails() {
//   return <div className="show-details"></div>;
// }

import React, { useState, useEffect } from "react";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";

function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  // Reset the active episode view whenever the user switches to a different show
  useEffect(() => {
    setSelectedEpisode(null);
  }, [show]);

  // If no show is selected yet from the navbar
  if (!show) {
    return (
      <div className="no-show-selected">
        <h2>
          Please select a show from the navigation menu above to start watching!
        </h2>
      </div>
    );
  }

  return (
    <div className="show-details">
      <h2>{show.name}</h2>

      {/* CRITICAL: This exact div wrapper and className is what 
        triggers the CSS grid to split your episodes list (left) 
        and your episode details panel (right)
      */}
      <div className="show-content">
        <EpisodeList
          episodes={show.episodes}
          onEpisodeSelect={setSelectedEpisode}
          selectedEpisode={selectedEpisode}
        />
        <EpisodeDetails episode={selectedEpisode} />
      </div>
    </div>
  );
}

export default ShowDetails;
