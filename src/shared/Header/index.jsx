import React, { useState } from 'react';
import get from 'lodash/get';
import { useHistory } from "react-router-dom";
import debounce from 'lodash/debounce'
import { useDispatch } from 'react-redux';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
} from '@material-ui/core';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import SearchIcon from '@material-ui/icons/Search';
import { getArtistsList } from '../../redux/actions/artists';
import styles from './Header.module.scss';

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [query, setQuery] = useState('');
  const handleChange = (event) => {
    event.preventDefault();
    const searchQuery = get(event, 'target.value', '');
    setQuery(searchQuery);
  };

  const handleSearch = () => {
    dispatch(getArtistsList(query));
    history.push('/');
  };

  const debouncedSearch = debounce(handleSearch, 500)
  return (
    <AppBar position='static' className={styles.root}>
      <Toolbar className={styles.toolbar}>
        <IconButton
          edge='start'
          className={styles.menuButton}
          color='inherit'
          aria-label='menu'
        >
          <MusicNoteIcon />
        </IconButton>
        <Typography variant='h6' className={styles.title}>
          SoundSky
        </Typography>
        <div className={styles.search}>
          <InputBase
            placeholder='Search…'
            onChange={handleChange}
            classes={{
              root: styles.inputRoot,
              input: styles.inputInput,
            }}
            onKeyUp={debouncedSearch}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <IconButton className={styles.searchButton} onClick={handleSearch}>
          <SearchIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
