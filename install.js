const fs = require('fs');
const execSync = require('child_process').execSync;
var tests = fs.readFileSync('./import-files.txt', 'utf-8').split('\n');
var i = 1;
for (test of tests) {
    if (!test) {
        i++;
        continue;
    }
    console.log(test + ' ' + i + '/' + tests.length);
    if (test.includes("NOK")) {
        i++;
        continue;
    }
    try {
        const fileName = test.split('/').slice(-2).join('/').split('.').slice(0,-1).join('.');
        const folderpath = test.split('/')[0];
        const output = execSync('npm install ' + folderpath);
    }
    catch {
        i++;
        continue;
    }
    i++;
}
