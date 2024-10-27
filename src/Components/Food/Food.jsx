import Cooking from "../Cooking/Cooking";


const Food = ({item , tottalAmount , totalsum}) => {
    const {recipe_image,recipe_id,recipe_name,short_description,ingredients,preparing_time,calories} = item;
  return (

    <div>

    <div className="flex gap-2 px-2 justify-between items-center text-sm font-semibold py-3 rounded-md border-b-2 shadow-lg">
        <p>{recipe_name}</p>
        <p>{preparing_time} min</p>
        <p>{calories} calories</p>
        <button className= "font-bold bg-green-400 p-2 rounded-lg"><i class="fa-solid fa-calculator" onClick={()=>tottalAmount(preparing_time,calories,item)}></i></button>   
    </div>

 </div>

  )
}

export default Food