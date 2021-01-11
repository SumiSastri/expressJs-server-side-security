## REST routes with Express

Routes on the back end are the request for data from a database (or filepath) and the returing of this data in the response.

To set up REST API calls and routes associated with those calls, the express function and the router method need to be imported into a module.

```
const express = require('express');
const router = express.Router();
```

The Express Router also has its own methods but to run routes - to separate concerns, these methods are usually moved out of the `server.js` file into a controllers or backend-routes folder and imported back into the server.

`router.get()` - gets resources from a URL end-point in the request body
`router.post()` - gets resources from a URL end-point and updates it in the response sent
`router.put()` - gets resources from a URL end-point based on an uniqueID and updates a particular resource in the response sent
`router.delete()` - gets resources from a URL end-point based on a unique ID and permanantly deletes a particular resource in the response sent

**Routing params**
The params of the req. method to find a specific id. In a route you may want to find a specific resource, you will need to specify that in the route path with a slash, colon as the first arg and then run the request response args. If you use the `(req.params.id)` method, you will the data of the id of the resource required. The method is in the demo file `routingWithIds.js`

**Routing handlers**
A route handler is the block of code that is held in the router method.

**Routing chaining**
All routes - get, post, put and delete can be chained as one block of code.

## Request and response methods

See demo in `vanillaRouting.js` in the get route.

The request methods that are frequently used are `req.body` or the body of the data, `req.cookies()` for cookie drops, `req.params()` are some of the commonly used methods - Documentation [https://expressjs.com/en/4x/api.html#req]

Response methods, some useful methods are `res.send()` to send the response back, `res.download()` to download resources, `res.redirect()` to redirect resources - Documentation [https://expressjs.com/en/4x/api.html#res]

## Midware

`router.use()` is the method to consume all midware

- json parses incoming requests with JSON payloads. Documentation[https://expressjs.com/en/4x/api.html#express.json]
- the `express.static()` method serves static assets such as HTML files, images. Documentation [https://expressjs.com/en/4x/api.html#express.static] See the demo file `staticFilesTemplate.js`
- url encloded parses incoming requests with URL-encoded payloads Documentation[https://expressjs.com/en/4x/api.html#express.urlencoded]
- error methods are built into Express, they do not need to be explicitly declared or called [https://expressjs.com/en/guide/error-handling.html]
- the way that the midware is stacked is important - the error midware needs to be last
- error midware to custom handle errors is best used just above `router.listen()` if there is no explicit handler, express uses its own handler
- third-party midware like cors, favicon, etc., can be added documentation for each shows you how to import the third party library and use it with the methods available [https://expressjs.com/en/guide/using-middleware.html#middleware.third-party] as well as a cheatsheet[https://expressjs.com/en/resources/middleware.html]

## Proxy servers

Documentation [https://expressjs.com/en/guide/behind-proxies.html]

Proxy is another server that pushes endpoint calls or traffic to your application. There are multiple use cases for proxies. However there are security issues to consider and should not be used without considering these security issues.

Some of the methods I have used are by installing the run-all package [npm install run-all]

- Unless I want to deploy the app - at which stage the package JSOn files and an [npm-run-build] are required I do not set up a proxy server or static files, I merely install dependencies.

Just before deploy I will run build and modify the servers to add a proxy server in package JSOn and express.

```
[npm run build]
Modify scripts

    "scripts": {
    "start": "npm-run-all -s build start-backend",
    "start-frontend": "react-scripts start",
    "start-backend": "nodemon src/back-end/server.js",
    "start-dev": "npm-run-all -p start-frontend start-backend",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"

},

Add proxy just above es lint and below scripts

"proxy": "http://localhost:3001",
"eslintConfig": {
"extends": "react-app"
},
```