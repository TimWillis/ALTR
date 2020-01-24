const express = require('express');
const app = express();

const data_router = express.Router({
    caseSensitive: true,
    mergeParams: true
    // strict: true
});
app.use('/get/', data_router);

const data_file = require('./routes/data_file');

data_router.get('/:data',  data_file);

app.listen(3006, () => { console.log('Listening on 3006.'); });