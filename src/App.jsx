import Header from "./components/navbar.jsx"
import { Fragment } from "react"
import Main from "./components/mainCont.jsx"
import data from  "./data.js"
var readyData=data.map((info)=>{
    return(
        <Main
        key={info.id}
        {...info}
        />
    )
})
var finalDiv=[]
for(let i=0;i<readyData.length;i+=3){
    finalDiv.push(
        <div className="container">
          {readyData[i]}
          {readyData[i+1]}
          {readyData[i+2]}

        </div>
    )
}
export default function App(){
return( <>
 <Header/>
{finalDiv}
</>)
}
