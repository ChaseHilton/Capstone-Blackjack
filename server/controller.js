const LeaderBoard = require('./db.json');

module.exports = {
  getLeaderBoard: (req, res) => {
    res.status(200).send(LeaderBoard);
  },
};
