React and Redux Trello board
============================

Built with [React](https://reactjs.org/) and [Redux](redux.js.org), this is a quick Trello-like board.
You can add your own boards, lists in boards, cards in lists and move (drag and drop) cards between lists

Workflow
--------

Some of the technologies used include:

- [gulp](https://gulpjs.com/) as the task runner with:
  - [browserify](http://browserify.org/)  to bundle the javaScript
  - [babel](https://babeljs.io/) to compile my JS to I can use es6 features that may not yet be available in some browsers
  - [sass](http://sass-lang.com/) as my CSS preprocessor

Other resources
---------------

Some other resources I used are

- [React-DND](https://react-dnd.github.io) for drag and drop functionality
- [React Router](https://github.com/ReactTraining/react-router) for routing functionality


Run it yourself
---------------

Clone this repo and run `npm  install` (if you have [Node](https://nodejs.org/en/) installed) in your terminal. After installation, install [gulp](https://gulpjs.com/) globally by running `npm install -g gulp`. 
When that's done, just run the default gulp task by typing `gulp` 
