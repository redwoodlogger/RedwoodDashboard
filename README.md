# Redwood
This project has been set up using Webpack, Babel, ESLint, and Prettier.

### What is Webpack, Babel, ESLint and Prettier?
Webpack is a module bundler. What that means in simple English I haven't figured out. But it also does a lot of other things. When I figure it out I'll add it to the README.

Babel is a transpiler (this is a made up word). It basically converts ES6 code to ES5. The latest version of JavaScript is ES6, but not all web browsers support ES6. We will be writing our code in ES6, and then asking Babel to convert that code into ES5 for us so that browsers are able to run the ES5 code.

ESLint is a linter. A linter is a tool that we use during our development to check our code for errors and to enforce good programming styles and practices. You should set up your text editor to work with ESLint so that whenever you save a file, ESLint will automatically lint your code to flag out any errors for you to fix.

Prettier is a code formatter. Prettier will help you format your code so that development teams no longer have to argue whether tabs or spaces are better, or if 2 spaces are better than 4 spaces, or which way of using brackets is the best. It will enforce one coding style so that all our code will be formatted in the same way. You should also set up your text editor to work with ESLint so that whenever you save a file, Prettier will automatically format your code to make it look pretty.

### How to use CSS for this project
We will be using Emotion to style our CSS. Emotion is a CSS in JS library, and it allows developers to style CSS in different ways. For this project, we will be using the CSS way (i.e. import { css } from "emotion") and not the styled-components way.

### How to get started
If you look into package.json, you will see a JSON object with the property "scripts". There are two scripts, "start" and "build". Right now, all we have to care about is the "start" script. The "start" script will run a development server that hosts the React project. It uses hot deployment, meaning that the browser will automatically update itself whenever you make any changes in your code. If we were not using hot deployment, we would have to refresh the browser each time we updated the code. So every time you save changes to your code and switch to the browser, you can be sure that that the browser is running the latest version of code, assuming that there were no errors.

In order to run the "start" script, simply cd into the project root directory (which is where package.json resides), and type "npm run start". This will automatically open a browser which will load the web page.

### Important development practices
It is essential that everyone uses ESLint and Prettier to check and format the code before committing it.

package-lock.json should be committed.
