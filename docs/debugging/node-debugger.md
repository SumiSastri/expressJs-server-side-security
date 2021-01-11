## Debugging

In terminal run the command `DEBUG=express:* node server.js` (or name of your server, eg. index.js - whatever you have called the express server file ).

If you want to run the debug automatically with nodemon, you need to go to your package json file and add it there in the scripts section as a debug script.

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js --exec babel-node -e js"
    "debug": "DEBUG=express:* nodemon server.js --exec babel-node -e js"
  },
```

or if your start script is with node commands then copy the start scripts after the debug values in the json debug prop.

"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"start": "node ./server-side/server.js",
"debug": "DEBUG=express:\* node ./server-side/server.js"
},