import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Footer() {
    const toTop=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
            
        })
    }
    return (
        <div className='flex justify-center'>
            <div className='w-[60vw] bg-slate-950 h-fit my-8 px-5 flex'>
                <img src="https://cdn.animevietsub.biz/data/logo/logoz.png" alt="img" className='h-[65px] py-3'/>
                <ul className='flex justify-end items-center w-full gap-x-4'>
                    <li className='bg-slate-900 p-2'>
                        <a href='https://www.facebook.com/the.vinh.856918'><FontAwesomeIcon icon={faFacebookF} className='w-7  text-slate-600'/></a>
                    </li>
                    <li className='bg-slate-900 p-2'>
                        <a href='https://www.instagram.com/_ltn.v/'><FontAwesomeIcon icon={faInstagram} className='w-7  text-slate-600'/></a>
                    </li>
                    <li className='bg-slate-900 p-2'>
                        <a href='https://x.com/'><FontAwesomeIcon icon={faTwitter} className='w-7  text-slate-600'/></a>
                    </li>
                    <li className='bg-slate-900 p-2'>
                        <a href='https://www.youtube.com/c/MuseVi%E1%BB%87tNam'><FontAwesomeIcon icon={faYoutube} className='w-7  text-slate-600'/></a>
                    </li>
                    <li className='bg-lime_green p-2'>
                        <button onClick={toTop}><FontAwesomeIcon icon={faArrowUp} className='w-7  text-white'/></button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
