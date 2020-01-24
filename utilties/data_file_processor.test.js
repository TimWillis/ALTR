


const data_file_processor = require('./data_file_processor.js');

test('expect first 10 calls to be 200, after 10 to be 401, for same ip and param', () => {
    const uniq_ip = Date.now();//Generate a uniq string for the ip so test will pass.
    let current_time = Date.now();
    for(i = 0; i < 15; i++){
        expect(data_file_processor(uniq_ip, 'test', current_time)).toBe(i > 9 ? 401 : 200);
    }
  });

  test('expect 10 calls from 1 ip and another 10 calls from another ip to be 200 for 2 ips and 1 param', () => {
    let uniq_ip = Date.now();
    let current_time = Date.now();
    for(i = 1; i < 20; i++){
        uniq_ip = i<10 ? uniq_ip : Date.now();
        expect(data_file_processor(uniq_ip, 'test', current_time)).toBe(200);
    }
  });

  test('expect 10 calls to 1 param and another 10 calls to another param to be 200 for 1 ips and 2 param', () => {
    let uniq_ip = Date.now();
    let param = 'test';
    let current_time = Date.now();
    for(i = 1; i < 20; i++){
        param = i<10 ? param : 'test2';
        expect(data_file_processor(uniq_ip, param, current_time)).toBe(200);
    }
  });

  test('expect more than 10 delayed calls to be 200', () => {
    let uniq_ip = Date.now();
    let current_time = Date.now();
    for(i = 1; i < 25; i++){
        expect(data_file_processor(uniq_ip, 'test', current_time)).toBe(200);
        current_time += 10000;//Add 10 seconds to the last current_time.
    }
  });

  //make sure its more than 10, and not include 10.