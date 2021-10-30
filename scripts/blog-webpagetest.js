const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page90 = await browser.newPage();

  // await page90.goto("https://books.toscrape.com/");
  await page90.goto("https://blog.webpagetest.org/");
  const listcontent = await page90.evaluate(() => {
    const data = [];

    // signle item:
    const books = document.querySelectorAll(".post-list > li");
      books.forEach((book) => {
        let title = book.querySelector('h2').textContent;
        // let title = book.querySelector('.post-list__item h2 a');
        let time = book.querySelector('time').innerText;
        
        let urlslug = book.querySelector('a').getAttribute("href");

        let slug = 'https://blog.webpagetest.org'+urlslug

        data.push({
          title,
          slug,
          time,
        });
      });
      return data;
  });

  let string = '';
  for (const {title: n, url: f, time: k} of listcontent) {
    string += '[' + k + ' - ' + n + '](https://blog.webpagetest.org' + f + ')\n\n';
  }

  /*fs.writeFile('books.md', string, function(err) {
    if(err) throw err;
    console.log("File was saved.");
    browser.close();
  });*/

  // fs.writeFileSync('books.md', string);
  fs.promises.writeFile(`../content/bloglist5.json`,JSON.stringify(listcontent));
  browser.close();

})();