import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const [dropdown, setDropdown] = useState(null); // Quản lý trạng thái dropdown

    const dropdownData = {
        "DẠNG ANIME": ["TV/Series", "Movie/Ova",],
        "THỂ LOẠI": ["Romance", "Horror", "Drama", "Action", "Ecchi", "Harem"],
        SEASON: ["Winter", "Spring", "Summer", "Fall"],
    };

    return (
        <div className='bg-slate-950 justify-center flex items-center mb-4 '>
            <div className=' flex items-center w-3/5'>
                <Link to="/" className='h-[65px] py-3 '><img src="https://cdn.animevietsub.biz/data/logo/logoz.png" alt="logo"  /></Link>
                <nav className=' text-white h-[60px] space-x-5 text-[13px] font-semibold w-full justify-center flex items-center'>
                    <Link to="/">TRANG CHỦ</Link>
                    <Link to="/">TOP ANIME</Link>
                    {["DẠNG ANIME", "THỂ LOẠI", "SEASON"].map((item) => (
                        <div
                            key={item}
                            className="relative group"
                            onMouseEnter={() => setDropdown(item)}
                            onMouseLeave={() => setDropdown(null)}
                        >
                            <div>
                                <Link to="/" className="hover:text-gray-300">
                                    {item}
                                </Link>
                                <div className="absolute w-full bg-transparent text-white rounded shadow-lg p-3 z-10" />
                            </div>
                            {dropdown === item && (
                                <div className="absolute top-full w-[300px] left-0 mt-2 bg-slate-800 text-white rounded shadow-lg p-3 z-10 flex flex-wrap">
                                    {dropdownData[item].map((subItem, index) => (
                                        <Link
                                            key={index}
                                            to={`/${subItem.toLowerCase()}`}
                                            className="block px-4 py-2 hover:bg-slate-700 w-1/3"
                                        >
                                            {subItem}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
                <input placeholder='Tìm kiếm' className='p-2 text-white bg-slate-800 ml-2 border-2 border-slate-700 focus:border-slate-600 outline-none rounded-sm transition duration-300'></input>
            </div>
        </div>
    )
}
