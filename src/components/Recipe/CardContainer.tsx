import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
  },
  media: {
    height: 140,
    width: 250,
  },
  title: {
    color: theme.palette.primary.main,
  },
}));

export const CardContainer = (props) => {
  const classes = useStyles();
  const { recipeData } = props;

  return (
    <Card>
      {recipeData && (
        <>
          <CardHeader title={recipeData.strDrink} />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.title}
            >
              {recipeData.strInstructions}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
            ></Typography>
          </CardContent>
        </>
      )}
    </Card>
  );
};
export default CardContainer;
