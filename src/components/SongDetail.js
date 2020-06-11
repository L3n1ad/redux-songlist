import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  console.log(song);
  return <div> SONG DETAIL</div>;
};

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);
