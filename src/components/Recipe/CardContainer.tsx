import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
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
  table: {
    minWidth: 200,
  },
}));

export const CardContainer = (props) => {
  const classes = useStyles();
  const { recipeData } = props;
  console.log(recipeData);

  return (
    <Card className={classes.root}>
      {recipeData && (
        <>
          <CardHeader title={recipeData.strDrink} />
          <CardContent>
            <CardMedia
              component="img"
              title="Recipe Image"
              alt="Recipe Image"
              height="360"
              image={recipeData.strDrinkThumb}
            />
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Ingredient</TableCell>
                    <TableCell align="right">#</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[...Array(15)].map((_, item) => {
                    const ingredient = recipeData[`strIngredient${item + 1}`];
                    const amount = recipeData[`strMeasure${item + 1}`];
                    return ingredient ? (
                      <TableRow>
                        <TableCell>{ingredient}</TableCell>
                        <TableCell>{amount}</TableCell>
                      </TableRow>
                    ) : null;
                  })}
                </TableBody>
              </Table>
            </TableContainer>

            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.title}
            ></Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {recipeData.strInstructions}
            </Typography>
          </CardContent>
        </>
      )}
    </Card>
  );
};
export default CardContainer;
