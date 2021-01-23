import actionTypes from '../../actions/actionTypes';
import get from 'lodash/get';

const initialState = {};

const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ARTIST.DATA_CLEAR:
      return {};
    case actionTypes.ARTIST.FETCH_SUCCESS:
      const artists = get(action, 'payload.artists', []);

      return artists[0] ? {...state, ...artists[0]} : state
    case actionTypes.ARTIST.FETCH_FAILURE:
    default:
      return state;
  }
};

export default artistReducer;
