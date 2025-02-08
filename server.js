const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Serve static files from the root directory
app.use(express.static(__dirname));

// ✅ Serve JavaScript, CSS, and assets from specific folders
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/css', express.static(path.join(__dirname, 'css')));

// 🛑 Catch-all route should only handle unknown routes, NOT static files
app.get('*', (req, res) => {
    // If request is NOT for a static file, serve index.html
    if (!req.path.includes('.')) {
        res.sendFile(path.join(__dirname, 'index.html'));
    } else {
        res.status(404).send('Not Found');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
