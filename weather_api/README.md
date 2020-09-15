# Weather-Journal App Project

## Overview
This project is a web app that uses Weather Map Web API and user data to dynamically update the UI. 

## Project Structure 
Project Consists of:
* server.js which have the code to use Node.js to create a server which is responsible for applying HTTP request GET & POST with EndPoint here it is the server itself.
* website Folder which contain websit front end files:
** app.js script file include code for dynamic interacting with the website
** index.html home page and the only one exist.
** style.css styles for html component to look cool

## Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

## Prerequistes
You Must have Node.js installed in your Local device you can download it from [Node.js Download page](https://nodejs.org/en/download/)

or you can check if it is already installed using this command
```
node --version
```
Then in your project folder install needed Dependencies using npm package
* Express which is required to run server and routes 
``` 
npm install express 
```
* body parser to be used as middle-ware
``` 
npm install body-parser
```
* Cors cross origin allowance
``` 
npm install cors 
```

## Helpful links 
To create your API key you must make subscription on [OpenWeatherMap](https://openweathermap.org/api) website.
Instruction How to use that API provided in this [link](https://openweathermap.org/current) 
