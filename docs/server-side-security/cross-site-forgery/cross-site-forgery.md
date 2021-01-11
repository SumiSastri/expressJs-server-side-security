**A Cross Site Request Forgery, or CSRF attack** 
This is different from a cross-site scripting attack where the hacker injects fake data via scripts and code. Here the hacker hijacks the browser headers/ response -request promise (HTTP) request and mimics the user's behaviour or 'forges' the users behaviour. 

The session that is hijacked could be a session to a bank account, email account or emaile exchange.

So how do you prevent this kind of attack? It is by adding CSRF protection to all your API endpoints, and you can do this with the csurf package.

Cookie Parser is one such application.

Go to github.com/expressjs/csurf and once you're on that page, scroll down until you see the code example.

The first thing you would need to do is include cookieParser, so you need cookieParser in order to use csurf, and obviously, these are ES5 and below kind of imports, so you would do something like import cookieParser from cookieParser, and import csrf from csurf, and then use them into your actual application, so the way you would do this is then create a const, and do csrfProtection, and then pass the option through, and then you'd be able to add this to your API endpoints, so basically, once you create your API endpoints, so for example, in this case here, it's an API endpoint called form, so when someone is actually typing form at the end of your URL, then it would actually go through the csrfProtection, and make sure that this is a fully protected, again, cross site request forgery. So this is as simple as it gets and this is how you would go about setting up CSRF protection inside of your API endpoints.