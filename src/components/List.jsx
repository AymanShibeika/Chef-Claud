export default function List(props){
    return(
        <div>

{props.readyList.length? <h1>Chosen items:</h1>:null}
{props.readyList}
      </div>
    )

}