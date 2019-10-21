# PoliciesAndClient
Back-End Assessment

How To Run the Proyect:

1) Clone the repository https://github.com/ManuelRios94/PoliciesAndClient.git (If you need herl, visit https://help.github.com/en/articles/cloning-a-repository)

2) Go to the folder where it was installed and run the command "npm install"

3) Run the command "npm start"

4) The application will run in http://localhost:3000/

How To Use:

You can send http get request in the following url for get the data:

(Always when you send a request you need to set a header "x-access-token" or "authorization" with the value of a client id). I recommend to use Postman (https://www.getpostman.com/) to test the endpoints.

- http://localhost:3000/client/id/{id} -> Get client data filtered by the client id. (Can be accessed by clinets with role "user" or "admin")

- http://localhost:3000/client/name/{name} -> Get client data filtered by user name. (Can be accessed by clinets with role "user" or "admin")

- http://localhost:3000/policies/client-name/{name} -> Get the list of policies linked to a client name. (Can be accessed by clinets with role "admin")

- http://localhost:3000/policies/id/{id} -> Get the user linked to a policy number. (Can be accessed by clinets with role "admin")


Technical Notes:

- I decided to always consult the API (Url Clients and Policies), in case it changes the data in the future.

- I assume that the id and name of the customer data are a unique identifier

- It was decided that authentication be handled through the handling of information in the header of the request. For the application to know who is making the http request, it needs to be added in the "x-access-token" or "authorization" header with the client identifier.

- No models were used since there is no database, they do not need to be parsed. No complexity was found in the interaction with the different objects (Client and Policies). If necessary, they can be implemented with their possible methods.


