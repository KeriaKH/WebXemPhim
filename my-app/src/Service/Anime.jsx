const API_URL = process.env.REACT_APP_API_URL || "https://webxemphim.onrender.com";

export const getListAnime = async () => {
    try {
        const res = await fetch(`${API_URL}/Anime/getAnimeList`);
        return res.json();
    } catch (error) {
        console.error('Error fetching Anime data:', error.message);
    }
};

export const getAnime = async (id) => {
    try {
        const res = await fetch(`${API_URL}/Anime/getAnime/${id}`);
        return res.json();
    } catch (error) {
        console.error('Error fetching Anime data:', error.message);
    }
};

export const getListChapter = async (id) => {
    try {
        const res = await fetch(`${API_URL}/Chapter/getListChapter/${id}`);
        return res.json();
    } catch (error) {
        console.error('Error fetching Anime data:', error.message);
    }
};
