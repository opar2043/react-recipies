
const Recipe = ({recipe , itemSelected}) => {

    const {recipe_image,recipe_id,recipe_name,short_description,ingredients,preparing_time,calories} = recipe;
  return (
    <div>
        <div className="card bg-base-100 shadow-xl border-2">
  <div className="h-60 rounded-2xl">
    <img
      src={recipe_image}
      alt="Shoes" className="w-full h-full object-cover rounded-lg" />
  </div>
  <div className="card-body">
    <h2 className="card-title font-bold text-xl text-gray-950">{recipe_name}</h2>
    <p className="font-semibold text-gray-500 text-sm py-2">{short_description}</p>
    <hr />
    <p className="font-bold py-1 text-gray-950">
        ingrediants - {ingredients.length}
        {
            ingredients.map(i => <li className="font-semibold text-gray-500 text-sm pt-1">{i}</li>)
        }
    </p>
    <div className="flex justify-around gap-2 font-semibold text-gray-600 py-2">
        <p><i class="fa-solid fa-clock mr-1"></i> {preparing_time} min</p>
        <p><i class="fa-solid fa-fire  mr-1"></i>{calories} calories</p>

    </div>
    <div className="card-actions ">
      <button className="btn bg-green-500 px-7 py-2 rounded-3xl" onClick={()=>itemSelected(recipe)}>Want to Cook</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Recipe