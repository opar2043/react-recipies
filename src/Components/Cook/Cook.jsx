import Total from "../Total/Total";


const Cook = ({cook ,time,calori}) => {
    console.log(cook);
    const {recipe_image,recipe_id,recipe_name,short_description,ingredients,preparing_time,calories} = cook;
  return (
    <div>
        <div className="flex gap-2 px-2 justify-between items-center text-sm font-semibold py-3 rounded-md border-b-2 shadow">
        <p>{recipe_name}</p>
        <p>{preparing_time}</p>
        <p>{calories}</p>      
    </div>
         
    </div>
  )
}

export default Cook