import React from 'react'

export default function RandomAnime() {
    return (
        <div className='w-full bg-slate-900 text-[13px] font-semibold space-y-3 p-[10px]'>
            <p className='text-white '>Hôm nay xem gì ?</p>
            <div>
                <hr className='w-1/6 bg-lime_green border-0 h-[3px] rounded-sm'></hr>
                <hr className='bg-slate-200 bg-opacity-30 h-[1px] border-0'></hr>
            </div>
            <p className='text-slate-600'>Nếu bạn buồn phiền không biết xem gì hôm nay. Hãy để chúng tôi chọn cho bạn</p>
            <button className='w-2/3 p-3 h-fit bg-red-700 text-white rounded-sm hover:bg-slate-800 duration-300'>▶︎ Xem Anime Ngẫu Nhiên</button>
        </div>
    )
}
