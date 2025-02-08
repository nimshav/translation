const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Serve all files inside the root directory
app.use(express.static(__dirname));

// ✅ Serve subdirectories explicitly (if used)
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/css', express.static(path.join(__dirname, 'css')));

// ❌ Only redirect unknown pages, NOT static files
app.get('*', (req, res) => {
    if (!req.path.includes('.')) {
        res.sendFile(path.join(__dirname, 'index.html'));
    } else {
        res.status(404).send('File Not Found');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

