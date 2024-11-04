# JOB PORTAL
Welcome to the Job Platform for Techies! This is a web application designed to connect technology professionals with job opportunities in various tech fields. Our platform aims to simplify the job search process and help employers find the right talent.


-- For Extra Information -- 
<br>

npm i express mongoose nodemon jsonwebtoken bcryptjs cookie-parser dotenv cors  ( // importing nodejs modules)

<b>Express:</b>

A fast, minimalist web framework for Node.js. It simplifies routing, handling requests and responses, and middleware integration, making it easier to build robust web applications.
Use case: To handle HTTP requests and route users to different endpoints in a web app.

<b>Mongoose:</b>

A MongoDB object data modeling (ODM) library that provides a schema-based solution to model data, allowing you to define data structure, enforce validation, and manage relationships.
Use case: To interact with a MongoDB database easily, defining schemas and managing the database objects in a structured way.

<b>Nodemon:</b>

A tool that automatically restarts the Node.js server whenever file changes in your project are detected. It speeds up development by not requiring manual server restarts.
Use case: To improve development productivity by enabling hot-reloading in Node.js applications.

<b>jsonwebtoken (JWT):</b>

A library for generating and verifying JSON Web Tokens. JWT is used for secure user authentication by creating encrypted tokens that can validate a user’s identity without the need for continuous server-side sessions.
Use case: To implement secure user authentication and authorization mechanisms in a web app.

<b>bcryptjs:</b>

A library for hashing passwords using bcrypt, which adds an extra layer of security by making password encryption slow enough to resist brute-force attacks.
Use case: To hash and securely store user passwords in the database.

<b>cookie-parser:</b>

Middleware that parses cookies from incoming requests, allowing you to easily read and manage cookies (e.g., for managing sessions, authentication tokens, etc.).
Use case: To handle cookies in your app, typically for session management or storing authentication tokens.

<b>dotenv:</b>

A module for loading environment variables from a .env file into process.env. It allows you to manage sensitive configuration variables (like API keys, database URLs) outside of your codebase.
Use case: To safely manage configuration settings and environment variables in a project.

<b>cors:</b>

A middleware that enables Cross-Origin Resource Sharing (CORS), which allows your API or web app to handle requests from different origins (domains).
Use case: To enable API access from other domains, such as when building an API that a frontend application (hosted on a different domain) needs to interact with.

<br>Multer and Cloudinary</br>
We use Multer to handle file uploads for profile photos. When a user uploads a file, Multer processes it and extracts the necessary data. The uploaded file is then passed to Cloudinary, which stores the image in the cloud. After successfully uploading, Cloudinary returns a publicly accessible URL for the image. This URL is then saved in the database and can be used to display the profile photo.

