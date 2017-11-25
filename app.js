console.log("app.js: starting ... ");

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');


console.log(_.isString(notes.add(22,32)));

//var user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username} \n`, function (err){
//     if(err){
//       console.log('Unable to write file: '+err);
//     }
// });
