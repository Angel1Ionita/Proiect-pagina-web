const { json } = require("body-parser");
const fs = require("fs");

module.exports.readJSONFile = (content) => {
  return JSON.parse(fs.readFileSync("db.json"))[content];
}

module.exports.writeJSONFile = (content) => {
  var jsonfile = JSON.parse(fs.readFileSync("db.json"));
  jsonfile.comanda = content;
  fs.writeFileSync(
    "db.json",
    JSON.stringify(jsonfile, null, 4),
    "utf8",
    err => {
      if (err) {
        console.log(err);
      }
    }
  );
}