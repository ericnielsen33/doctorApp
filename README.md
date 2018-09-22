# doctorApp

This is a Node.js application built using the Express framework and backed by a
MongoDB database. Dependencies are managed by `npm`.

## Getting started

### Prerequisites

Ensure that the following packages are installed

*  [Node.js: `nodejs >= 7.6`, `npm`](https://nodejs.org/en/download/package-manager/)
*  [MongoDB: `mongod`](https://docs.mongodb.com/manual/installation/)

### Starting the development server

1.  Install the application dependencies

    ```
    npm install; npm install --prefix client
    ```

1.  Start a MongoDB database process using `mongod`. Note the port number that
    the process is listening on (default = `27017`).

    ```
    mongod
    ```

1.  Configure the required environment variables `JWT_KEY`, `MONGO_URI`, and
   `DEV_SERVER_URI` by specifying their values in a `.env` file located at the
    project root e.g.,

    ```
    JWT_KEY={[A-Za-z0-9]+}
    MONGO_URI=mongodb://localhost:{database_port}/{database_name}
    DEV_SERVER_URI=http://localhost:5000
    ```

1.  Start the development server.

    ```
    npm run dev
    ``` 

Tips

*   MongoDB compass is a useful GUI for inspecting the data in the database. 
