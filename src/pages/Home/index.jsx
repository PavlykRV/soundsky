import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import debounce from 'lodash/debounce'
import get from 'lodash/get';
import Input from '@material-ui/core/Input';
import ArtistCard from './components/ArtistCard';
import { getArtistsList } from '../../redux/actions/artists';
import { useArtistsSelect } from '../../selectors/common';

const HomePage = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const artists = useArtistsSelect();

  const handleChange = (event) => {
    event.preventDefault();
    const searchQuery = get(event, 'target.value', '');
    setQuery(searchQuery);
  };

  const handleSearch = () => {
    dispatch(getArtistsList(query));
  };

  // const debouncedSearch = debounce(handleSearch, 500)
  return (
    <div>
      <h1>Home page</h1>
      <Input
        placeholder='Placeholder'
        onChange={handleChange}
        // onKeyUp={debouncedSearch}
        inputProps={{ 'aria-label': 'description' }}
      />
      <button onClick={handleSearch}>Search</button>

      {artists.map((artist) => {
        return <ArtistCard key={artist.idArtist} artist={artist} />;
      })}
    </div>
  );
};

export default HomePage;
