# doctorApp

This app runs on node.js and dependancies are managed with NPM. To get stated with node.js go to https://nodejs.org/en/. NPM will come preinstalled with node.js. 

You need MongoDB to run this app in dev mode. You can download it at https://www.mongodb.com/download-center?jmp=nav#community. Enventually, we will provision remote resources and it might not be needed to install mongo (especially if you aren't developing the project). For the server to interact with the db, open a new terminal and run the mongod command to start the mongo server. You can interact with it directly in another terminal by running the mongo command. 

Add a file in the root directory called .env and include string constants for JWT_KEY, MONGO_URI, and DEV_SERVER_URI. I use:

DEV_SERVER_URI = "http://localhost:5000"
MONGO_URI = "mongodb://localhost/[DBNAME]" -- note replace [DBNAME] with something like doctorApp.
JWT_KEY = "[any long string without special characters]"

I'd also recomend getting MongoDB compass, which is a great GUI for looking at the database. 

Finally, open a terminal cd into the directory, run npm install, then npm run dev. 
