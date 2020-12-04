# ToDo Application

This is an implementation of **__Todo Application Backend APIs Only__** using Node and Express for the server. Postgresql is used as the database and knex is used as the query builder.


## Installation

1. Clone this repository.

2. Install dependencies.

    `npm install` or `yarn install`

3. Create a postgres database for the project with proper config.

4. Add Postgres credentials into **server/.env** so that knex is connected and can be used as query builder.

5. Install Knex globally.

    `npm install knex -g`

6. Set up the database using Knex migrations.

    `cd server && knex migrate:latest`

7. Come back to your root folder & Start the server on [http://localhost:5000](http://localhost:5000).

    `yarn server`

8. Use Postman to perform all the crud, search and all other operations.


## Steps while performing operations

1. **Create TODO**
    
    `POST` ON `http://localhost:5000` with Header key: `Content-Type` & value =`application/json` 
    and __raw body__ as: 
    ```
        {
            "title": "Title of the Todo"
        }
    ```

2. **Searching Todo**

    `POST` ON `http://localhost:5000/search/<<parameter_here>>` with Header key: `Content-Type` & value =`application/json` 
    and __raw body__ as: 
    ```
        {
            "keyword": "text to be search"
        }
    ```

3. ***Updating Todo**

    `PATCH` ON `http://localhost:5000/:id` with Header key: `Content-Type` & value =`application/json` 
    and __raw body__ as: 
    ```
        {
            "column_to_be_updated"= "value_to_be_updated"
        }
    ```

4. **Deleting Todo**

    `DELETE` ON `http://localhost:5000/:id` to delete todo with given id
    `DELETE` ON `http://localhost:5000/` to delete all the todo


5. **Geting Todo**

    `GET` ON `http://localhost:5000/:id` to dget todo with given id
    `GET` ON `http://localhost:5000/` to get all the todo

> Default Priority of all todo is `IMPORTANT` and can be later updated using the updation operation.
> Default Status of all todo is `false (not completed)`