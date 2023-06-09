const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const cookieParser = require('cookie-parser');

require('dotenv').config();

require('./config/mongoose.config');

app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json(), express.urlencoded({ extended: true }));

require('./routes/garment.routes')(app);
require('./routes/user.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));