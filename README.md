# doctorApp

You need MongoDB to run this app in dev mode. You can download it at https://www.mongodb.com/download-center?jmp=nav#community.

I'd also recomend getting MongoDB compass, which is a great GUI for looking at the database. For the server to interact with the db, open a new terminal and run the mongod command to start the mongo server. You can interact with it directly in another terminal by running the mongo command. 

Next cd into the directory run npm install then npm run dev. Add a file in the root directory called .env and include string constants for JWT_KEY, MONGO_URI, and DEV_SERVER_URI.
