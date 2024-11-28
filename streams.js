const fs = require('fs');
// read data via readStreams 
const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf-8' });
const writeStream = fs.createWriteStream('./docs/blog3WriteStream.txt', { encoding: 'utf-8' });
readStream.on('data', (chunk) => {
    // console.log("New Chunck");

    writeStream.write('\nNEWLINE\n');
    writeStream.write(chunk);
    // console.log(chunk);
});
// write data via writeStreams 
