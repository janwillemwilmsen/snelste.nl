config = require('../content/tooling.json');
const playwright = require('playwright');

// TOOL 1
console.log (config[0].url);
console.log (config[0].naam);
const tool1url   =  config[0].url;
const tool1naam   =  config[0].naam;

// TOOL 2
console.log (config[1].url);
console.log (config[1].naam);
const tool2url   =  config[1].url;
const tool2naam   =  config[1].naam;

// TOOL 3
console.log (config[2].url);
console.log (config[2].naam);
const tool3url   =  config[2].url;
const tool3naam   =  config[2].naam;

// TOOL 4
console.log (config[3].url);
console.log (config[3].naam);
const tool4url   =  config[3].url;
const tool4naam   =  config[3].naam;

// TOOL 5
console.log (config[4].url);
console.log (config[4].naam);
const tool5url   =  config[4].url;
const tool5naam   =  config[4].naam;

// TOOL 6
console.log (config[5].url);
console.log (config[5].naam);
const tool6url   =  config[5].url;
const tool6naam   =  config[5].naam;

// TOOL 7
console.log (config[6].url);
console.log (config[6].naam);
const tool7url   =  config[6].url;
const tool7naam   =  config[6].naam;


(async () => {
    for (const browserType of ['chromium']) {
      /** @type {import('playwright').Browser} */
      const browser = await playwright[browserType].launch();
      const context = await browser.newContext();
      const page = await context.newPage();

      await page.goto(tool1url);
      await page.screenshot({ path: `../static/tooling/${tool1naam}.png` });

      await page.goto(tool2url);
      await page.screenshot({ path: `../static/tooling/${tool2naam}.png` });


      await page.goto(tool3url);
      await page.screenshot({ path: `../static/tooling/${tool3naam}.png` });


      await page.goto(tool4url);
      await page.screenshot({ path: `../static/tooling/${tool4naam}.png` });


      await page.goto(tool5url);
      await page.screenshot({ path: `../static/tooling/${tool5naam}.png` });


      await page.goto(tool6url);
      await page.screenshot({ path: `../static/tooling/${tool6naam}.png` });

      
      await page.goto(tool7url);
      await page.screenshot({ path: `../static/tooling/${tool7naam}.png` });



      await browser.close();
    }
  })();

