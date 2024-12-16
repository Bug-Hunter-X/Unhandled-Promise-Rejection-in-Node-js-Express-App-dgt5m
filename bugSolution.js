const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

const server = app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = Math.random();
        if(randomNumber < 0.5) {
            resolve('Success!');
        } else {
            reject('Failure!');
        }
    }, 1000);
});

//Properly handle promise rejection
promise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.error('Promise rejected:', error);
});
