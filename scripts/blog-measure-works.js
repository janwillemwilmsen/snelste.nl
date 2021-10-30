const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page90 = await browser.newPage();

  // await page90.goto("https://books.toscrape.com/");
  await page90.goto("https://measure.works/blog/");
  const listcontent = await page90.evaluate(() => {
    const data = [];

    // signle item:
    const books = document.querySelectorAll(".elementor-posts-container article");
      books.forEach((book) => {
        // let title = book.querySelector('h3.elementor-post__title').innerHTML;
        let title = book.querySelector('h3.elementor-post__title').textContent.trim();
        // let title = book.querySelector('.post-list__item h2 a');

        
        let slug = book.querySelector('a.elementor-post__thumbnail__link').getAttribute("href");
        data.push({
          title,
          slug,
        });
      });
      return data;
  });

  let string = '[\n';
  for (const {title: n, url: f} of listcontent) {

    string += '{ "naam": "' +  n + '", "url": "' +  f  + '"},' + '\n'  ;
  }
  let end = ']'
  stringtotal = string + end

  /*fs.writeFile('books.md', string, function(err) {
    if(err) throw err;
    console.log("File was saved.");
    browser.close();
  });*/

  // fs.writeFileSync('bloglist3.json', stringtotal);
  fs.promises.writeFile(`../content/bloglist3.json`,JSON.stringify(listcontent));
  browser.close();

})();