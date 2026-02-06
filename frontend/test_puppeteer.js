const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    try {
        console.log("Launching browser...");
        const browser = await puppeteer.launch({
            headless: true,
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
        });
        console.log("Browser launched. New page...");
        const page = await browser.newPage();
        console.log("Setting content...");
        await page.setContent('<html><body><h1>Test PDF</h1><p>If you can read this, Puppeteer works.</p></body></html>');
        console.log("Generating PDF...");
        const buffer = await page.pdf({ format: 'A4' });
        console.log("PDF generated. Size:", buffer.length);
        fs.writeFileSync('test_simple.pdf', buffer);
        console.log("test_simple.pdf written.");
        await browser.close();
    } catch (e) {
        console.error("Error:", e);
    }
})();
