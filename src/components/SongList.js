import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

const SongList = ({ songs, selectSong }) => {
  function renderList() {
    return songs.map((song, index) => {
      return (
        <div className="item" key={index}>
          <div className="right floated content">
            <button
              onClick={() => selectSong(song)}
              className="ui button primary"
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  return <div className="ui divided list">{renderList()}</div>;
};

// it's the convention to call it this way
// the function will get our redux states to turn it into props we can use in our component
const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, {
  selectSong: selectSong,
})(SongList);
