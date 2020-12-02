import React from 'react';
import { makeStyles } from '@material-ui/styles'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3),
  },
  media: {
    height: 140,
    width: 250
  },
  title: {
    color: theme.palette.primary.main
  }
}))


export const Home = () => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <Box>
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            Haircut Set 2.0
          </Typography> */}
          <Typography variant="body2" color="textSecondary" component="p">
            <iframe
              src="https://open.spotify.com/embed/playlist/3DE4LkGTSjYprHjfofrMQR"
              width="100%"
              height="380"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </Typography>
        </CardContent>
      </Box>
    </Card>
  )
}

export default Home