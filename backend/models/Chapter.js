const mongoose = require('mongoose');

// Định nghĩa schema cho HocSinh
const ChapterSchema = new mongoose.Schema({
    animeId: { type: mongoose.Schema.Types.ObjectId },
    Chapter: String,
    URL: String
});

// Tạo model từ schema
const Chapter = mongoose.model('Chapter', ChapterSchema, 'Chapter');

module.exports = Chapter;  // Export model để sử dụng ở nơi khác