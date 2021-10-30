const {google} = require('googleapis');
const keys = require('../keys.json');
const fs = require('fs');

// Google developer console
// Applicatie = directic-portfolio-gids
// directic-portfolio-gids
// keys.json
// directicportfoliogids@directic-portfolio-gids.iam.gserviceaccount.com

const client = new google.auth.JWT(
    keys.client_email, 
    null, 
    keys.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
);


client.authorize(function(err,tokens){

    if(err){
        console.log(err);
        return;
    } 
        else {
            console.log('connected');
            gsrun(client);

        }


        async function gsrun(cl){
 
            const gsapi = google.sheets({version:'v4', auth: cl});

            const opt = {

                spreadsheetId: '1WmT767jcZiGgbjpYLv20sdFLusjhJmBF6bQDP-GwiUM',
                majorDimension: 'columns',
                range: 'tool!C5:M17'

            };

             let data = await gsapi.spreadsheets.values.get(opt);
            // console.log(data.data.values);

            const rows = data.data.values

            // format retrieved data
            if (rows.length) {
                var rowHead = rows.shift()
                const formatedUsers = rows.map((row) => {
                    return rowHead.reduce( (obj, key, i) => { 
                      obj[key] = row[i]
                      return obj
                    }, {})
                })
                console.log(formatedUsers);
                
                // fs.promises.writeFile(`../content/webdesigngids.json`,JSON.stringify(formatedUsers));
                fs.promises.writeFile(`../content/tooling.json`,JSON.stringify(formatedUsers));
                
             }
        }

});





