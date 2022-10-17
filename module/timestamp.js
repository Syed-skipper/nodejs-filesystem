const fs = require("fs");
const timestamp = new Date();
const time = `${timestamp.getDate()}-${timestamp.getMonth()}-${timestamp.getFullYear()}-${timestamp.getHours()}-${timestamp.getMinutes()}-${timestamp.getSeconds()}`
const files = './created txt';
const content = `The Current Timestamp is ${new Date().getTime()}`;

module.exports.createTime = (req, res) => {
   fs.writeFile(`./created txt/${time}.txt`, content, function (err) {
    if (err) {
      console.log(err);
    }});
    res.send([{Status : "File Created Successfully"}]);
  };

 module.exports.getTime = (req, res) =>{
  try {
    const getfile = fs.readdirSync(files)
    getfile.forEach(file => {
      console.log(file);
    })
    res.send(getfile)
  } catch (err) {
    res.send(err)
  }
   }