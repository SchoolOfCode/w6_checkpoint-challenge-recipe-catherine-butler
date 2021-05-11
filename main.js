let foodToSearch = null;

function handleRecipeClick() {
  fetchRecipe(foodToSearch);
}

function handleFoodChange() {
  // this funciton needs, to turn the user input into a variable 
  // called "food" to be read by "fetch recipe", does this need to be a readable string  

  foodToSearch = document.querySelector("#food-input").value = text;
  let foodToSearch = food.value;
  return String(food)
}

async function fetchRecipe(food) {
  // this function needs to fetch info from the api which contains the keyword held by "food"
  // and return it as a display in innerHTML
  const response = await fetch ('https://api.edamam.com/search');
  const recipes = await response.json();
  console.log(recipes);
}

fetchRecipe()
