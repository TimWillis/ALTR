
const fs = require('fs')
const data_file_processor = (ip, data, current_time) => {
    const rawdata = fs.readFileSync('data_store.json');
    const data_store = JSON.parse(rawdata);
    let new_data_store = {};
    const ip_file = ip + data;
    let return_status = 200;
    if(!data_store.connections){
        new_data_store = {connections: [
            {
                timestamp: current_time,
                ip_file: ip_file,
            }
        ]}
    }else{
        new_data_store.connections = data_store.connections.filter((connection) => {
            return connection.timestamp + 60*1000 > current_time ;
        });
        new_data_store.connections.push({timestamp: current_time, ip_file: ip_file})
        return_status = new_data_store.connections && new_data_store.connections.filter((connection) => {
            return connection.ip_file === ip_file;
        }).length > 10 ? 401 : 200;
    }
    let new_data = JSON.stringify(new_data_store);
    fs.writeFileSync('data_store.json', new_data);
    // console.log(new_data_store)
    return return_status;
}
module.exports = data_file_processor;