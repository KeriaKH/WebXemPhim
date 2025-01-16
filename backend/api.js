const mongoose = require('mongoose');
const app = require('./app');

// Kết nối MongoDB
const uri = process.env.MONGODB_URI || "mongodb+srv://22521672:220508@webxemphim.yp5ib.mongodb.net/QuanLyAnime?retryWrites=true&w=majority&appName=WebXemPhim";
mongoose.connect(uri, {
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB:', err));

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});