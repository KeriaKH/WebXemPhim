import React, { useState } from 'react';
import AnimeCard from './AnimeCard';

export default function ListAnime({AnimeList}) {


    const [start, setStart] = useState(0);
    
    const toLeft = () => {
        if (start > 0) {
            setStart(start - 1); // Di chuyển sang trái
        }
    };

    const toRight = () => {
        if (start + visibleImages < AnimeList.length) {
            setStart(start + 1); // Di chuyển sang phải
        } else {
            setStart(0); // Quay lại đầu
        }
    };

    const gap = 16; // Khoảng cách giữa các ảnh (px)
    const visibleImages = 8; // Số ảnh hiển thị cùng lúc

    return (
        <div className="flex overflow-hidden h-fit relative w-full">
            {/* Nút sang trái */}
            <button
                className="bg-red-700 bg-opacity-90 self-center size-7 absolute left-0 z-10"
                onClick={toLeft}
            >
                &#8592;
            </button>

            {/* Container ảnh */}
            <div
                className="flex gap-4 transition-transform duration-500 ease-in-out"
                style={{
                    transform: `translateX(calc(-${start * (100 / visibleImages)}% - ${start * (gap/visibleImages)}px))`,
                }}
            >
                {AnimeList.map((item, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0"
                        style={{
                            // Chiều rộng mỗi ảnh
                            width: `calc(${100 / visibleImages}% - ${(gap * (visibleImages - 1)) / visibleImages}px)`,
                        }}
                    >
                        <AnimeCard Anime={item}/>
                    </div>
                ))}
            </div>

            {/* Nút sang phải */}
            <button
                className="bg-red-700 bg-opacity-90 size-7 self-center h-fit absolute right-0 z-10"
                onClick={toRight}
            >
                &#8594;
            </button>
        </div>
    );
}
