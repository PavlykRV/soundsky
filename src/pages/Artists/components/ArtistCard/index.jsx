import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import styles from './ArtistCard.module.scss';

const ArtistCard = (props) => {
  const { strArtist, intFormedYear, strArtistThumb, strGenre, strCountry} =
    props.artist || {};

  return (
    <Card className={styles.root}>
      <CardHeader
        avatar={
          <Avatar aria-label='recipe' className={styles.avatar}>
            {strArtist.substr(0,1)}
          </Avatar>
        }
        title={strArtist}
        subheader={`${intFormedYear} ${strGenre} ${strCountry}`}
      />
      <CardMedia
        className={styles.media}
        image={strArtistThumb || 'https://m.economictimes.com/thumb/msid-73612807,width-1200,height-900,resizemode-4,imgsize-212384/vinyl-records_istock.jpg'}
        title={strArtist}
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ArtistCard;
