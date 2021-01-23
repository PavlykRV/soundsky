import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import styles from './ArtistCard.css';

const ArtistCard = (props) => {
  const { strArtist, intFormedYear, strArtistThumb, strBiographyEN } =
    props.artist || {};

  return (
    <Card className={styles.root}>
      <CardHeader
        avatar={
          <Avatar aria-label='recipe' className={styles.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title={strArtist}
        subheader={intFormedYear}
      />
      <CardMedia
        className={styles.media}
        image={strArtistThumb || 'https://m.economictimes.com/thumb/msid-73612807,width-1200,height-900,resizemode-4,imgsize-212384/vinyl-records_istock.jpg'}
        title={strArtist}
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {`${strBiographyEN.substr(0, 200)}...`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ArtistCard;
