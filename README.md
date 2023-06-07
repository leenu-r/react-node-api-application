# Getting Started with Full Stack React Node Express Application

This fullstack application demonstrates how to develop api calls in node js and consume them in the react application.\
The projects in this application are :

#### nasa-images-fe   -> React application
#### nasa-images-be   -> Node Express application

## Available Scripts

Install the node_modules in the project directory as well as in the client and server using `npm install` \
In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode and it starts both the server and client concurrently.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run server`

This will start only the server(node js application) in development mode.

### `npm run client`

This will start only the client.(react js application)

## Functionality : nasa-images-be
This node express application will fetch data from the nasa api [https://images-api.nasa.gov/search?q=moon](https://images-api.nasa.gov/search?q=moon)\
There is an api end point ["/image-list"]("/image-list") which will return the list of images received from the nasa api.\
The processing of data received from the nasa api is handled in the server side.\
Only the list of images is sent to frontend.

## Functionality : nasa-images-fe
The functionality of react application is to call the api end point ["/image-list"]("/image-list") in the node application and display the images list in the UI.\

## Features 
In both these application exceptions that may occur are handled using the exception handling mechanisms.(try/catch)\
Async/await is used for handling Promises.