// import "./shows.css";

// /** A navbar that allows users to choose between a list of shows */
// export default function ShowSelection() {
//   return <nav className="shows"></nav>;
// }

import React from "react";

function ShowSelection({ shows, selectedShow, setSelectedShow }) {
  return (
    <nav>
      {shows.map((show, index) => {
        // Check if this specific show is the one the user clicked on
        const isSelected = selectedShow && selectedShow.name === show.name;

        return (
          <span key={show.name}>
            <a
              // If it's selected, append the active utility styling class
              className={`show ${isSelected ? "active" : ""}`}
              onClick={() => setSelectedShow(show)}
            >
              {show.name}
            </a>

            {/* Separator pipe */}
            {index < shows.length - 1 && <span className="separator"> | </span>}
          </span>
        );
      })}
    </nav>
  );
}

export default ShowSelection;
