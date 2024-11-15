const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
app.use(bodyParser.json());

// Gunakan rute
app.use('/', bookRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
