# capstone-project-1911-ddnguyen98
Capstone Project

Three Headed Dragon

Welcome to my final project for capstone, here you can download my files and use my character sheet creator to keep track of your characters that you create.

The purpose of this project was to show off my skills fully in how I can use and impliment industry standard tech into an application to show off both my front end and back end coding capabilities.

Technologies used in this were React, Redux, MySql with sequelize and postgres, express.js to handle the back end and basic css styling.

Npm install in main folder, api folder, and reactjs folder Make sure you have postgres server set up

npx sequelize db:create npx sequelize db:migrate npx sequelize db:seed:all (optional)

This will create the server, migrate the models to the server, and send seed data in the db folder (Send mock data) to the server if you need some pre populated

From here you can either login or create an account. If you need to you can use the forgot password link in the login to change your password. Navigating to the sheets you can add and delete characters Clicking on them will navigate the user to the character screen where they can edit their character and add feats, items, spells, skills, and weapons. The save button will loop through the state to add each feats, items, spells, skills, and weapons.
