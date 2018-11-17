<p align="center">
  <img src="https://user-images.githubusercontent.com/410358/48467641-68feff80-e7e1-11e8-8e6d-94adf38191f6.png"/>
</p>

---

# Example React - Apollo - GraphQL App

An example starter application for a React / Apollo Client project & an example GraphQL server implementation.

## Apollo Client

Apollo Client is the best way to use GraphQL to build client applications. The client is designed to help you quickly build a UI that fetches data with GraphQL, and can be used with any JavaScript front-end.

## React 

A JavaScript library for building user interfaces.

## GraphQL

GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

# This Project

This repo contains both the front and backend implementations. 

[Front End](#front-end) relates to the /frontend directory. This directory contains the React/Apollo client application.

[Back End](#back-end) relates to the /backend directory. This directory contains the GraphQL server.

---
# Front End

## Get Started

1. **Initial Machine Setup**

    First time running the starter kit? Then complete the [Initial Machine Setup](#initial-machine-setup).

2. **Run the example app**

    First start the backend GraphQL service:

   `cd backend`

   `npm run dev`

   Then in a new terminal:

    `cd frontend`

    `npm start -s`

    This will run the automated build process, start up a webserver, and open the application in your default browser. When doing development with this kit, this command will continue watching all your files. Every time you hit save the code is rebuilt, linting runs, and tests run automatically. Note: The -s flag is optional. It enables silent mode which suppresses unnecessary messages during the build.

3. **Have a poke around with the app**

    ***Queries***

    The homepage renders the Feed component, this components parent is an Apollo client Query component which will execute the feed-query against the GraphQL. On succesful execution of this query the returned data will be available on the props of the Feed component and render.

   ***Mutations***

    Clicking on a 'thing' title will navigate the user to the Thing component, this follows the same pattern as above using an Apollo Client Query component to execute a GraphQL query and making the data avaiable on the props. This component also has a function that is passed down to the Thing component which defines what happens when a comment is created. This is used so that we can update the Apollo Client cache and mutations will be reflected in the UI. We could also have used the [refecthQueries](https://www.apollographql.com/docs/react/essentials/mutations.html#props) function, however this approach means that the create comment mutation component is much more reusable and can easily be used elsewhere in the project and perform different opertaions on successful creation of comments and saves tripes to the server.

## Initial Machine Setup

1. **Install [Node 4.0.0 or greater](https://nodejs.org)**

    (5.0 or greater is recommended for optimal build performance)
    Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm).

2. **Install [Git](https://git-scm.com/downloads)**.

3. **[Disable safe write in your editor](https://webpack.js.org/guides/development/#adjusting-your-text-editor)** to assure hot reloading works properly.

4. Complete the steps below for your operating system:

    ### macOS

    * Install [watchman](https://facebook.github.io/watchman/) via `brew install watchman` or fswatch via `brew install fswatch` to avoid [this issue](https://github.com/facebook/create-react-app/issues/871) which occurs if your macOS has no appropriate file watching service installed.

    ### Linux

    * Run this to [increase the limit](http://stackoverflow.com/questions/16748737/grunt-watch-error-waiting-fatal-error-watch-enospc) on the number of files Linux will watch. [Here's why](https://github.com/coryhouse/react-slingshot/issues/6).

        `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`.

    ### Windows
    
    * **Install [Python 2.7](https://www.python.org/downloads/)**. Some node modules may rely on node-gyp, which requires Python on Windows.
    * **Install C++ Compiler**. Browser-sync requires a C++ compiler on Windows.
    
      [Visual Studio Express](https://www.visualstudio.com/en-US/products/visual-studio-express-vs) comes bundled with a free C++ compiler.
      
      If you already have Visual Studio installed:
      Open Visual Studio and go to File -> New -> Project -> Visual C++ -> Install Visual C++ Tools for Windows Desktop.
      The C++ compiler is used to compile browser-sync (and perhaps other Node modules).

---

## Having Issues? Try these things first

1. Make sure you ran all steps in [Get started](#get-started) including the [initial machine setup](#initial-machine-setup).
2. Run `npm install` - If you forget to do this, you'll see this: `babel-node: command not found`.
3. Install the latest version of Node. Or install [Node 5.12.0](https://nodejs.org/download/release/v5.12.0/) if you're having issues on Windows. Node 6 has issues on some Windows machines.
4. Make sure files with names that begin with a dot (.editorconfig, .gitignore, .npmrc) are copied to the project directory root. This is easy to overlook if you copy this repository manually.
5. Don't run the project from a symbolic link. It may cause issues with file watches.
6. Delete any .eslintrc that you're storing in your user directory. Also, disable any ESLint plugin / custom rules that you've enabled within your editor. These will conflict with the ESLint rules defined in this project.
7. Make sure you don't have NODE_ENV set to production on your machine. If you do then the [development dependencies won't be installed](https://github.com/coryhouse/react-slingshot/issues/400#issuecomment-290497767). Here's [how to check](http://stackoverflow.com/a/27939821/26180).
8. Install watchman with `brew install watchman` if you are having the following error after an initial `npm start -s`:

    ```bash
    2017-09-05 00:44 node[68587] (FSEvents.framework) FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() => (null) (-22)
    2017-09-05 00:44 node[68587] (FSEvents.framework) FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() => (null) (-22)
    events.js:160
          throw er; // Unhandled 'error' event
          ^

    Error: Error watching file for changes: EMFILE
        at exports._errnoException (util.js:1022:11)
        at FSEvent.FSWatcher._handle.onchange (fs.js:1406:11)
    ```

9. Tip: Things to check if you get an `npm run lint` error or build error:

    * If ESW found an error or warning in your project (e.g. console statement or a missing semi-colon), the lint thread will exit with `Exit status 1`. To fix:

      1. Change the `npm run lint` script to `"esw webpack.config.* src tools; exit 0"`
      1. Change the `npm run lint:watch` script to `"esw webpack.config.* src tools --watch; exit 0"`

      > Note: Adding `exit 0` will allow the npm scripts to ignore the status 1 and allow ESW to print all warnings and errors.
    * Ensure the `eslint`/`esw` globally installed version matches the version used in the project. This will ensure the `esw` keyword is resolved.

10. Rebuild node-sass with `npm rebuild node-sass` if you are having and error like `Node Sass does not yet support your current environment on macOS XXX` after an initial `npm start -s`.

---

## Technologies

This example offers a rich development experience using the following technologies:

| **Tech** | **Description** |**Learn More**|
|----------|-------|---|
|  [React](https://facebook.github.io/react/)  |   Fast, composable client-side components.    |  https://facebook.github.io/react/ |
|  [React Router](https://github.com/reactjs/react-router) | A complete routing library for React |https://github.com/reactjs/react-router|
|  [Babel](http://babeljs.io) |  Compiles ES6 to ES5. Enjoy the new version of JavaScript today.     | [ES6 REPL](https://babeljs.io/repl/), [ES6 vs ES5](http://es6-features.org), [ES6 Katas](http://es6katas.org),   |
| [Webpack](https://webpack.js.org) | Bundles npm packages and our JS into a single file. Includes hot reloading via [react-transform-hmr](https://www.npmjs.com/package/react-transform-hmr). | [Quick Webpack How-to](https://github.com/petehunt/webpack-howto) |
| [Browsersync](https://www.browsersync.io/) | Lightweight development HTTP server that supports synchronized testing and debugging on multiple devices. | [Intro vid](https://www.youtube.com/watch?time_continue=1&v=heNWfzc7ufQ)|
| [Jest](https://facebook.github.io/jest/) | Automated tests with built-in expect assertions and [Enzyme](https://github.com/airbnb/enzyme) for DOM testing without a browser using Node. |  | 
| [ESLint](http://eslint.org/)| Lint JS. Reports syntax and style issues. Using [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) for additional React specific linting rules. | |
| [SASS](http://sass-lang.com/) | Compiled CSS styles with variables, functions, and more. | [Pluralsight Course](https://www.pluralsight.com/courses/better-css)|
| [PostCSS](https://github.com/postcss/postcss) | Transform styles with JS plugins. Used to autoprefix CSS |
| [Editor Config](http://editorconfig.org) | Enforce consistent editor settings (spaces vs tabs, etc). | [IDE Plugins](http://editorconfig.org/#download) |
| [npm Scripts](https://docs.npmjs.com/misc/scripts)| Glues all this together in a handy automated build. | 

The starter kit includes a working example app that puts all of the above to use.

---


---
# Back End

This GraphQL server is based of my example GraphQL server

Here is tha background on this:

This starter kit came from the result of building a GraphQL server layer as part of a micro-services platform for one of my clients.

The GraphQL server sat above many downstream services (such as articles, comments, reactions, employees etc.) and orchestrated calls to these downstream services. This allowed for a very clean and flexible api for clients to integrate with.

This starter kit is a very stripped back example, just enough to get started building your own GraphQL server instance including a framework to run your own integration test using [Mountebank](http://www.mbtest.org) to mock downstream services.

### Production Ready?

What I mean when I say production ready is that this starter kit contains the basics that will be required to run this in a production environment. Which basically means that you can easily write tests to verify that it works as expected. Going on from this I would encourage you to look into layering fault tolerance, circuit breaking and caching on top of this basic starter kit.

## Setting Up
1. Clone the repo.
2. `npm install`

To run the project in development mode, use `npm run dev`. The local endpoint is `http://localhost:3005/`.

To build the project for production, use `npm run build`.

## Tests
With Docker installed, use `docker-compose up --build` to run the tests. 

For more information on tests, see the test wiki page.

## Sending GraphQL Queries

Try hitting the GraphQL server with Postman.


Post the following to `http://localhost:3005/`

To get thing with ID 1 and all it's comments

```javascript
{
   "query": "query { thing(id: 1) { id, title, body, comments { id, body } } }"
}
```

To post a comment to blog id 1
```javascript
{
	"query": "mutation { createComment(thingId: 1, body: \"test comment\") { id, body }}"
}
```
## Architecture
To give you some context here is how this GraphQL server instance would fit into a wider microservices based platform.

![example architecture](https://user-images.githubusercontent.com/410358/39463380-99b19e2a-4d0f-11e8-8b79-8a91622c9a5a.png)

## Resolving Queries to Downstream Services

Below illustrates how the GraphQL server intelligently resolves queries to different downstream services. Only requesting data from services as and when required.

### Example Request Querying for Article Details

GraphQL resolves this query and only initiates a single request to the Article Service

![Resolves query to one service](https://user-images.githubusercontent.com/410358/39463358-7017d110-4d0f-11e8-998b-5506de5ef563.png)

### Example Request Querying for a Full Fat Article (Includes comments)

GraphQL resolves this query by initiating calls to multiple downstream services and returns a fuller Article response that includes an Articles Comments.

![Resolves query to one service](https://user-images.githubusercontent.com/410358/39463375-95279b02-4d0f-11e8-8d51-811e1c26c71c.png)