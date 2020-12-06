import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import getRandomRecipe from "../services/getRandomRecipe";
import CardContainer from "./Recipe/CardContainer";
import Skeleton from "@material-ui/lab/Skeleton";
import getRecipeOTD from "../services/getRecipeOTD";

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

export const Home = () => {
  const classes = useStyles();

  const [randomRecipe, setRandomRecipe] = useState<any>(null);
  const [recipeOTD, setRecipeOTD] = useState<any>(null);

  function loadNewRecipe() {
    getRandomRecipe(setRandomRecipe);
    getRecipeOTD(setRecipeOTD);
  }

  useEffect(() => {
    loadNewRecipe();
  }, []);

  return (
    <>
      <CardContainer recipeData={randomRecipe && randomRecipe} />
      <CardContainer recipeData={recipeOTD && recipeOTD} />
    </>
  );
};

export default Home;
