
import { useState } from 'react'
import './App.css'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Recipies from './Components/Recipies/Recipies'
import { useEffect } from 'react'
import Footer from './Components/Footer/Footer'
import Food from './Components/Food/Food'

function App() {

  const [state , setState] = useState([])
  const [selected , setSelected] = useState([])
  const [totalsum , setTotalsum] = useState([]);
  const [time , setTime] = useState(0);
  const [calori , setCalori] = useState(0)

  function tottalTime(min){
   
    const newTime = time + parseFloat(min);
    // console.log(newTime);
    setTime(newTime);
  }

  function tottalCalore(caloriSun){

    const newCalori = calori + parseFloat(caloriSun);
    // console.log(newCalori);
    setCalori(newCalori)
  }


  function tottalAmount(time , calori , main){

    let delet = selected.filter(select => select.recipe_id !== main.recipe_id );
    setSelected(delet)

          tottalCalore(calori);
          tottalTime(time);
          let newData = [...totalsum ,main];
          setTotalsum(newData)
  }
  // console.log(totalsum);

  useEffect(()=>{
        fetch('./data.json')
        .then(data=>data.json())
        .then(res=>setState(res))
  },[])

  // console.log(state);
   
  function itemSelected(item){
        //  console.log("you have selected");
         const sameItem = selected.find(p=> p.recipe_id == item.recipe_id);
        //  console.log(sameItem);

         if(sameItem){
            alert('already Selected Item')
            return
         }else{
          let newItem = [...selected,item];
          setSelected(newItem)
         }

  }

  // console.log(selected);

  return (
    <div>

    <div className='w-11/12 mx-auto'>
     <Navbar></Navbar>
     <Hero></Hero>
     <Recipies state={state} itemSelected={itemSelected} selected={selected} tottalAmount={tottalAmount} totalsum={totalsum} time={time} calori={calori}></Recipies>
    </div>
         <Footer></Footer>
    </div>

  )
}

export default App
