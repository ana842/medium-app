# Medium Clone App

## The whole project is divided into three modulues-
1. **medium-backend** - This module contains the backend
2. **common** - This module contains the common exports required by both frontend & backend like the types
3. **medium-frontend** - This module contains the frontend



### medium-backend -
```txt
Routes Used Here -
1. User Routes ->
** Add hashing passwords
    1.1 Sign Up Route - 
        - Used to sign up new user
        - Requires email, password & name(optional) as inputs
        - Returns a success message if user is created successfully
        - A JWT is also created and returned to back user

    1.2 Sign In Route -
        - Used to sign in existing user
        - Requires email & password to signin
        - JWT is returned back to user & stored in local storage so that user can do rest of the operations

2. Blog Routes->
** Add pagination further
    2.1 Authentication Middleware -
        - Middleware to authenticate all the requests coming to the blog endpoint
        - Validates the Authorization header passed in the request
        - Verifies the token with the Secret
        - Extracts the author ID for and pass it down for further use
    
    2.2 Create Blog Route -
        - Used to create a new blog post
        - Requires title, content inputs
        - Gets the author ID from the context

    2.3 Edit Blog Route
        - Used to edit an existing blog post
        - Requires title, content & blog ID as inputs
        - Updates the post where blog ID matches 

    2.4 Get Blog Route
        - Used the show the user's blog
        - Takes the ID from the url parametes and returns the blog

    2.5 Get Bulk Blog Route
        - Used to get all the blogs 
```
### common
```
Added zod object & types for all the input objects in backend/frontend for validation. This has been pushed as a package and is imported for further use.   
```


### Changes Made -
```
1. Updated the Auth Middleware
2. Zod Validation - for sanitizaing the body
3. Added Zod validation to all the post routes
```

### Changes Made -
```
1. Added the Forontend Module - (Signup & Signin Pages)
2. Added CORS Middleware in Backend
```