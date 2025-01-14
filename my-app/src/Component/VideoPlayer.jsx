import React from 'react';

const VideoPlayer = ({url}) => {

    return (
        <div className='flex justify-center'>
            <iframe
                src={url}
                className='w-[60vw] aspect-video'
                title="YouTube video"
                scrolling='no'
                allowFullScreen="true"
            ></iframe>
        </div>
    );
};

export default VideoPlayer;
