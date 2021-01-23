import { combineReducers } from 'redux';
import artists from './artists';
import artist from './artist';

export default combineReducers({
  artist,
  artists
});