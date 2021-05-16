// do i need a const for buttons at the top here or fine within the function? 
// useful demo https://developer.edamam.com/edamam-recipe-api-demo to inspect?

const YOUR_APP_ID = "6e1b52aa"
const YOUR_APP_KEY = "0c394ced20e27d833956caca922fc1fd"
// let recipeLabel = document.querySelector("#recipe-label")
let foodToSearch = null;
// let requestUrl = `https://api.edamam.com/search?q=${foodToSearch}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`

function handleRecipeClick() {
  fetchRecipe(foodToSearch).then(displayRecipe);
}

function handleFoodChange() {
  // does this funciton need, to turn the user input into a variable called food? 
  foodToSearch = document.querySelector("#food-input").value;  
  // fetchRecipe(foodToSearch);
}

async function fetchRecipe(food) {
  // this function needs to fetch info from the api which contains the keyword held by "food"
  // display it in an HTML List 
  // console.log(foodToSearch);
  const response = await fetch (`https://api.edamam.com/search?q=${food}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`);
  let recipe = await response.json();
  console.log(recipe);
  return recipe;
}

function displayRecipe (data) {
  // Diplay results from API search in DOM 
  const recipeList = document.getElementById("recipe-list");
  recipeList.innerHTML = data.count; 
  document.getElementById("recipe-list").style.visibility = "hidden";
  
  let hits = data.hits;
  const recipe =  document.getElementById("cards-section");
  recipe.innerHTML = "";

  // Write a For loop to limit the amount of recipes returned by the request  
  for (let i = 0; i < 6; i++) {
    const div = document.createElement("div");
    recipe.appendChild(div);
    // create the image element, source from API array and attach to div child 
    const image = document.createElement("img");
    image.src = hits[i].recipe.image;
    const divImg = document.createElement("div");
    divImg.appendChild(image);
    // create the href
    const a = document.createElement("a");
    a.href = hits[i].recipe.url;
    a.text = hits[i].recipe.label;
    divImg.appendChild(a);

    const ul = document.createElement("ul");
    let ingredientLines = hits[i].recipe.ingredientLines;
    for (let i = 0; i < ingredientLines.length; i++) {
      const li = document.createElement("li");
      li.innerHTML = ingredientLines[i];
      ul.appendChild(li);
    };

    // appending the elements
    const info = document.createElement("div");
    info.appendChild(ul);
    recipe.appendChild(divImg);
    recipe.appendChild(info);

    image.classList.add("card-img");
    a.classList.add("r-link");
    recipe.classList.add("recipe-section");
    ul.classList.add("list-ingredient");
  }
};