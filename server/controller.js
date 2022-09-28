const LeaderBoard = require('./db.json');
let NameId = 11;

module.exports = {
  getLeaderBoard: (req, res) => {
    res.status(200).send(LeaderBoard);
  },

  addName: (req, res) => {
    const { name } = req.body;

    let NewNameObject = {
      id: NameId,
      name: name,
    };

    LeaderBoard.push(NewNameObject);

    NameId++;

    res.status(200).send(LeaderBoard);
  },

  deleteName: (req, res) => {
    const index = LeaderBoard.findIndex((el) => el.id === +req.params.id);

    LeaderBoard.splice(index, 1);

    res.status(200).send(LeaderBoard);
  },
};
