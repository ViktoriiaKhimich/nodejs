const csv = require('csvtojson');
const fs = require('fs');

const writeText = fs.createWriteStream('./files/text/text.txt');
fs.createReadStream('./files/csv/csv.csv')
    .pipe(csv())
    .on('data', (data) => writeText.write(data))
    .on('error', (error) => console.log(error.message));