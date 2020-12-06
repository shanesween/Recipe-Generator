function getRecipeOTD(setRecipe: Function) {

  let date = 11000
  setInterval(function () {
    date++
    if (date === 11065) {
      date = 11000
    }
  }, 1000 * 60 * 60 * 24)


  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${date}`)
    .then((result) => result.json())
    .then((data) => setRecipe(data.drinks[0]))
    .catch((error) => console.log(error));
}
export default getRecipeOTD;
