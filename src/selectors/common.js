import get from 'lodash/get';
import { useSelector } from 'react-redux';

export const useArtistsSelect = () =>
  useSelector((state) => get(state, 'artists', []));

export const useArtistSelect = () =>
  useSelector((state) => get(state, 'artist', {}));
