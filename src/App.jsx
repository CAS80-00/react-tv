// /**
//  * React TV is an web streaming platform that allows users to browse
//  * through the episodes of a variety of different shows.
//  */
// export default function App() {
//   return (
//     <>
//       <header>
//         <p>React TV</p>
//       </header>
//       <main></main>
//     </>
//   );
// }

import React, { useState } from "react";
import ShowSelection from "./shows/ShowSelection";
import ShowDetails from "./shows/ShowDetails";
// Look closely at your actual folder depth relative to App.jsx for data.js
import { showsData } from "./shows/data";

function App() {
  // Requirement 1 & 2: Set up state for shows array and the selected show
  const [shows] = useState(showsData);
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection
          shows={shows}
          selectedShow={selectedShow} // <-- Pass this new prop down
          setSelectedShow={setSelectedShow}
        />
      </header>
      <main>
        <ShowDetails show={selectedShow} />
      </main>
    </>
  );
}

export default App;
