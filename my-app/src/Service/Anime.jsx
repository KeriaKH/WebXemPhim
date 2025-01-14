

export const getListAnime=async()=>{
    try {
        const res= await fetch('http://localhost:5000/Anime/getAnimeList') 
        return res.json()
    } catch (error) {
        console.error('Error fetching Anime data:', error.message);
    }
}

export const getAnime=async(id)=>{
    try {
        const res=await fetch(`http://localhost:5000/Anime/getAnime/${id}`)
        return res.json()
    } catch (error) {
        console.error('Error fetching Anime data:', error.message);
    }
}

export const getListChapter=async(id)=>{
    try {
        const res=await fetch(`http://localhost:5000/Chapter/getListChapter/${id}`)
        return res.json()
    } catch (error) {
        console.error('Error fetching Anime data:', error.message);
    }
}