export default function reducer(state, action) {
    switch (action.type) {
      case 'FETCH_DISC_SELECT':
        return { ...state, discSelect: action.payload };
      case 'FETCH_SONGS_ALBUM':
        return { ...state, songsAlbum: action.payload };
      default:
        return state;
    }
  }
  