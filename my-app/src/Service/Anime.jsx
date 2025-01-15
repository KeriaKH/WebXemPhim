

export const getListAnime=async()=>{
    try {
        const res= await fetch('https://animevv.vercel.app/Anime/getAnimeList') 
        return res.json()
    } catch (error) {
        console.error('Error fetching Anime data:', error.message);
    }
}

export const getAnime=async(id)=>{
    try {
        const res=await fetch(`https://animevv.vercel.app/Anime/getAnime/${id}`)
        return res.json()
    } catch (error) {
        console.error('Error fetching Anime data:', error.message);
    }
}

export const getListChapter=async(id)=>{
    try {
        const res=await fetch(`https://animevv.vercel.app/Chapter/getListChapter/${id}`)
        return res.json()
    } catch (error) {
        console.error('Error fetching Anime data:', error.message);
    }
}