const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page90 = await browser.newPage();

  // await page90.goto("https://books.toscrape.com/");
  await page90.goto("https://gtmetrix.com/blog/category/optimization-explained/");
  const listcontent = await page90.evaluate(() => {
    const data = [];

    // signle item:
    const books = document.querySelectorAll(".layout-cols-content > article");
      books.forEach((book) => {
        // let title = book.querySelector('h3.elementor-post__title').innerHTML;
        let title = book.querySelector('h2').textContent.trim();
        // let title = book.querySelector('.post-list__item h2 a');
        let time = book.querySelector('time').innerText;
        let slug = book.querySelector('a').getAttribute("href");
        data.push({
          title,
          slug,
          time,
        });
      });
      return data;
  });

  let string = '[\n';
  for (const {title: n, url: f, time: k} of listcontent) {

    // string += '[' + k + ' - ' + n +'](' + f + ')\n\n';

    string += '{ "datum" : "' + k + '", "naam": "' +  n + '", "url": "' +  f  + '"},' + '\n'  ;

  }

  let end = ']'
  stringtotal = string + end

  /*fs.writeFile('books.md', string, function(err) {
    if(err) throw err;
    console.log("File was saved.");
    browser.close();
  });*/

  // fs.writeFileSync('bloglist2.json', stringtotal);

  fs.promises.writeFile(`../content/bloglist2.json`,JSON.stringify(listcontent));

  browser.close();

})();