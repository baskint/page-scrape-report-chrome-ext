# Page Scrape and Analysis using a Chrome Extension

This is a two part application which in the first part a chrome extension analyzes a web page for page links and stores the data in a local MongoDB instance and a Firebase instance. It illustrates the concepts in creating a chrome extension, passing events, coordinating data collection, posting data to a backend server.

The second part which is a Node-Express application acts as an endpoint to the front end. It runs certain NPM modules to analyze the passed-in URL and sending back the results as a JSON object

## Environment Set up and testing
For local testing, please clone this repo and run
```
  npm install
```
Once the packages are installed, use

```
gulp test
```
commands should run the tests.

Switch to the ```../server``` directory and run the

```npm install```

command one more time to get the backend packages.
