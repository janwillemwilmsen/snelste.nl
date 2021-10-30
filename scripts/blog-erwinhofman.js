const { chromium } = require('playwright');
const fs = require('fs');
const { endianness } = require('os');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page90 = await browser.newPage();

  // await page90.goto("https://books.toscrape.com/");
  await page90.goto("https://www.erwinhofman.com/blog/");
  const listcontent = await page90.evaluate(() => {
    const data = [];

    // signle item:
    const books = document.querySelectorAll("article");
      books.forEach((book) => {
        // let title = book.querySelector('h3.elementor-post__title').innerHTML;
        let title = book.querySelector('h2').textContent.trim();
        // let title = book.querySelector('.post-list__item h2 a');

        let time = book.querySelector('time').innerText;

        let urlslug = book.querySelector('a').getAttribute("href");

        let slug = 'https://www.erwinhofman.com'+urlslug

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

    // string += '[' + k + ' - ' + n +'](https://www.erwinhofman.com' + f + ')\n\n';
    string += '{ "datum" : "' + k + '", "naam": "' +  n + '", "url": "https://www.erwinhofman.com' +  f  + '"},' + '\n'  ;


  }
 let end = ']'
 stringtotal = string + end



  /*fs.writeFile('books.md', string, function(err) {
    if(err) throw err;
    console.log("File was saved.");
    browser.close();
  });*/

  // fs.writeFileSync('bloglist1.json', stringtotal);
  fs.promises.writeFile(`../content/bloglist1.json`,JSON.stringify(listcontent));
  browser.close();

})();