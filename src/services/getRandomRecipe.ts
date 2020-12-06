function getRandomRecipe(setRecipe: Function) {
    return fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then((result => result.json()))
        .then((data) =>
            setRecipe(data.drinks[0]

            ))
        .catch((error) => console.log(error))
}
export default getRandomRecipe 