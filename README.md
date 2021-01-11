# Table of Contents

1. [Project goals](#Project-goals)
2. [Certifications](#Certifications)
3. [Project access](#Project-access)
4. [RESOURCES](#Resources)

## Project goals

This project focuses on how the Express.js server works, the Express router middle ware and server-security middleware that can be used with Express.

It is not a comprehensive guide and follows tutorials from Linked-in Learning.

## Certifications

- Express essential training(Aug 2020)
- Building RESTful APIs with Node & Express (Aug 2020)

Code base is in the server folder with demos and the docs folder documents the key areas covered from tutorials and certifications.

## Project access

- [Back to Table of Contents](#Table-of-Contents)]

**Install dependencies**

`npm init -y` install node package manager
- Install ependencies 

- ```npm install express -S``` express server
- ``` npm install express-router -S ``` middleware for API-routes (other routers can be used they do not need to be the express router)
-  ```npm install helmet cors dotenv mongoose express-rate-limit nodemon body-parser -S``` middleware for server-security
- ```npm install --save-dev nodemon concurrently``` full-stack dev in watch mode
- ```npm install --save-dev babel-cli babel-preset-env babel-preset-stage-0``` babel transpiling from es6 back to vanilla js 
- ```npm install --save-dev axios``` if you want to use axios as your HTTP runner

- Add a dot files

- dot gitignore ```.gitignore``` removes several inefficient files from your code base in GitHub

- Presets for babel dot babelrc  `.babelrc` [touch .babelrc] in root folder (dot files like dot babelrc/ dotenv are hidden)

```
{
    "presets": [
        "env",
        "stage-0"
    ]
}
```

- Scripts in package.json - (index.js if that is what your Express server is called - make sure you have the right file path to your Express server)

```

 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon ./server.js --exec babel-node -e js",
    "debug": "DEBUG=express:* nodemon ./server.js --exec babel-node -e js"
  },

```

- Set up a vanilla server as described in the demo section

- Test your server is up and running - `npm run start`


## RESOURCES
- [Back to Table of Contents](#Table-of-Contents)]

- [https://expressjs.com/en/4x/api.html#router]
  Reading-list:
- [https://jilles.me/getting-the-express-router-js/]
- [https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4] Express 4.0
- [https://jilles.me/express-routing-the-beginners-guide/]
- [https://jilles.me/getting-the-express-router-js/]
- [https://expressjs.com/en/guide/routing.html]
  Documentation Express router documentation [https://expressjs.com/en/4x/api.html#router]

In the demo-section the readme documentation has the Express official readme documentation that is available in the Express node module.


- [Node and Express.js as a server](https://github.com/SumiSastri/node.js-and-server-side-javascript/tree/master/nodeJs-and-express)
