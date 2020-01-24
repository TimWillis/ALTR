The solution uses the file system for a store. 
This would be better done with something like redis cache or mongodb cache, but didn't want to have that in a test project.
Also, I didn't want to use a cookie based system, like some of the solutions out there for memory and rate-limit because the block was for on ip, which could be a server accessing the site and could ignore cookies thus defeating the rate limit...
This won't work if it was on several node processes as it would run into concurrency issues, maybe do a lock file read or something like that... 


1) npm install
2) npm test
3) npm start

This was interesting, what at first seemed straightforward was hiding unseen complexity that I didn't notice at first glance, ie: the store and concurrency. I spent some time figuring out what to do for a store for this use case. Lots of improvements could be made - add a db store - add ability to handle multiple processes or servers and concurrency - more tests outside of the main utility function, etc. 

Thank you!
Tim 