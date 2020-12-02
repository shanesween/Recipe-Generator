import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import getRecipe from '../services/getRecipe';


// const useStyles = makeStyles(theme => ({
//   root: {
//     margin: theme.spacing(3),
//   },
//   media: {
//     height: 140,
//     width: 250
//   },
//   title: {
//     color: theme.palette.primary.main
//   }
// }))



export const Home = () => {
  // const classes = useStyles()

  const [recipeData, setRecipeData] = useState<any>(null);
  
  function loadNewRecipe() {
    getRecipe()
  }

  useEffect(() => {
loadNewRecipe();
  }, [])

  return (
    <Card >
      <Box>
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            Haircut Set 2.0
          </Typography> */}
          <Typography variant="body2" color="textSecondary" component="p">

          </Typography>
        </CardContent>
      </Box>
    </Card>
  )
}

export default Home