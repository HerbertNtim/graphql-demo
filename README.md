<p align="center">
  <img src="https://graphql.org/img/logo.svg" alt="GraphQL Logo" width="150" />
</p>

<h1 align="center">GraphQL Basics</h1>

<p align="center">
  This repository contains my learning notes and practice examples from exploring the basics of GraphQL.
</p>

---

GraphQL is a query language for your API, and a runtime for executing those queries with your existing data. Unlike REST, GraphQL allows clients to request exactly the data they need, making APIs more flexible and efficient.

This repository is meant to serve as a personal reference and a helpful resource for anyone getting started with GraphQL.

## 📘 Type Definitions (`typeDefs`)

In GraphQL, **type definitions** (often referred to as `typeDefs`) define the structure of the data — essentially acting as a blueprint of what can be queried, mutated, or subscribed to in the API.

### 🛠️ What They Do

- Describe **what data** is available in the API.
- Define **types**, **queries**, **mutations**, and **relationships**.
- Help tools like GraphQL Playground or Apollo Studio understand the schema.

### 🍽️ Real-world Analogy

> Imagine you're at a restaurant.  
> The **menu** is the `typeDefs` — it lists everything the restaurant offers.  
> You (the client) can only order what's on the menu, just like how a GraphQL client can only query or mutate what's defined in the `typeDefs`.

### 💡 Example

```graphql
type Book {
  title: String
  author: String
}

type Query {
  books: [Book]
}
```

## 🧠 Resolvers

**Resolvers** are functions that provide the actual data for the fields defined in your `typeDefs`. While the type definitions specify **what** data can be requested, resolvers define **how** that data is fetched.

### 🔍 What They Do

- Handle the logic for fetching data when a query, mutation, or subscription is executed.
- Can fetch data from databases, APIs, or any other data sources.
- Are matched with the fields defined in the `typeDefs`.

### 🍽️ Real-world Analogy

> Think of a restaurant again:  
> The **menu** is the `typeDefs`.  
> The **resolvers** are the **chefs** in the kitchen.  
> When you (the client) place an order (make a query or mutation), the chefs (resolvers) prepare the dish (data) for you.

### 💡 Example

```javascript
const resolvers = {
  Query: {
    books: () => [
      { title: 'The Alchemist', author: 'Paulo Coelho' },
      { title: '1984', author: 'George Orwell' }
    ],
  },
};

