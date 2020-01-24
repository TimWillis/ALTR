
/*NOTES:
This is not the best solution.
1) I didn't want to have to install a db to get this to work, but in real world I would have used something like redis.
2) I didn't want to use a cookie based system, like some of the solutions out there for memory and rate-limit because the block was for on ip, which could be a server accessing the site and could ignore cookies...
3) This won't work if it was on several servers as it would run into concurrancy issues, maybe do a lock file read or something like that... 
*/

const data_file_processor =require('../utilties/data_file_processor');

const data_file = (req, res) => {
    const return_status = data_file_processor(req.ip, req.params.data, Date.now()); 
    res.status = return_status;
    res.send(return_status);
}


module.exports = data_file;