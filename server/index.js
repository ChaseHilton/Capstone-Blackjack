const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const { getLeaderBoard } = require('./controller');

app.get('/getLeaderBoard', getLeaderBoard);

app.listen(4000, () => console.log('server running on port 4000'));
