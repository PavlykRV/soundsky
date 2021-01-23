import actionTypes from '../../actions/actionTypes';
import get from 'lodash/get';
const initialState = [];

const artistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ARTISTS.FETCH_SUCCESS:
      const artists = get(action, 'payload.artists', []);

      return artists ? [...artists] : [];
    case actionTypes.ARTISTS.FETCH_FAILURE:
    default:
      return state;
  }
};

export default artistsReducer;
