import Cooking from "../Cooking/Cooking";
import Food from "../Food/Food";

const Selected = ({selected , tottalAmount , totalsum , time ,calori}) => {

    const {recipe_image,recipe_id,recipe_name,short_description,ingredients,preparing_time,calories} = selected;
    // console.log(selected);
  return (
    <div className="p-5">


    <div className="py-2 border-b-2  rounded">
    <h2 className="text-lg font-bold text-center py-2 text-slate-950">Items Selected: {selected.length}</h2>

    </div>

    <div className=" overflow-hidden">


      <div className="flex justify-between py-4 border-b-2 items-center">
        <th></th>
        <th>Recipies</th>
        <th>Preparing Time</th>
        <th>Calories</th>
      </div>
   
    
<div className="py-3">
        {
            selected.map((item , idx)=> <Food item={item} key={idx} tottalAmount={tottalAmount} totalsum={totalsum}></Food>)
        }
</div>

   
    
  </div>

  <Cooking totalsum={totalsum} time={time} calori={calori}></Cooking>

    </div>
  )
}

export default Selected