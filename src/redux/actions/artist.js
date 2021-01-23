import actionTypes from './actionTypes';
import { getArtistData } from '../../services/api'

export const artistFetchSuccess = (payload) => ({
  type: actionTypes.ARTIST.FETCH_SUCCESS,
  payload
});

export const artistFetchFailed = () => ({
  type: actionTypes.ARTIST.FETCH_FAILURE,
});

export const artistDataClear = () => ({
  type: actionTypes.ARTIST.DATA_CLEAR
});

export const getArtistDetails = (id) => {
  return (dispatch) => {
    dispatch(artistDataClear());

    getArtistData(id)
      .then((response) => {
        if (response.data) {
          dispatch(artistFetchSuccess(response.data))
        }
      })
      .catch((error) => {
        console.error('Artist data fetch failed: ', error)
        dispatch(artistFetchFailed())
      })
  }
};
