import actionTypes from './actionTypes';
import { getArtistsData } from '../../services/api'

export const artistsFetchSuccess = (payload) => ({
  type: actionTypes.ARTISTS.FETCH_SUCCESS,
  payload
});

export const artistsFetchFailed = () => ({
  type: actionTypes.ARTISTS.FETCH_FAILURE,
});

export const artistsDataClear = () => ({
  type: actionTypes.ARTISTS.DATA_CLEAR
});

export const getArtistsList = (query) => {
  return (dispatch) => {
    dispatch(artistsDataClear());

    getArtistsData(query)
      .then((response) => {
        if (response.data) {
          dispatch(artistsFetchSuccess(response.data))
        }
      })
      .catch((error) => {
        console.error('Artist data fetch failed: ', error)
        dispatch(artistsFetchFailed())
      })
  }
};
