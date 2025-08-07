
import Header from "./components/navbar.jsx"
import { Fragment } from "react"
import Main from "./components/mainCont.jsx"
import {Joke} from "./components/mainCont.jsx"
import jokes from "./data.js"

var realJokes=jokes.map((joke)=>{
    return <Joke
    setup={joke.setup}
    punchline={joke.punchline}
    />
})
export default function App(){
return( <>
 <Header/>
 <Main/>
 {realJokes}
</>)
}
