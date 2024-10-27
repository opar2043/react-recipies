import Recipe from "../Recipe/Recipe";
import Selected from "../Selected/Selected";
import Total from "../Total/Total";

const Recipies = ({state,time , itemSelected , selected , tottalAmount,calori , totalsum}) => {

    // console.log(state);
  return (
    <div className="flex flex-col items-center my-8">
        <div className="text-slate-950 md:w-2/3 w-full mx-auto py-5 text-center px-6">
            <h2 className="font-bold text-2xl">Our Recipies</h2>
            <p className="text-md font-semibold text-gray-700">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
        </div>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-3 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:col-span-2">
               {
                state.map(recipe => <Recipe 
                   recipe = {recipe}
                   itemSelected={itemSelected}
                   
                ></Recipe>)
               }
        </div>

        <div className="border-2 rounded-2xl">
              <Selected time={time} calori={calori} totalsum={totalsum} selected ={selected} tottalAmount={tottalAmount}></Selected>

              <Total time={time} calori={calori}></Total>
        </div>
        </div>
      
        </div>

     
   
  )
}

export default Recipies