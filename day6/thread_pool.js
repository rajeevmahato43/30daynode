/*UV_THREADPOOL_SIZE environment variable. 
It does influence the number of threads in the Node.js thread pool. However, 
it's essential to use it judiciously and understand its implications.


Understanding the Impact
Increasing the thread pool size: Can potentially improve performance for CPU-bound operations, 
    especially in scenarios with a high number of concurrent blocking tasks.
Decreasing the thread pool size: Might reduce resource consumption but can also negatively impact performance,
    especially under heavy load.
Default value: Typically set to the number of CPU cores, which is often a reasonable starting point.


Cautions and Considerations
Performance trade-offs: Increasing the thread pool size can introduce overhead, especially if not all threads are actively utilized.
Platform-specific behavior: The impact of UV_THREADPOOL_SIZE might vary across different operating systems.
Node.js version differences: The behavior of the thread pool can change between Node.js versions.


Alternative approaches: Consider worker threads or cluster modules for more granular control over task distribution.

Example 
UV_THREADPOOL_SIZE=8 node myScript.js
*/