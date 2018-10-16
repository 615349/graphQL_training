------ README -------

You will need node.js to run all parts of this application! 

There are tests for two different react files. In a real project every file would have tests. These use Jest/Enzyme for testing.
 
There's two parts to this: the client and the server.



== Running the server ==

The server is written with node.js using GraphQL for the API. I've written this in a generic way, meaning if it was to be expanded to use real logic, it could be very easily done. 

You will need to run either 'npm install' or 'yarn' in the folder to install the dependencies.

To start the server, simply run 'node main.js'. You should get a confirmation message to say it's been started.



== Running the client ==

The client has been build using React and Apollo. It's a single page app and is fully responsive. There's two ways you can start it:

1) Run the optimised build (recommended). To do this you will need to install a small server to serve the files. The easiest way to get started is to run:

'yarn global add serve && serve -s build -p 3000' or
'npm install -g serve && serve -s build -p 3000'

You should then get a confirmation message it's running on port 3000. You can load 'localhost:3000' or '127.0.0.1:3000' in the browser to view the app.

2) Start it in dev mode. We'll use our dev build server (webpack) to serve our files but the bundle won't be as optimised. Run 'npm install' or 'yarn' in the root directory of the app to install dependencies (same as above). Now run 'yarn start' or 'npm start' to fire it up. You should see a confirmation/success message.



== Common issues ==

Q - I load the application but when I access the FAQs page I get an error message?

A - Make sure the server is running and on port 3001. Make sure you've run the client on port 3000 as the server is configured only to allow requests on localhost:3000 and 127.0.0.1:3000.