import React from 'react';
import { Link } from 'react-router-dom';

import { Grid } from '@material-ui/core';
import ArtistCard from './components/ArtistCard';
import { useArtistsSelect } from '../../selectors/common';

import styles from './Artists.module.scss';

const Artists = () => {
  const artists = useArtistsSelect();

  return (
    <div>
      {artists.length > 0 ? (
        <Grid container spacing={3} className={styles.gridContainer}>
          {artists.map((artist) => {
            return (
              <Grid
                item
                key={artist.idArtist}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                justify='center'
              >
                <Link to={artist.idArtist} className={styles.link}>
                  <ArtistCard artist={artist} />
                </Link>
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <div>Sorry, nothing to display</div>
      )}
    </div>
  );
};

export default Artists;
