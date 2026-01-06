import React from 'react'

interface BtsSrc {
    id: number,
    src: string,
}

const btsImages: BtsSrc[] = Array.from({ length: 36 }, (_, index) => ({
    id: index,
    src: `/images/IMG-20251224-WA${index}.jpg`,
}));

const btsVideos: BtsSrc[] = Array.from({ length: 3 }, (_, index) => ({
    id: index,
    src: `/videos/VID-20251224-WA${index}.mp4`,
}));
const Bts = () => {
    return (
        <>
            <h1 className='text-4xl md:text-5xl font-bold text-white text-center mt-8'>BTS</h1>
            <p className='mt-2 text-[#A8A8A8] text-center mb-8'>Behind-the-scenes documentation of our on-set sound recording process and production workflow.</p>
            <div className='flex flex-row justify-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 h-full w-full'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10'>

                    {btsImages.map((image) => (
                        <div key={image.id} className=''>
                            <img src={image.src} className='w-full h-100 object-cover' />
                        </div>
                    ))}
                </div>
            </div>
            <div className=' my-10 ' ></div>
            <div className='flex flex-row justify-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 h-full w-full '>
                <div className='grid w-full grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10'>

                    {btsVideos.map((video) => (
                        <div key={video.id}>
                            <video preload='metadata' controls src={video.src} className='w-full h-100 object-cover' />
                        </div>
                    ))}
                </div>
            </div>
            <br />
        </>

    )
}
export default Bts
