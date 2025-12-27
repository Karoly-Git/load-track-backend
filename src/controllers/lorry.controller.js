const data = require("../__mocks__/lorry.data");

const getAllLorries = (req, res) => {
    try {
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: "Failed to load data" });
    }
};


module.exports = { getAllLorries };