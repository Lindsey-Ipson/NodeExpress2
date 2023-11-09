# Bugs

## Bug #1

There is no JSON validation when users register. Therefore, invalid or incomplete data may be added to the database

Added a userRegister JSON schema to validate potential new user data before being added to database

## Bug #2

There is no JSON validation when users/admins try to update users. Therefore, user info in the database can be changed to be invalid or incomplete and any column can be updated, not just the columns meant to be updated

Added a userUpdate JSON schema to validate potential changes to users' first names, last names, emails, and phones, and disallowing changes to username or password

## Bug #3

The SQL Update query (within function sqlForPartialUpdate) is returning *, which can lead to security breaches as if any sensitive columns are added to use user table later on, this may be available to users

Changed the `RETURNING *` line to `RETURNING username`

## Bug #4

The user patch route is only allowing admins to update user info, when users are supposed to be able to update their own info. This is because `requireAdmin`  is included as a middleware in that route which throws an error and passes to the error handler when the user is other than a admin

## Bug #5

In the login route in auth.js, User Authenticate is not awaited, therefore user is made to equal a promise pending

## Bug #6

















