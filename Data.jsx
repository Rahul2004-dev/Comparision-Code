import React, { useEffect, useState } from 'react'

const CatDetails = () => {

    const [cat, setCat] = useState("");
    useEffect(() => {
        async function fetchDetails() {
            try {
                const response = await fetch("https://api.freeapi.app/api/v1/public/cats")
                const data = await response.json();
                // console.log(data.temperament.split(","), data);
                setCat(data)
            } catch (error) {
                console.error(error);                
            }
        }
        fetchDetails();
    }, [])

  return (
    <div className='w-screen h-screen flex justify-center items-center overflow-x-auto'>
        <div className='w-[85%] h-3/4 flex justify-evenly overflow-hidden flex-nowrap'>
        {cat.data?.data.slice(0,3).map((item) => {
 return (
        <div className='w-1/4 h-full rounded-2xl overflow-hidden bg-slate-100'>
                <div className='w-full h-[50%]'>
                    <img className='w-full h-full' src={item ? item.image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7DHDmvVQxT9A7dKO28s5Vy763aqaS0LAzhQ&s"} alt="Something Wrong" />
                </div>
                <h2>{item ? item.name : "Kurilian"}</h2>
                <p className='leading-4 text-sm'>{item ? item.description : "Kurilian"}</p>
                <div>
                    <span>Origin</span>
                    <span>{item ? item.origin : "Kurilian"}</span>
                </div>
                <div>
                    <strong>Temparament</strong>
                    <div>
                        {item ? item.temperament.split(",").slice(0, 3).map(x => x) : "5"}
                    </div>
                </div>
                <div>
                    <span>Life Span</span>
                    <span>{item ? `${item.life_span} Years` : ""}</span>
                </div>
                <a href={item ? item.wikipedia_url : ""}>learn more..</a>
        </div>                  
 )
})}
            
        </div>
    </div>
  )
}

export default CatDetails