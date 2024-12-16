# Unhandled Promise Rejection in Node.js

This repository demonstrates a common error in Node.js applications: unhandled promise rejections. The example uses Express.js but the concept applies broadly. The `bug.js` file contains the problematic code.  The solution is provided in `bugSolution.js`.

## Problem

The `bug.js` file showcases a `Promise` that isn't properly handled. If the asynchronous operation within the promise fails, it will trigger an `unhandledRejection` event, which can lead to application crashes or unpredictable behavior.  This is a subtle bug that is not always immediately apparent, especially in larger applications.  Node.js will print a warning to the console, but the application might continue running, potentially in a corrupted state. 

## Solution

The `bugSolution.js` file demonstrates the proper way to handle promise rejections using `.catch()`.  This ensures that errors are gracefully handled, preventing unexpected behavior.

## How to run

1. Clone the repository.
2. Navigate to the repository's directory.
3. Run `npm install express` to install the required dependency.
4. Run `node bug.js` to see the unhandled promise rejection warning and then `node bugSolution.js` to observe proper handling.  Observe the console output for differences in handling.
