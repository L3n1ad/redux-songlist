// Action creator

// named export to export many different functions
export const selectSong = (song) => {
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
