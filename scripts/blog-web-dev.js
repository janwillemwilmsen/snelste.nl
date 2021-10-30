const { chromium } = require('playwright');
const fs = require('fs');
const { books } = require('googleapis/build/src/apis/books');
const { title } = require('process');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page90 = await browser.newPage();

  // await page90.goto("https://books.toscrape.com/");
  await page90.goto("https://web.dev/tags/web-vitals/");
  const listcontent = await page90.evaluate(() => {
    const data = [];

    // signle item:
    const books = document.querySelectorAll(".w-grid__columns article");
      books.forEach((book) => {
        // let title = book.querySelector('h3.elementor-post__title').innerHTML;
        let title = book.querySelector('h2').textContent.trim();
        // let title = book.querySelector('.post-list__item h2 a');

        let time = book.querySelector('time').innerText;
        let url = book.querySelector('.w-card-base__link').getAttribute("href");
        let slug = 'http://www.web.dev' + url
        data.push({
          title,
          slug,
          time,
        });
      });
      return data;
  });

  console.log(listcontent)

  let string = '';
  for (const {title: n, url: f, time: k} of listcontent) {

    // string += '['+ k + ' - ' + n +'](https://web.dev/tags/web-vitals' + f + ')\n\n';
    string += '{ "datum" : "' + k + '", "naam": "' +  n + '", "url": "https://web.dev/tags/web-vitals' +  f  + '"}' + '\n'  ;
  }

  let end = ''
  stringtotal = string + end
 




  // fs.writeFileSync('bloglist.jsonl', listcontent);
  fs.promises.writeFile(`../content/bloglist4.json`,JSON.stringify(listcontent));

  browser.close();

})();