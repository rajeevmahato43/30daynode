/*
Async functions provide a cleaner syntax for handling asynchronous operations in JavaScript. They make asynchronous code look more like synchronous code, improving readability.

Key points:

1. An async function is declared with the async keyword before the function keyword.
2. It always returns a promise.
3. Inside an async function, you can use the await keyword to pause execution until a promise resolves.
*/
//Basic Syntex
async function myAsyncFunction() {
    // Code here
  }

  /*
Using Await
The await keyword can only be used inside an async function. 
It pauses the execution of the async function until the promise it's used on resolves.
*/
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  }
  

/*
  Error Handling
You can use a try...catch block to handle potential errors in async functions:
*/
async function fetchDataWithErrorHandling() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Re-throw the error for further handling
    }
  }


  /* 
Limitations of Async/Await
While async/await is a powerful tool for handling asynchronous code, it's not without its limitations:

1. Compatibility Issues
Older environments: Async/await is a relatively newer feature. Older browsers and Node.js versions might not support it natively. You might need to use transpilers like Babel to convert your code to a compatible version.
2. Debugging Challenges
Asynchronous nature: Debugging asynchronous code can still be complex, especially when dealing with multiple promises and nested async functions.
Error handling: Proper error handling is crucial, and unhandled exceptions can lead to unexpected behavior.
3. Performance Overhead
Slight performance impact: Using async/await introduces some overhead compared to raw promises. However, this is usually negligible in most cases.
Overuse: Using async/await for every small operation might not be optimal. Consider balancing the readability benefits with performance implications.
4. Misconceptions
Blocking nature: Async/await does not block the event loop. It simply pauses the execution of the current async function until the promise resolves.
Infinite waits: Using await without a timeout can lead to indefinite waiting.
5. Nested Async Functions
Callback hell-like structure: While better than traditional callbacks, deeply nested async functions can still impact readability. Consider using techniques like Promise chaining or async/await with try-catch for better structure.
6. Not a Silver Bullet
Complex asynchronous scenarios: Async/await is a great tool, but it might not be the best solution for every asynchronous problem. Sometimes, using raw promises or other approaches might be more suitable

  */
  