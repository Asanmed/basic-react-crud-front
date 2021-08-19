# Description

This is a basic CRUD application with authentication by password and JWT (Json web token) made with react, it uses Axios library for communicating with the server and styled-components for styling.

It uses Redux for the state control and sagas as middleware for handling side effects as UI state changes.

Routing has been made with React-Router

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Functionality

The first screen shows a login box where the user must enter a valid email and password.

The second one, once the login has been made is a list with the first 5 users in the database, at the top of the page there is a select that will allow the user to show a list of 5, 10 or all existing users in the database.

If the user clicks one of the list elements it will show up a page with the User details where, this page will allow to modify the selected user data or create a new one if the logged in user has Admin or Sales role (roles are described bellow).

Valid emails for testing purposes are test1@test.com, test2@test.com, test3@test.com and so on, passwords is 123456 for all users.

There are 3 kind of users: Admins, Sales and Users, the first 2 are able to modify existing users or create new ones while the third one will be able to see other users info but not to modify it or create new ones.

User `test1@test.com` has been defined as Admin so you can try all the CRUD functionality by login in with its credentials.

### Installation and start

This application has been made to work with my basic rest server that can be found here: https://github.com/Asanmed/node_rest_server

A copy has been deployed here: [falta el link] for the purpose of showing its functionality:

Navigate to the root folder of the project and run `npm install` command, it will install all needed dependencies.

Once it is finished follow the instructions for installing the rest server mentioned above.

There is a .env file with a variable that contains the path for the local server services, please be sure that the path is correct on your computer once you run the rest server.
