const mongoose = require('mongoose');
const app = require('./app');

// Kết nối MongoDB
const uri="mongodb+srv://22521672:220508@webxemphim.yp5ib.mongodb.net/QuanLyAnime?retryWrites=true&w=majority&appName=WebXemPhim"
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB:', err));

// Start server
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});