


const data_file_processor =require('../utilties/data_file_processor');

const data_file = (req, res) => {
    const return_status = data_file_processor(req.ip, req.params.data, Date.now()); 
    res.status = return_status;
    res.send(return_status);
}


module.exports = data_file;