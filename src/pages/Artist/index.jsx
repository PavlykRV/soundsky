import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  Grid,
  CircularProgress,
  Typography,
  IconButton,
} from '@material-ui/core';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LanguageIcon from '@material-ui/icons/Language';
import { getArtistDetails } from '../../redux/actions/artist';
import { useArtistSelect } from '../../selectors/common';
import InfoRow from './components/InfoRow';
import styles from './Artist.module.scss';

const ArtistPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const artist = useArtistSelect();

  const { id } = params;

  console.log('location:', artist);
  useEffect(() => {
    dispatch(getArtistDetails(id));
  }, [id, dispatch]);

  return (
    <Grid container spacing={3} className={styles.gridContainer}>
      {artist ? (
        <Fragment>
          <Grid item xs={12}>
            <Typography variant='h3' className={styles.title}>
              {artist.strArtist}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <div className={styles.thumbWrapper}>
              <img src={artist.strArtistThumb || ''} alt={artist.strArtist} />
            </div>
          </Grid>
          <Grid item xs={8}>
            <InfoRow label='Formed year' value={artist.intFormedYear} />
            <InfoRow label='Genre' value={artist.strGenre} />
            <InfoRow label='Country' value={artist.strCountry} />
            <InfoRow label='Mood' value={artist.strMood} />
            <div className={styles.links}>
              {artist.strFacebook && (
                <IconButton
                  edge='start'
                  color='primary'
                  href={artist.strFacebook}
                >
                  <FacebookIcon />
                </IconButton>
              )}
              {artist.strTwitter && (
                <IconButton
                  edge='start'
                  color='primary'
                  href={artist.strTwitter}
                >
                  <TwitterIcon />
                </IconButton>
              )}
              {artist.strWebsite && (
                <IconButton
                  edge='start'
                  color='primary'
                  href={artist.strWebsite}
                >
                  <LanguageIcon />
                </IconButton>
              )}
            </div>
          </Grid>
          <Grid item xs={12}>
            {artist.strBiographyEN}
          </Grid>
        </Fragment>
      ) : (
        <Grid item xs={12}>
          <CircularProgress />
        </Grid>
      )}
    </Grid>
  );
};

export default ArtistPage;
