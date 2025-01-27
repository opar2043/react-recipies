import { useEffect, useState } from "react"


const Hero = () => {

  const [btn,setBtn] = useState([]);
  useEffect(()=>{
     fetch('/food.json')
     .then(res => res.json())
     .then(data => setBtn(data))
  },[])


  function foodSection(){
    setBtn()
  }

  return (
    <div className="mt-8">
        <div className="hero bg-base-200 min-h-screen rounded-md bg-slate-900">
          <img src="https://i.ibb.co.com/hKqq6DS/cover-Recipi.webp" className="w-full h-full object-cover rounded-lg opacity-80" />
  <div className="hero-content text-center">
    <div className="w-3/5">
      <h1 className="text-4xl font-bold text-white">Discover an exceptional cooking class tailored for you!</h1>
      <p className="py-6 text-md font-semibold text-gray-200">
      Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
      </p>
      <div className="flex gap-2 justify-center">
      <button className="btn bg-green-500 text-white font-semibold">Explore More</button>
      <button className="btn border-2">Our Feedback</button>
      </div>

    </div>
  </div>
</div>
    </div>
  )
}

export default Hero