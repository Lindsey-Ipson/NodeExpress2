### Conceptual Exercise

Answer the following questions below:

##### What is a JWT?

A JWT is a JSON web token, which is an open standard method of sharing token across different services. JWTs consist of a header, payload, and signature. The header simply contains metadata about the token (type and signing algorithm). Payloads are typically objects and can store any information such as user ID, admin status, etc., but they are encoded not encrypted meaning no confidential information should be placed in the payload. Signatures are the result of the header and payload signed by the secret key, which then allows the JWT to later be validated.

##### What is the signature portion of the JWT?  What does it do?

The signature portion of the JWT includes a version of the header and payload signed by a secret key. It uses the signing algorithm specified in the header to "isgn" the header and payload with the secret key. This allows the JWT to be validated as having come straight from who the payload claims it came from and ensures that the message has not been changed along the way.

##### If a JWT is intercepted, can the attacker see what's inside the payload?

Yes, anyone will be able to intercept a JWT and read the payload as it is encoded but not encrypted.

##### How can you implement authentication with a JWT?  Describe how it works at a high level.

JWTs allows for authentication by signing the header and payload with a secret key, ensuring that the payload has not been tampered with. As a result, any user information such as user ID and user status/privileges can be included in the payload and verified as genuine on the other side.

##### Compare and contrast unit, integration and end-to-end tests.

Unit tests are the smallest test and used to test individual units of code in isolation, usually single functions, methods, or classes. 

Integration tests are used to test interactions between different components or modules of an application, usually multiple functions or classes, and ensures that they work together correctly. 

End-to-end tests are the most comprehensive and are used to test the enture application from start to finish. For client side applications, end-to-end tests can even simulate real-world user interactions, such as "typing" into fields and clicking a "submit" button to a form. They can ensure that the HTML elements of the application are properly connected to the code base and function as expected.

##### What is a mock? What are some things you would mock?

Mocking can be used to test an object that has dependencies on other objects. It can help replace those complex objects on which the object undergoing testing depends. In order to isolate the behavior that is being tested, other objects can be replaced by "mocks" which simulate that object's behavior. This can allow for faster testing, especially if API calls would otherwisde have to be made. It also helps isolate the code being tested by ensuring that the tests do not depend on any external technology; instead the tests determine only that the behavior of the object/function itself works correctly. Additionally, mocking can help when impure functions are involved, such as `Math.random()`.

##### What is continuous integration?

Continuous integration is the act of merging small code changes to an application frequently as opposed to large code changes once development cyclyces are considered complete. Continuous integration can automate testing whenever changes or new code are pushed, and if any tests fail, it can automatically reject those changes/code additions.

##### What is an environment variable and what are they used for?

Environment variables allow you to configure parts of an application inclduing certain variables or behaviors. They are stored in key-value format and are commonly used to set such things as secret keys, API keys, and configuration settings (development or production), or to access command line arguments. They can be very useful when you want to set customize variables or behaviors without hardcoding them.

##### What is TDD? What are some benefits and drawbacks?

TDD stands for Test Driven Development, which is the process of writing tests first before writing any of the actual code. In TDD, you write all of the tests (which will initally al fail), and then start writing code specifically to pass all of the tests. Benefits include more testable and modular code, however drawbacks include increased time to production.

##### What is the value of using JSONSchema for validation?

JSONSchema helps to validate incoming JSON to make sure it matches the data types and formats expected to be added to a database. In this way, it can prevent corrupt to incomplete data from being added to the database which can cause errors down the line. 

##### What are some ways to decide which code to test?

Although it is important not to get overly hung up on achieving perfect test coverage percentages, it is important to try to make sure as much code is tested as realistically possible. Some important areas for test for include that functions return what is expected, and behave appropriately when passed unexpected but potential arguments. It is also important to test that different sections of the code interact correctly, and that if user inputs are accepted into the code, that they are checked for necessary criteria (ie, if filtering by minLength and maxLength, that minLength is not larger than maxLength), and appropriate errors are thrown if they do not meet criteria. It is generally often a good idea to test models, routes, middleware, helper functions, configuration files, and anything else that is essential to to the application. Before deployment, it is also good to run end-to-end tests to ensure that the application will function correctly with real-world user interaction. 

##### What does `RETURNING` do in SQL? When would you use it?

When performing an `INSERT`, `UPDATE`, OR `DELETE` operation in SQL, you can return a `RETURNING` clause, which can return data that was inserted, updated, or deleted. In general, it is best to return specific columns rather than `RETURNING *`, because if new sensitive columns are added to the database after the original code was written, this sensitive data could then be returned mistakenly. 

##### What are some differences between Web Sockets and HTTP?

Web sockets allow for a continuous bidirectional connection between a client's browser and an application's server. This is very difficult to achieve using Hypertext Transfer Protocol, or HTTP, because it is a stateless model where each request is a new connection to the server. web sockets are helpful when applications need to be able to maintain communication with their clients, for instance, an application where there is user to user chatting, gaming, collaborative editing, or live notifications.

##### Did you prefer using Flask over Express? Why or why not (there is no right answer here --- we want to see how you think about technology)?
  
In general, I preferred using Express over Flask because it was easier to separate routes into their own unique files (i.e., user routes, authentication routes, message routes, etc.), which provided a more organized application file system in my opinion. Moreover, I preferred the top-down structure of Express, where functions receive a `request`, `response`, and `next` callback, which allows for the easy passing of control to the next middleware or route handler. 

