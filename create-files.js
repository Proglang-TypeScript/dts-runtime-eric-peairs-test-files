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
        execSync('mkdir test_code/' + folderpath);
        convert = 'cat ../dts-generate-results/results/4_extract-code/code/' + test.split(',')[0] + ' | sed \'s/const /var /g\' > test_code/' + test.split(',')[0];
        const updateTest = execSync(convert);
    }
    catch {
        i++;
        continue;
    }
    i++;
}
