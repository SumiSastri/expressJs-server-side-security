**Cross-site scripting attacks** is when a malicious script is injected into a trusted site.

- Forms are a classic example of where this can happen - client side validation is required for these inputs 
Some example of attacks have been pulling data from cookies, session tokens, and all kinds of sensitive information. 

- More on  [www.google.com/about/appsecurity/learning/xss] and a general search of
"web app node security learning" for more results and options to learn. 

- One such example is that you can write a JavaScript `<script></script>` tag in an input field. You can now redirect or high-jack this input field as you can write javascript functions inside this script tag. You now can access the global window object  and the ```alert()``` method. What if you were to put a malicious message in this alert?

- It is a classic example of dangerous cross-site scripting. It is one of the top threats to your application because if a developer doesn't pay attention to this type of issue, it is in most case the easiest to hack.

To prevent this type of attack, you need to validate your data both on the server, and on the client, so when you have a form, make sure the data is sanitized or validated properly. 

Also make sure to implement output and coding, so HTTP cookie flag, and CSV in your application, and you have many examples how to do this in OWASP and a Node-Goat project.