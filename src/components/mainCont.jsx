export default function Main (){
return(
  <main>
    <form action="">
      <input type="text"  placeholder="eggs for example"/>
      <button type="button" class="">+ Add a ingridient</button>
    </form>
  </main>
)
}
export function Joke(props){
  return(
    <section id="hey">
      <h3>setup: {props.setup}</h3>
      <h3>punshline: {props.punchline}</h3><br /><br />
    </section>
  )
}