# Be-Panic-App-Front-End

## Original Intent

To create a e-commerce shop focused on panic-buying.

## MVP

- working database
- working api with all crud operations
- models for products, reviews, users1
- displaying items on the home page
- basket
- authentication

## Bonus

- sending out emails
- admin and super admin consoles for controlling products and user access
- intake form for address and payment details
- buttons for removing and adding items in the basket page
- search function
- filtering on product page
- having buyer and seller access to the page

## Running the apps

we used react to build the app and to test the front-end we used the script 'npm run start:client' and for the back-end we used 'npm start dev'

NPM install for the dependencies

## Where we ended up

## Screenshots and Wireframes

## Highlights

Building a functioning fullstack app
Fun idea for the project
Getting the api and database working
using a Kanban board to manage the project and sharing out tasks
being close to a full ecommerce shop that could take orders
using figma as a wireframing tool to create a vision of a final result.

## Struggles

- linking the frontend to the back end
- webpack configurations, having to change versions
- getting to use the email handler when called in the API
- using redux and having to take it out of the project
- issues with model: hard to make a reusable model for forms and reviews making code very long
- getting the basket items to get removed in the api

## What we would like to add to the project

- basket displaying when empty
- footer with details
- toastify library for animations
- more developed emails that are tailored to the user and display the products that were purchased
- storing addresses of users
- linking to payment api?

## What we learnt

- building up an app from the ground up
- linking the front and back end
- don't mix technologies before understanding how they fit together

## Would we recommend trying this?

## Developing the idea

- idea for an e-commerce shop
- brainstorm types of products
- decided on panic buying shop
- wire-frame design to get idea of all desired features
- set up kanban for initial steps to get the process of the ground and sharing tasks
- kanban as source for links to resources used for the project: step by step files, links to repos (front + back end repos), wire-frame project, postman api collection.

## Feature list

Home:

- products listed with stock count and running out if < 10 in count
- register / login
- search bar for products - have search bar appear on all pages
- register page
- login page: users can only checkout if logged in
- store address details in db, but NOT PAYMENT DETAILS. In real world would be payment API.

Product page:

- products listed out
- ability to select by type of product
- filter by price, brand, customer review
- search
- gif in background?
- if search not found send to 404 page

Single product page:

- main image
- pull out data from api
- show if in stock
- add to basket
- animation to show added to basket
- show prod reviews
- admin consol for adding/updating/removing products

Basket summary page:

- list items added to the basket
- checkout button

Purchase confirmation:

- show that order has been placed
- send confirmation email
- randomly generated order number?

## Nice to have

Address page:

- web-form taking in shipping and billing address
- selection of type of shipping method

Payments page:

- take payment details
- place order button

## Steps to build the back end

- set up files: package.json, dependencies, git repo, gitignore, index.js, webpack, index.html, styles, .prettierrc.
- create components
- create api
- test that api returns data
