import React from "react"
import List from "./List"
import Recipe from "./Recipe"

export default function Main(){
const [ingList,setIngList]=React.useState([])

function addToList(formData){
    
    const ingredient=formData.get("ingredient");
if(ingredient!="")
    setIngList([...ingList,ingredient])    
   
}
    var readyList=ingList.map(ing=>(
        <li>{ing}</li>  
    ))
    const [showRecipe,setShowRecipe]=React.useState(false)
function ShowRecipeFunc() {
    setShowRecipe(prev=>!prev)
}
   return(
<main>
 <form action={addToList} >
  <input type="text" 
  placeholder="e.g. oregano"
 name="ingredient"
/>
  <button >+Add ingredient</button>
 </form>
<List
 readyList={readyList}
/>
<Recipe
ShowRecipeFunc={ShowRecipeFunc}
readyList={readyList}
recipeShown={showRecipe}
/>
</main>
    )
}
