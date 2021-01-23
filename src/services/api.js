import axios from 'axios';
const baseUrl = 'https://www.theaudiodb.com/api/v1/json/1/';

// https://www.theaudiodb.com/api_guide.php

const URL_CONFIG = {
  ARTIST: `${baseUrl}artist.php?i=`,
  ARTISTS: `${baseUrl}search.php?s=`,
};

const options = {
  headers: {
    'Content-Type': 'application/json',
  },

  crossdomain: true,
};

export const getArtistsData = (query) => axios.get(`${URL_CONFIG.ARTISTS}${query}`, options);

export const getArtistData = (id) => axios.get(`${URL_CONFIG.ARTIST}${id}`, options);
