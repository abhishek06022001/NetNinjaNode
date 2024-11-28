const fs = require('fs');
// read a file
// fs.readFile('./docs/test.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data.toString());
// });
// writing a file 
// fs.writeFile('./docs/test.txt', 'sup ', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log("printed the data");
// });
// Deleting a file
// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log("Folder Created");
//     });
// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log("Folder Removed");
//     })
// }
// if (fs.existsSync('./docs/test.txt')) {
//     fs.unlink('./docs/test.txt', (error) => {
//         if (error) {
//             console.log(error);
//         }
//         console.log("file deleted");
//     })
// }
// Streams and Buffer 
