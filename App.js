
import './App.css';
import Products from './Products';
import './index.css';

import React,{useState} from 'react'

const App = () => {
  const[search, setSearch] = useState("");
  const [data,setData] = useState([]);
  const YOUR_APP_ID = "6606b648";
  const YOUR_APP_KEY = "4ba739f99a0990f3beec42c08377a822";

  const submitHandler = (e)=>{
    e.preventDefault();
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`).then(
      response => response.json()).then(data => setData(data.hits));
  }
  return (
    <div className='back-color'>
    <center><h1 className='heading'>Food Recipe</h1><br/>
    <form onSubmit={submitHandler}>
      <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)}/> <br/>
      <input type="submit" value="Search" className='btn btn-primary mt-3'/>
    </form>
    {data.length>=1 ? <Products data={data}/>: null}
      </center>
    </div>
  )
}

export default App
