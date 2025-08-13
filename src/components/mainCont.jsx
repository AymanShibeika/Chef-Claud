import React from "react"


export default function Main(){
const [ingList,setIngList]=React.useState([])
const [human,setHuman]=React.useState({name:'Ayman',age:15,country:'Sudan'})

function addToList(formData){
    
    const ingredient=formData.get("ingredient");
if(ingredient!="")
    setIngList([...ingList,ingredient])

   setHuman((prev)=>({
        ...prev,
        country:"Moritanya"
   }))
    
    console.log(human.country)
}
    var readyList=ingList.map(ing=>(
        <li>{ing}</li>  


    ))
   return(
<main>
 <form action={addToList} >
  <input type="text" 
  placeholder="e.g. oregano"
 name="ingredient"
/>
  <button >+Add ingredient</button>
 </form>
 <h1>Chosen items:</h1>
{readyList}
</main>
    )
}
