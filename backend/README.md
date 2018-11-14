# Starter Kit for a Production Ready* GraphQL Server Instance

## Introduction

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

To get blog with ID 1 and all it's comments

```javascript
{
   "query": "query { blog(id: 1) { id, title, body, comments { id, body } } }"
}
```

To post a comment to blog id 1
```javascript
{
	"query": "mutation { createComment(blogId: 1, body: \"test comment\") { id, body }}"
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