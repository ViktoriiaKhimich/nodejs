import csv from 'csvtojson';
import fs from 'fs';

const writeText = fs.createWriteStream('./files/text/textbabel.txt');
fs.createReadStream('./files/csv/csv.csv')
    .pipe(csv())
    .on('data', (data) => writeText.write(data))
    .on('error', (error) => console.log(error.message));