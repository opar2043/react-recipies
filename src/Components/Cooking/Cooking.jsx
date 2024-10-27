import Cook from "../Cook/Cook";
import Food from "../Food/Food";


const Cooking = ({totalsum , time ,calori}) => {
    console.log(totalsum);
  return (
    <div>
         <div className="py-2 border-b-2  rounded">
         <h2 className="text-lg font-bold text-center py-2 text-slate-950">Remaining Time:{totalsum.length} </h2>
         </div>
        {
            totalsum.map(cook => <Cook time={time} calori ={calori} cook={cook}>hi</Cook>)
        }
    </div>
  )
}

export default Cooking