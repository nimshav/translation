const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public")); // Make sure all your static files (HTML, CSS, JS) are in a 'public' folder

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
