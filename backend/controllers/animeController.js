const Anime = require('../models/Anime');

exports.getListAnime = async (req, res) => {
  try {
    const AnimeList = await Anime.find();
    res.json(AnimeList);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
};

exports.getAnime=async (req,res)=>{
    const {id}=req.params;
    try {
        const anime=await Anime.findById(id)
        if(!anime)
            return res.status(404).json({ message: 'User not found' })
        res.json(anime)
    } catch (error) {
        res.status(500).json({ message: error.message }); // Xử lý lỗi
    }
}
