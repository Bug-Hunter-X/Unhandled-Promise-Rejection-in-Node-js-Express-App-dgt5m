const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

const server = app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

//Unhandled promise rejection
//This is an example of a common error in Node.js applications that may not be immediately obvious.
//In this example, a promise is created but not handled properly which can lead to unexpected behavior or crashes.
const promise = new Promise((resolve, reject) => {
    //Simulate asynchronous operation that could fail
    setTimeout(() => {
        const randomNumber = Math.random();
        if(randomNumber < 0.5) {
            resolve('Success!');
        } else {
            reject('Failure!');
        }
    }, 1000);
});

//The promise is not handled properly
promise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.error(error);
});

//This will cause an unhandled rejection error because there is a lack of proper error handling for the promise
