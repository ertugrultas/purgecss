const fs = require('fs');

exports.parse = function (url) {
    let exists = fs.existsSync(url);
    if (exists) {
        console.log("Readin file:", url);
        let rawdata = fs.readFileSync(url);
        let obj = JSON.parse(rawdata);
        console.log("Parsing file");
        if(!fs.existsSync('./output'))
            fs.mkdirSync('./output');
        for (file in obj) {
            if (obj[file].url.endsWith('css')) {
                console.log("Processing:", obj[file].url);
                let output = '';
                for (index in obj[file].ranges) {
                    const range = obj[file].ranges[index];
                    output += obj[file].text.substring(range.start, range.end);
                }
                fs.writeFile('./output/' + obj[file].url.substring(obj[file].url.lastIndexOf('/') + 1), output, function (err) {
                    if (err)
                        console.log(err);
                });

            }
        }
        console.log("Resultsa are ready. Check output dir for results");
    }
    else {
        console.log('File not found', url);
    }
}