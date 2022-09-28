const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const { getLeaderBoard, addName, deleteName } = require('./controller');

app.get('/getLeaderBoard', getLeaderBoard);

app.post('/addName', addName);

app.delete('/deleteName/:id', deleteName);

app.listen(4000, () => console.log('server running on port 4000'));
