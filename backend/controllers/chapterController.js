const Chapter = require("../models/Chapter");

exports.getListChapter = async (req, res) => {
  const { id } = req.params;
  const animeId=id
  try {
    const listChapter = await Chapter.find({animeId})
    res.json(listChapter)
  } catch (error) {
    res.status(500).json({ message: error.message }); // Xử lý lỗi
  }
};
