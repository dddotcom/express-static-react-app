# express-static-react-app
Sample code to pair with **Accessing the MailChimp API with a Proxy Server and a Static React App** Series

* [Part 1](https://codeburst.io/accessing-the-mailchimp-api-with-a-proxy-server-and-a-static-react-app-part-1-dd07329f1155)
* [Part 2](https://codeburst.io/accessing-the-mailchimp-api-with-a-proxy-server-and-a-static-react-app-part-2-2e4663645886)
* [Part 3](https://codeburst.io/accessing-the-mailchimp-api-with-a-proxy-server-and-a-static-react-app-part-3-edbc205b2c60)

## Files 

The node/express app consists of the following files/directories:

* index.js
* package.json
* build/*

The react app consists of the following files/directories: 

* client/*

## Running the server

Run `npm install` in the main folder
Create a `.env` file and put the following environment variables in it: 

```
MAILCHIMP_API_KEY=blahlbahwhateveryourkeyis
MAILING_LIST_ID=blahblahwhateveryouridis
```

Run `node index.js` and the server will start running on port 3001
Navigate to `localhost:3001` in your browser and you should see the site up and running. 

## API calls, what to expect: 
Press the `Test API Call` button. 
You should see a message displayed below the button that says: 
`Successful call to /api/genericCall`

Press the `Get Members` button. 
You should see a bulleted list of members in your mailing list (if any exist). 

# Making changes to the React App
Make any changes you want to the app structure, html, css, etc. 
After you're done run `npm run build` inside the `client` directory. 
This will generate a new `build` folder. Copy the contents of this folder into the parent directory:
`cp -a client/build/ ./build` 

Now run `node index.js` and view the changes you've made at localhost:3001

# Adding more API calls
Edit the `index.js` file and add more routes to call your own/an external API. 
Edit the React app to do a `fetch` call to the new routes you've created. 

## Testing
Before building the static site, test it out locally. 
Run `node index.js` to get the server started. 
In a separate terminal, navigate to the `client` directory and run `npm start`. This should open up the React app on localhost:3000. 
Test that your API calls are working as expected on localhost:3000 before bundling the site again with the `npm run build` command.
