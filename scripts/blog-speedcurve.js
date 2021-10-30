

// TEVEEL PRODUCT NIEUWS

const page = await browser.newPage();
await page.goto("https://www.google.com/search?q=site:speedcurve.com/blog/&source=lnt&tbs=qdr:y");

await page.waitForTimeout(1000);
// await page.keyboard.press('Tab');
// await page.keyboard.press('Tab');
// console.log('7c - 2x TAB op toetsenbord');
// await page.keyboard.press('Enter');

await page.click("text=Ik ga akkoord"); 


console.log('Akkoord gelukt');
await page.waitForTimeout(3000);
const listcontentvandebron = await page.evaluate(() => {
const datavandebron = [];
const container = document.querySelector("#res");
// const matches = container.querySelectorAll("div.highlighted > p");
const booksvandebron = container.querySelectorAll("div.g");
// const booksvandebron = page.$$("div.g");
booksvandebron.forEach((book) => {
let title = book.querySelector('h3').innerText;
let url = book.querySelector('a').href;
// let datum = book.querySelector('span:last-of-type').innerText;
// let baseurl = 'https:'
// let url = baseurl + slug
   datavandebron.push({
   title,
   url    
    });
    });
return datavandebron;
});

let stringvandebron = '';
for (const {title: n, url: f, datum: d} of listcontentvandebron) {
  stringvandebron += '-   [' +  n + '](' + f + ')\n';
}
console.log("vandebron NIEUWS saved.");
fs.appendFileSync(`${appRoot}/content/gids/${bedrijfsnaam}` + '.md', stringvandebron);
// vandebron END

await browser.close()
})()