# Country Quiz

Challenge: Create a country quiz app using an API, and use React to handle the frontend. Don’t look at the existing solution. Fulfill user stories below:

![image](./assets/quiz1.png)
![image](./assets/quiz2.png)
![image](./assets/quiz3.png)
![image](./assets/quiz4.png)

-   User story: I can see at least 2 types of question: a city is the capital of.. or a flag belong to country..
-   User story: I can see select an answer
-   User story: I can see if my answer is correct or incorrect
-   User story: When I answer correctly, I can move on to the next question
-   User story: When I answer incorrectly, I can see my results and try again
-   User story: I can try again

**Icon**: https://google.github.io/material-design-icons/

**API**: https://restcountries.eu/. Use data from the API to create questions and answers.

**Design** : https://www.figma.com/file/Gw0ZNBbYN8asqFlZWy3jG1

**Live app** : https://country-quiz-app.netlify.app/

As long as you fulfill all the user stories, you can give your personal touches by adding transition, using your own images, changing colors, or even creating your own layout,...

Once you completed, submit your solutions by providing URLs for both GitHub repository and live app on Netlify and explain briefly what you have done.

For the custom domain url you'll enter in netlify, please use the following naming convention : **country-quiz-_YOUR_FIRSTNAME_.netlify.app** (replace YOUR_FIRSTNAME by your firstname)

Good luck everybody!

Template for your readme :

<!-- Please update value in the {}  -->

<h1 align="center">{Your project name}</h1>

<div align="center">
  <h3>
    <a href="https://{your-demo-link.your-domain}">
      Demo
    </a>
    <span> | </span>
    <a href="https://{your-url-to-the-solution}">
      Solution
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

-   [Overview](#overview)
    -   [Built With](#built-with)
-   [Features](#features)
-   [How to use](#how-to-use)
-   [Contact](#contact)
-   [Acknowledgements](#acknowledgements)

<!-- OVERVIEW -->

## Overview

![screenshot](https://user-images.githubusercontent.com/16707738/92399059-5716eb00-f132-11ea-8b14-bcacdc8ec97b.png)

Introduce your projects by taking a screenshot or a gif. Try to tell visitors a story about your project by answering:

-   Where can I see your demo?
-   What was your experience?
-   What have you learned/improved?
-   Your wisdom? :)

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

-   [React](https://reactjs.org/)

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

## How To Use

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/your-user-name/your-project-name

# Install dependencies
$ npm install

# Run the app
$ npm start
```

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For example: -->

## Contact

-   Website [your-website.com](https://{your-web-site-link})
-   GitHub [@your-username](https://{github.com/your-usermame})
-   Twitter [@your-twitter](https://{twitter.com/your-username})

# Quiz
## Steps:
 - Install react and react-dom
 - Create index.html and add div has id root inside.
 - create index.js and link it to the index.html.
 - Create a folder where you store the components or images. 

 ### Let's start:
   1. Index.js file

      1.1. Import react, react-dom and the App function.

      1.2. Get the element by its id (root) and use render.

   2. App file

      2.1. Import react and components files which we need.

      2.2. Create variables by using state.

      2.3. Fetch data from api and random them(use random() method).

      2.4. Create all the function which we will use in this file and structure them so that we can use them in another file.

      2.4. Do not forget to export the App function as a default.

  3. Component file:
     I only have one file has name selectAnswer.
      - Import react and another function we need.
      - Built an JSX html(maping through an array, handleClick for buttons etc)

  4. index.css file;

    * Store all the styles to make the code look better and alive.


**NB**: Nice challenge!
Learn new thing and make use more creative.

  

  
