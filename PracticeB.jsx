import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { MdVerified, MdOutlineFileUpload } from "react-icons/md";
import { FaRegComment, FaRetweet } from "react-icons/fa6";
import { FcLikePlaceholder } from "react-icons/fc";
import { CiBookmark } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";

const RandomJokes = () => {

  const [joke, setJoke] = useState("");
  useEffect(() => {
    async function fetchJokes() {
    try {
      const response = await fetch("https://api.freeapi.app/api/v1/public/randomjokes/joke/random")
      const data = await response.json()
      setJoke(data);
    } catch (error) {
      console.error(error);
    }
    }
    fetchJokes();
  }, [])

  return (
    <div className='bg-black text-white rounded-xl min-w-[34%] max-w-[45%] min-h-[45%]'>
      <div className='mx-6 p-4'>
          <div className='flex items-center gap-6'>
            <FaArrowLeft/>
            <span className='text-xl font-500'>Post</span>
          </div>
        <section className='flex items-center justify-between'>
          <div className='flex items-center gap-4 my-5'>
            <div className='w-[45px] h-[45px] border-2 rounded-full overflow-hidden'>
              <img src="./storeB/NDA PHOTO.jpg" alt="Something Wrong" />
            </div>
            <div className='line'>
              <h2 className='flex items-center gap-2'>Rahul Gupta <MdVerified /></h2>
              <p>@rahulgupta</p>
            </div>
          </div>
          <BsThreeDots />
        </section>
        <div className='grid gap-4'>
          <p>{joke ? joke.data.content : "Rahul Bhai"}</p>
          <div className='flex gap-4 text-sm'>
            <span>{new Date().toLocaleTimeString("en-US", {hour: "2-digit", minute: "2-digit"})}</span>
            <span>{new Date().toLocaleDateString("en-US", {month: 'long', day: "2-digit", year: "numeric"})}</span>
            <span><b>20.1M</b> views</span>
          </div>
        </div>
        <div className='flex items-center justify-between border-y-[1px] border-slate-500 my-3 py-1 text-sm'>
          <span className='flex items-center gap-1 ml-3'><FaRegComment /> 4.5k</span>
          <span className='flex items-center gap-1'><FaRetweet /> 2.5k</span>
          <span className='flex items-center gap-1'><FcLikePlaceholder /> 1.5k</span>
          <span className='flex items-center gap-1'><CiBookmark /> 1.5k</span>
          <span className='flex items-center gap-1 mr-3'><MdOutlineFileUpload /></span>
        </div>
        <footer className='grid place-items-center'>
          @ chai aur code
        </footer>
      </div>
    </div>
  )
}

export default RandomJokes