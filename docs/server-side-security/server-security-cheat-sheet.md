## Security - Cheat-sheet

__List of checks to perform__

## Security and servers (see security folder for detailed breakdown)

- keep dependencies up-to-date and secure
- use official list promoted by the Express team
- for sensitive data use TLS, which is the next progression of SSL. You can get a free TLS certificate through services like Let's Encrypt and, depending on where you host your services, they will have documentation on how to install your certificate.
- use the library Helmet, it adds a collection of middleware that secures further HTTP headers.
- use cookies securely
- review node security documentation
- validation of type and requirements with a typeguard, type-interface
- validation libraries such as validator.js
- using an ORM such as mongoose with some of these built in - mongoose validator
- using a HTTP runner like axios with security built in rather than fetch
- never use eval, setTimeout, and setInterval and function to parse user input. Use JSON.parse when you need to parse user input
- don't write your own regex
- using parsers body-parser & cookie-parser makes it more difficult to access data and information
- use cookie-parsers - like body-parser parses cookies and ensures authentic HTTP requests
- using libraries such as Helmet - protects http calls
- preventing Denial of Service attacks with rate limits and library express-rate-limiter
- using session cookies to access API-end points
- using HTTPS not HTTP - secure site certification can be bought or free
- encrypting and authenticating front-end form data with libraries such as Bcrypt/ Crypto or using 2-factor authentication, multi-factor authentication
- using prepared statements (CRUD calls for data in routes and controllers)
- check node packages for security - audit security, update packages, remove unused packages
- prevent forged HTTP requests add csrf protection to each API endpoint - use a library like csurf (CSRF stands for Cross Site Request Forgery)
- prevent cross-site-scripting (cookies, session tokens are the vulnerabilities)
- ensure code is tested
- use front-end validation for forms


OWASP & Node-Goat project
Test with Snyk, Burp,