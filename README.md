<h1>Marvel</h1>


![Hnet-image (2)](https://user-images.githubusercontent.com/59829387/114761637-0f5be000-9d61-11eb-81cb-dc3542d8392b.gif)



Single Page Aplication of Marvel's characters created with React, responsive, and cosuming data from Marvel Public REST API. 

For deployment, I have used Vercel due to its perfectly intregation with git and its easy user-friendliness cli for continuous integration.

[See demo here](https://sangelesgu-marvel-app.vercel.app/)

# Getting Started

The SPA get data from Marvel's public Api.  You can check the Api's manual [here](https://developer.marvel.com/docs#!/public/getComicsCollection_get_6)

# Built With

- React
- Bootstrap
- CSS

# Development

### Run web server

`npm start`

### Run lint

`npm run lint`

### Run tests

`npm run test`

### Build

`npm run build`



# What to do in the chanllenge ?

The purpose of the challenge is to build a single page application with React, showing a list of items with some information in each of them, and another
page showing detailed information of each item.

There will be two principal screens in the app:

#### Listing:

- It will show a list of items coming from the API, with some
  information. Title is mandatory.

- The app will be able to order the items by (at least) the Title.

- The app will be able to filter the items by some of the fields. It
  could be a property from the items with any select or checkbox or
  a search field, or all of them.

#### Detail: 

- It will show detailed information of the selected element.
