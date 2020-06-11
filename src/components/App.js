// import default export
import React from "react";
// import a named export
// import { selectSong } from '../actions';
import SongList from "./SongList";

const App = () => {
  return (
    <div>
      <SongList />
    </div>
  );
};

export default App;
