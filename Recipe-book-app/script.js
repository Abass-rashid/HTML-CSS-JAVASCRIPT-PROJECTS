const API_KEY = " 0fa7d09cfc5c466fb8498e48d965fd01"

const recipeList = document.getElementById("recipe-list")

function displayRecipes(recipes){
  recipeList.innerHTML = "";
  recipes.forEach(recipe=> {
  const recipeItem = document.createElement("li");
  recipeItem.classList.add("recipe-item");

 
  const recipeImage = document.createElement("img");
  recipeImage.src = recipe.image;
  recipeImage.alt = "recipe image"
  recipeItem.appendChild(recipeImage)
  
  recipeList.appendChild(recipeItem);
  });
}
async function getRecipes() {
const respose = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)
const data = await respose.json()

return data.recipes
}


async function init() {

 const recipes = await getRecipes()
 displayRecipes(recipes)
}

init()