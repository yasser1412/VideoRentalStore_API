# VideoRentalStore_API


## A simple Nodejs API migrated with MongoDB for renting movies online

- The User Signed up to rent movies from different genres 

- The API serves different features for different subscriptions rank (Normal & Gold)

```   
```
# EndPoints

1. Genres Queries:
``` http://localhost:3000/api/genres ```

2. Customers Queries:
``` http://localhost:3000/api/customers ``` 

3. Movies Queries:
``` http://localhost:3000/api/movies ``` 

4. Rentals Queries:
``` http://localhost:3000/api/rentals ``` 

5. Users Registrations:
``` http://localhost:3000/api/users ``` 

6. Users authentication:
``` http://localhost:3000/api/auth ``` 

#
## How To Use:

- Install required modules:
`npm i`

- To Run The Server: 
`npm run start`

- To Run Tests: 
`npm run test`
#

| HTTP verbs | Paths  | Used for |
| ---------- | ------ | --------:|
| GET | /api/genres | List all genres sorted by name |
| POST | /api/genres | Create a new genre |
| PUT | /api/genres/:id  | Update a genre |
| GET | /api/genres/:id    | Show a genre |
| DELETE | /api/genres/:id | Delete a genre |
| GET | /api/customers | List all customers sorted by name |
| POST | /api/customers | Create a customer |
| PUT | /api/customers/:id | Update a customer |
| GET | /api/customers/:id | Show single customer|
| DELETE | /api/customers/:id | Delete single customer |
| GET | /api/rentals | List all rentals sorted by dateOut |
| POST | /api/rentals | Create a new rental |
| GET | /api/users/me | Show current user |
| POST | /api/users | Create a user |
| POST | /api/auth | Authenticate a user |

