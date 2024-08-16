import React, {useState} from 'react';
import { IoMdArrowRoundBack, IoMdRefresh } from "react-icons/io";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";

const randomUserProfile = () => {

    const [data, setData] = useState("");

async function randomUser() {
    try {
        const userData = await fetch("https://api.freeapi.app/api/v1/public/randomusers/user/random");
        const data = await userData.json();
        console.log(data)
        if (data) {
            // updateUI(data);     
            setData(data.data)
        } else {
            console.error("API response data missing");
        }
    } catch (error) {
        console.error(error);
    }

    // function updateUI({data: {name, login, location, dob, phone, registered, picture}}) {
    //     document.getElementById("userName").textContent = `${name.first} ${name.last}`
    //     document.getElementById("userId").textContent = login.username
    //     document.getElementById("title").textContent = name.title
    //     document.getElementById("cityName").textContent = location.city
    //     document.getElementById("nationalityCountry").textContent = location.country
    //     const date = dob.date.split("T")[0]
    //     document.getElementById("userdob").textContent = new Date(date).toLocaleDateString("en-US", {day: "numeric", month: "long", year: "numeric"})
    //     document.getElementById("userPhoneNumber").textContent = phone
    //     const timeZoneName = location.timezone.description.split(",")[1]
    //     document.getElementById("timeZone").textContent = `${location.timezone.offset} ${timeZoneName}`
    //     document.getElementById("registeredDate").textContent = registered.date.split("T")[0]
    //     document.getElementById("profileImage").src =  picture.medium
    // }
}

async function openGoogleMaps() {
    try {
        const response = await fetch("https://api.freeapi.app/api/v1/public/randomusers/user/random");
        const data = await response.json();
        const location = data.data.location.coordinates
        const url = `https://maps.google.com/maps?q=${location.latitude},${location.longitude}&z=15`;
        window.open(url, '_blank');
    } catch (error) {
        console.log(error);
        
    }
}

  return (
        <div className='w-80 border-8 rounded-xl border-white bg-[#b6b3f3]'>
            <header className='flex justify-between items-center m-4'>
                <IoMdArrowRoundBack className='w-6' />      
                <p>Profile Overview</p>
                <IoMdRefresh className='w-6' id='refreshRandomUser' onClick={randomUser}/>
            </header>
            <section className='flex justify-center'>
                <div className='grid gap-[8px] place-items-center'>
                    <div className='relative w-[100px] h-[87px]'>
                        <img 
                        id='profileImage'
                        style={{borderRadius: '50%', width: '80px', height: '80px', objectFit: "cover", position: "absolute", bottom: "0"}} src={data ? data.picture.medium : "https://images.pexels.com/photos/1427288/pexels-photo-1427288.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="Something Wrong" />
                    <span className='absolute top-0 right-0 bg-black text-white border-2-black p-px px-1 text-xs rounded-xl' id='title'>{data ? data.name.title : "Mr."}</span>
                    </div>
                    <h3 className='text-2xl rubik-400' id='userName'>{data ? `${data.name.first} ${data.name.last}` :'Rahul Gupta'}</h3>
                    <p className='text-base' id='userId'>{data ? data.login.username : "Rahul2004jgjgfgg"}</p>
                </div>
            </section>
            <section className='flex justify-center items-center gap-6 mt-4 mx-4 border-y-2 border-[#ADAAE7] h-10'>
                <div className='flex items-center gap-1'>
                    <IoLocationOutline className='bg-black text-white p-0.5 text-xl rounded-full font-bold' onClick={openGoogleMaps}/>
                    <span className='text-sm'>Location</span>
                </div>
                <div className='flex items-center gap-1'>
                    <IoCallOutline className='bg-black text-white p-0.5 text-xl rounded-full font-bold'/>
                    <span className='text-sm'>Call me</span>
                </div>
            </section>
            <section className='grid gap-3 m-3 new-font-size'>
                <div className='flex'>
                    <div className='w-2/4'>
                        <span>City</span>
                        <p id='cityName'>{data ? data.location.city : "Surat"}</p>
                    </div>
                    <div>
                        <span>Nationality</span>
                        <div>
                            <img src="" alt="" id='countryFlag'/>
                            <p id='nationalityCountry'>{data ? data.location.country : "India"}</p>
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-2/4'>
                        <span>Date of birth</span>
                        <p id='userdob'>{data ? new Date(data.dob.date.split("T")[0]).toLocaleDateString("en-US", {day: "numeric", month: "long", year: "numeric"}) : "14/08/2024"}</p>
                    </div>
                    <div>
                        <span>Phone NO.</span>
                        <p id='userPhoneNumber'>{data ? data.phone : "854994544"}</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-2/4'>
                        <span>Time Zone</span>
                        <p id='timeZone'>{data ? `${data.location.timezone.offset} ${data.location.timezone.description.split(",")[1]}` : '1025'}</p>
                    </div>
                    <div>
                        <span>Registerd Since</span>
                        <p id='registeredDate'>{data ? data.registered.date.split("T")[0] :"14/08/2024"}</p>
                    </div>
                </div>
            </section>
        </div>
  )
}

export default randomUserProfile