------ README -------
 
There're two parts: the client and the server.



== Running the server ==

The server is written with node.js using GraphQL for the API.

You will need to run 'yarn' in the folder to install the dependencies.

To start the server, run 'node main.js'.



== Running the client ==

The client has been build using React and Apollo. It's a single page app and is fully responsive.

Start it in dev mode. Run 'yarn' in the root directory of the app to install dependencies (same as above). Now run 'yarn start' to fire it up. You should see a confirmation/success message.



== Common issues ==

Q - I load the application but when I access the FAQs page I get an error message?

A - Make sure the server is running and on port 3001. Make sure you've run the client on port 3000 as the server is configured only to allow requests on localhost:3000 and 127.0.0.1:3000.
