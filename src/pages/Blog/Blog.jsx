import React from "react";

const Blog = () => {
  return (
    <>
      <h2 className="text-center text-9xl">Blog</h2>
      <ul className="mt-20 text-black">
        <li>
          <p className="font-bold">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </p>
          <p>
            An access token is a credential used to authenticate and authorize
            access to a resource, while a refresh token is used to obtain a new
            access token without requiring the user to re-enter credentials.
            <br />
            When a user authenticates, an access token is issued and stored on
            the client-side (e.g., browser's memory or local storage). The token
            is included in requests to access protected resources. If the token
            expires, a refresh token is used to obtain a new access token.
            Tokens should be securely stored and protected from unauthorized
            access.
          </p>
        </li>
        <li>
          <p className="font-bold">Compare SQL and NoSQL databases?</p>
          <p>
            SQL databases are structured, use a fixed schema, and are suitable
            for complex relationships and structured data. <br />
            NoSQL databases are unstructured, schema-less, scalable, and better
            for handling large volumes of varied data with flexible schemas.
            They are often used in distributed systems and for real-time
            applications.
          </p>
        </li>
        <li>
          <p className="font-bold">
            What is express js? What is Nest JS (google it)?
          </p>
          <p>
            Express.js is a minimalistic web application framework for Node.js,
            providing a set of robust features for building web applications and
            APIs. It allows developers to handle HTTP requests, define routes,
            and manage middleware. <br />
            Nest.js is a progressive Node.js framework for building efficient
            and scalable server-side applications. It combines elements of
            TypeScript, Express.js, and other libraries to offer a robust
            development ecosystem with features like dependency injection,
            modular architecture, and built-in support for TypeScript, making it
            suitable for building enterprise-grade applications.
          </p>
        </li>
        <li>
          <p className="font-bold">
            What is MongoDB aggregate and how does it work (google it)?
          </p>
          <p>
            MongoDB's aggregate is a powerful query operation that processes
            data records and returns computed results. It allows for complex
            data manipulations and aggregations, such as grouping, filtering,
            sorting, and performing mathematical operations on data. It
            pipelines multiple stages to transform and analyze data in a
            flexible and efficient manner.
          </p>
        </li>
      </ul>
    </>
  );
};

export default Blog;
