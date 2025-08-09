export default function Main(props){
    return(
<main>
 <section>
   <iframe src={props.videoLink} frameborder="0"></iframe>
   <article>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
   </article>

 </section>

</main>
    )
}