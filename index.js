/*
Event flow
- https://www.drivehub.co/
- Select id=province-container-ref > class=card province-item > id=province-item-*
- Select class=province-item-header [grab content header]> click > 
- Select class=province-item-location show > each class=location-item [grab to array]

Type Car
- https://search.drivehub.co/?booking_begin=2022-01-27%2010%3A00&booking_end=2022-01-29%2010%3A00&dealers=&from=from_homepage&location_id=205&sort_by=price
- class= category-type flex-center flex-column > p > span

Data Car
- 

Save Picture Split folder
- gallery__item > style = url

note
- https://www.codegrepper.com/code-examples/javascript/javascript+download+image+from+url (script download image from url)
- https://www.scrapingbee.com/blog/infinite-scroll-puppeteer/ 
- https://stackoverflow.com/questions/63905776/how-to-get-style-background-img-url-using-cheerio (script grab url from tag style)
- https://www.scrapingbee.com/blog/download-file-puppeteer/ (puppeteer download file)
- https://stackoverflow.com/questions/51529332/puppeteer-scroll-down-until-you-cant-anymore (script scroll down auto puppeteer)
- https://javascript.plainenglish.io/scraping-for-images-using-puppeteer-9a3700bd5a2d (keep link to json data)
- https://www.py4u.net/discuss/338163 (save all img web)
- https://dev.to/microworlds/image-downloader-with-puppeteer-and-the-fetch-api-5b8e 
- https://stackoverflow.com/questions/52542149/how-can-i-download-images-on-a-page-using-puppeteer
- https://www.freecodecamp.org/news/how-to-scrape-websites-with-node-js-and-cheerio/
- https://tkssharma.com/scrape-web-with-nodejs/
- https://www.toptal.com/puppeteer/headless-browser-puppeteer-tutorial
- https://www.freecodecamp.org/news/the-ultimate-guide-to-web-scraping-with-node-js-daa2027dcd3/
- https://www.digitalocean.com/community/tutorials/how-to-scrape-a-website-using-node-js-and-puppeteer
- https://dev.to/kirillinoz/web-scraping-with-puppeteer-kj7
- https://dev.to/diass_le/tutorial-web-scraping-with-nodejs-and-cheerio-2jbh
- https://medium.com/@dylan.sather/scrape-a-site-with-node-and-cheerio-in-5-minutes-4617daee3384
*/

const puppeteer = require('puppeteer');
function run () {
  return new Promise(async (resolve, reject) => {
      try {
          const browser = await puppeteer.launch();
          const page = await browser.newPage();
          await page.goto("https://www.drivehub.co/");
          
          await browser.close();
      } catch (e) {
          return reject(e);
      }
  })
}
run().then(console.log).catch(console.error);
