import React from "react";
import "./episodes.css";

/** A list of episode names that allows the user to select an episode */
export default function EpisodeList({
  episodes,
  selectedEpisode,
  onEpisodeSelect,
}) {
  // Defensive check: If episodes array is missing or empty, show a fallback message
  if (!episodes || episodes.length === 0) {
    return (
      <div className="episode-list">
        <p>No episodes available.</p>
      </div>
    );
  }

  return (
    <div className="episode-list">
      {episodes.map((episode, index) => {
        // Safe check for selection using names/ids safely
        const isSelected =
          selectedEpisode &&
          selectedEpisode.id === episode.id &&
          selectedEpisode.name === episode.name;

        return (
          <button
            key={`episode-row-${episode.name}-${index}`}
            className={`episode ${isSelected ? "selected" : ""}`}
            onClick={() => onEpisodeSelect(episode)}
          >
            {/* This will display like: "1. Pilot" or "2. The Comeback" */}
            {index + 1}. {episode.name || episode.title}
          </button>
        );
      })}
    </div>
  );
}
