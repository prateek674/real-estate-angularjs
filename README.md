# Weekend Challenge 4 - Angular, Node, Express & SQL

Welcome to weekend challenge 4! This weekend, you will take on the role of an application developer for a real estate company. You will be working with data that we will be providing to you. After importing the data (instructions below), you will find information for properties that are either for "rent" or for "sale".

You job is to get this data onto the DOM. Use client side routing (`angular-route`) to display the rentals on one view and listings for purchase on another view. There should be two navigation links on the page allowing the user to switch between the two views.

> NOTE: Deploying to Heroku is **not** required for this assignment. We will cover deployment with SQL next week.

## Project Requirements

- [ ] Create a Full Stack application from the ground up using Angular, Node, Express, and SQL (SEAN stack)
- [ ] Work with the data set that we have provide for you
- [ ] Account for the different data properties ("rent" versus "sale") and ensure that this is noted on the display of the information, by listing "For Rent" or "For Sale" based on which of the two properties that it has.
- [ ] 2 routes, each with a controller and template file. One set for "For Rent" properties and another set for "For Sale" properties
- [ ] Create an interface for adding additional rental or housing properties to the collection(s). You will need to give the user an option for either a Rent property, or a Sale property

## Importing the Provided Data File

You will need import the *listings.sql* file into your database. Either import the file or copy and paste all of the queries into Postico.


## Hard Mode

- [ ] Ability to delete an existing listings
- [ ] Move all `$http` requests to an Angular Service

## Stretch Goals

- [ ] Add an option to include an image path (absolute url) for each listing
- [ ] Display the least expensive property featured prominently at the top of the page
- [ ] Ability to search or filter by various parameters (try doing this using a server side route with a query parameter)
