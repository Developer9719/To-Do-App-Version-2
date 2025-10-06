# todoList
*** This is a breakpoint in the lessons, this will show everything I've learned (listed below) in action and I will come back to this for help with these topics in the future ***

# Use this project to practice everything I learned so far:
## CSS Grid and/or Flexbox: Used in this project
## Object, Object Literals, Object Constructors: Used in this project
## Factory Functions: Used in this project
## IIFE: Use for the localStorage JS function to retrieve projects and to-do's on website load
## Classes: Used in this project
## ES6 Modules
  - seperate script files that make use of imports and exports 
## NPM
  - to install packages for use in the project
## Webpack
  - bundles project code and dependancies and assets like CSS and images into smaller, optimized bundles for the browser to read
  - starts with the defined entry point to create a dependancy graph by tracing imports for modules (seperate script files) and assets in the project
  - loaders are used to process non JS code 
  - plugins can be used to expand functionality for things like minimizing code
  - after all this it outputs a bundle code for the browser
## JSON 
  - store all current projects and there to-do's in a JSON string then store that in the localStorage property to make them stay across refreshes

# Log terminal commands used
## Webpack Commands
  
  - npm init -y: Creates a package.json which stores all dependancies of the project, defines scripts to automatically run tasks at certain points amount other jobs
    - main property is the entry point for a package or module, and is loaded first when the package is used 
  - npm install --save-dev webpack webpack-cli
    - installs and saves webpack and the webpack-cli as dev dependancies, this updates in package.json automatically and creates a node_modules folder as well as creating a package-lock.json ()
  - npm install webpack-dev-server: Installs a dev server with live reload into the project and adds this into the package.json as well
  - npm install webpack-merge
  - npm install html-webpack-plugin: Installs the HTMLWebpackPlugin which uses the output bundle file in the package.json file as the script tag in the HTML. It does this automatically

  - npm install css-loader: Converts CSS to JS, handles url() images. The purpose is to apply styles per module as opposed to globally in 1 stylesheet (outputs a string)
  - npm install style-loader: Takes the string from css-loader and applies the styles
    - Write CSS in its own file
    - Import the file into the JS module where it's needed

  - "openServer": "npx webpack serve --config webpack.dev.js": Custom script created in package.json to start the server

  - npx webpack serve --config webpack.dev.js: Starts the live server with the live reload. This one is need as opposed to npx webpack serve because there is no webpack.config.js file and it is instead split into 3 files
    - You wont see the dist folder or files within it during development as it creates those in memory, they only appear after production or running npm run build

# Other Information  
## Object Constructors
Creates multiple objects with the same properties and methods
Create an object constructor with a regular function and a capital letter on the name 
  ```js
  export function Projects(title) {
      this.title = title;
      this.todos = [];
  }
  ```
Use the 'this' keyword to assign properties and methods to the new object that will be created

Create a new Projects object: const projectOne = new Projects('Project Title');
console.log(projectOne); - Will output { title: 'Project Title' }

## Factory Functions
Creates and returns a new object that does not require using the 'new' keyword
  ```js
  export const createToDo = (title, description, dueDate, priority) => {
      return { // This is the returned object litteral
          title,
          description,
          dueDate,
          priority: ['low', 'medium', 'high'],
          notes,
          isComplete: false,
          toggleComplete() {
              this.isComplete = !this.isComplete;
          }
      };
  };
  ```
Create new todo: const myNewTodo = createToDo('Finish Homework', 'Complete math problems', '2025-09-22', 'high');

console.log(myNewTodo.title); // "Finish Homework"
console.log(myNewTodo.isComplete); // false

myNewTodo.toggleComplete();
console.log(myNewTodo.isComplete); // true

## Classes
```js
class AppManager { // PascalCase: This is the convention for class names
    constructor() { // Automatically called when using the new keyword to create a new object of the class
        this.projects = [];
    }
    // The bottom 2 are instance methods that can be called on any created object
    addProject(project) { // projects is an object
        this.projects.push(project);
    }

    getProjects() {
        return this.projects;
    }
}
```
Create a new instance of the AppManager
const myApp = new appManager();

Call the addProject method to add a new project
myApp.addProject({ title: 'Work Tasks' });

Call the getProjects method to see the data
console.log(myApp.getProjects()); // Output: [{ title: 'Work Tasks' }]

Static Factory Method is a function within a class that returns an instance of the class
```js
class MyClass {
  static div() {
    return {

    }
  }
}
```
MyClass.div() - Calling the static factory method

# Design
- Designed like the task list in the Finch app
- Top task is always the project name
- When you click on it the tasks for the project are expanded underneath designed the same way the project bubble is just smaller
- When you click on the project name edit and delete buttons are also displayed for the tasks and the project on the right hand side

# Coding Tasks
- Functionality First 
  - Task and Project specific requirements listed in the individual files
  - General Requirements
    - Interface Actions
      - View all projects
      - View all to-do's in each project
      - Expand each to-do and project to edit there details
      - Basic CRUD actions for all projects and to-do's 
    - Practice using external libraries with Webpack IE: date-fns
    - Make use of localStorage to have the projects and to-do's persist across reloads and relaunches
- Design Last