// do i need a const for buttons at the top here or fine within the function? 
const YOUR_APP_ID = "6e1b52aa"
const YOUR_APP_KEY = "0c394ced20e27d833956caca922fc1fd"
let foodToSearch = null;
let requestUrl = `https://api.edamam.com/search?q=${foodToSearch}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`

function handleRecipeClick() {
  // fetchRecipe(foodToSearch);
  handleFoodChange();
}

function handleFoodChange() {
  // this funciton needs, to turn the user input into a variable 
  // called "food" to be read by "fetch recipe", does this need to be a readable string  
  foodToSearch = document.querySelector("#food-input").value;  
  fetchRecipe(foodToSearch);
}

async function fetchRecipe(food) {
  // this function needs to fetch info from the api which contains the keyword held by "food"
  // display it in an HTML List 
  // console.log(foodToSearch);
  const response = await fetch (`https://api.edamam.com/search?q=${food}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`);
  const recipes = await response.json();
  console.log(recipes);
  displayRecipes(recipes)
}
 fetchRecipe()

 function displayRecipes (recipe) {
  let firstRecipe = document.querySelector("#recipe-label"); 
 }