// // const myModule = require('./myModule');
// // const fs = require('fs'); // imports file system module from node
// // const http = require('http');

// // fs.readFile('story.txt', 'utf8', (err, data)=> {
// //     if(err) {
// //         console.log('there was a problem reading the file')
// //     } else {
// //         console.log(data);
// //     }
// // });

// // http.createServer((req, res)=> {
// //     res.write('hello world');
// //     res.end();

// // }).listen(8000)

// // // console.log(myModule.beBasic())

// // // myModule.count()

// // let i = 1;

// // const count = () => {
// //     console.log(i);
// //     i *= 2;
// // }

// // const myTimer = setInterval(count, 1000);
// const moment = require('./.gitignore/node_modules/moment/ts3.1-typings/moment');
// // console.log(moment().format("MMM Do YYYY"));

// // use brackets to add custom words
// console.log(moment('05-09-1984').format('dddd [the] Do [of] MMMM [in the year] YYYY'));
var oneLinerJoke = require('one-liner-joke');

var getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke)