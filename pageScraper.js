const scraperObject = {
    url: 'https://www.drivehub.co/',
    async scraper(browser) {
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        await page.goto(this.url); 
        await page.waitForSelector('.picker-content');
        // await page.evaluate(() => document.querySelector('#province-container-ref > .card.province-item').click());
         
        let locations = await page.$$eval('#province-container-ref > .card.province-item', items => {
            items = items.map(item => {
                const location = { province: '' };
                location.province = item.querySelector('.province-item-header').textContent;
                return location;
            });
            return items;
        });
        console.log(locations);
    }
}

module.exports = scraperObject;