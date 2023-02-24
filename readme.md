# Elisabeth Hope JavaScript 1 CA

This course assigment contains the following:

- HTML files for the Home page, Details page and Contact page.
- JS files for each of the pages listed above
- a CSS stylesheet
- Resources
- Readme file

## About the API

As requested in the CA, I have found a public, free to use API.
I decided to make calls to a Game of Thrones API because I am a big fan of the TV-show.
The API has an Array of Objects that I can render.
To find the properties and names I looked at the API documentation.

### Index Page

The first task is to fetch an array of results to the index.html page. To make this I need to make a GET Request to the URL. I used an asynchronous function as showed in the Noroff video content, then I used console log to see that everything works as it should. The If statement is to skip that call if the information I want isnt available. Finally I added Try Catch blocks to display any errors.

### Details Page

My method is quite similiar to the Index page, however in this case I need to retrieve id parameters from the query string.
I went back to index.js to add a href value in an anchor tag, so I can retrieve it from the query string and use it in the details page. When creating the details of each character, I made a similar function as in the index.js witch backticks and InnerHtml. I also used this method to dynamically change the HTML document head title.

### Contact Form

The form on the contact page has the following reqiurements:

- Name can´t be blank
- Email must be formatted correctly
- Address must have a minimium of 25 characters
- Subject must have a minimum of 10 characters

This was the most time consuming part of the project, becuase I experimented with different methods to validate the form with javascript. I did a lot of reserach, trying and failing until I finally made it. I used if statements to validate each input,and I also made reusable functions to show error and remove the error message.

### Resources

The API: https://thronesapi.com/
JS Form Validation - Monsterlessons academy: https://www.youtube.com/watch?v=zNIfyHbVbYw

#### Netlify Link:

https://musical-halva-e15069.netlify.app/index.html
