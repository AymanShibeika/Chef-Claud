import { createRoot } from 'react-dom/client';
import App from './App';
import { Fragment } from 'react';
// function Learning(){
// function submit(formData){
// var form=Object.fromEntries(formData)
// form.checkbox=formData.getAll('checkbox')
// return<h1>{console.log(form)}</h1>
// }

//     return(
//    <form action={submit}>
//     <input type="text" defaultValue={'hediwqdiuqhdpoiqd'} />
//     <select name="" id="">
//         <option value=""></option>
//         <option value=""></option>
//         <option value=""></option>
//     </select>
//     <textarea name="" id=""></textarea>
//   <input type="radio" name="radio" id="" defaultChecked={true}/>
//   <input type="radio" name="radio" id="" />
//   <input type="radio" name="radio" id="" />
// <input type="checkbox" name='checkbox' value='1'/>
// <input type="checkbox" name='checkbox' value="2" />
// <input type="checkbox" name='checkbox' value='3' />
//   <button onClick={submit}>PRESS</button>
//    </form>

//     )
// }

const root = createRoot(document.getElementById('root'));
root.render(
<>
    <App/>
</>
);
