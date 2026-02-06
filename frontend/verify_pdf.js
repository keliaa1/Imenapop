const fs = require('fs');
const path = require('path');

try {
    const filePath = path.join(process.cwd(), 'debug_output.pdf');
    if (!fs.existsSync(filePath)) {
        console.log("File not found");
        process.exit(1);
    }
    const buf = fs.readFileSync(filePath);
    console.log('Size:', buf.length);
    console.log('Header Hex:', buf.subarray(0, 20).toString('hex'));
    console.log('Header Text:', buf.subarray(0, 20).toString());
} catch (e) {
    console.error(e);
}
