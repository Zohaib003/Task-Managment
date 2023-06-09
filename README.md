# Task-Managment

Welcome to my project! This project is built using Node.js, Express, Mongoose, and utilizes npm for package management. In this project, I have created API endpoints which are performing CRUD operations. A simple front-end(not created by me) has been added if you donot want to bother using POSTMAN or anyother api testing tool.

# Table of Contents

• Installation                                                                                                                                                                                                                                                                                                               
• Usage                                                                                                                                                                                                                                                                                                                       
• Database                                                                                                                                                                                                                                                                                                                   
• API Endpoints                                                                                                                                                                                                                                                                                                               
• Validation                                                                                                                                                                                                                                                                                                                 
• Contributing                                                                                                                                                                                                                                                                                                               
• License                                                                                                                                                                                                                                                                                                                     

# Installation

To get started with this project, follow the steps below:

**1.** Clone the repository:                                                                                                                                                                                                                                                                                                 
git clone[https://github.com/Zohaib003/Task-Managment]

**2.** Install project dependencies:                                                                                                                                                                                                                                                                                         
npm install

## Available Scripts

In the project directory, you can run the following npm scripts:

### `npm install`

Installs all the project dependencies specified in the `package.json` file. This command should be run before running the project for the first time or when there are changes to the dependencies.

[Learn more about `npm install`](https://docs.npmjs.com/cli/v7/commands/npm-install)

### `npm start`

Starts the Node.js application. This command typically runs the `app.js` file or the entry point specified in the `package.json` file.

[Learn more about `npm start`](https://docs.npmjs.com/cli/v7/commands/npm-start)

### `npm start`

Starts the development server with hot reloading. I have used nodemon which keeps an eye over the changes made in the file and restart the server automatically.
An alternate for this command is 'npm run dev'
[Learn more about `npm run dev`](https://docs.npmjs.com/cli/v7/commands/npm-run-script)

# Databse

A simple database with a single collection named Task(name, completed) is created. Just create a .env file and add your MONGO_URI to get started.

# Usage

You can create a task in the Mongo Database and then fetch, update, delete those tasks.

## Get Tasks

Send a GET request to /api/v1/tasks to get all the tasks.

## Create Task

Send a POST request to /api/v1/tasks to create a task.

## Get a Single Task

Send a GET request to /api/v1/tasks:id along with task id to get the desired task.

## Update a Task

Send a PATCH request to /api/v1/tasks:id along with the task id to update the task.

## Delete a Task

Send a DELETE request to /api/v1/tasks:id along with the task id to delete the task.

# API Endpoints

**Base Url**: _/api/v1_
The following API endpoint(s) are available:

• GET /api/v1/tasks Get all Tasks.  
• POST /api/v1/tasks Create a Task.  
• GET /api/v1/tasks:id Get a single Task.  
• PATCH /api/v1/tasks:id Update a Task.  
• DELETE /api/v1/tasks:id Delete a Task.

# Validation

The application includes validation getting products. It ensures that the required fields are provided and validates the data format. If any validation errors occur, appropriate error messages will be returned.

# contributing

Contributions to this project are welcome. If you have any ideas, improvements, or bug fixes, feel free to submit a pull request. Please follow the existing code style and include tests for any new features.

# License

You are free to use, modify, and distribute the code.

## Additional Resources

For more information about npm and its commands, you can refer to the official npm documentation:

- [npm Documentation](https://docs.npmjs.com/)
