# Agni SDK

A client-side library for Node.js that allows users to create a serverless architecture by deploying their own Django-based backend in a Docker container.

## Overview

Agni SDK is designed to provide users with the flexibility to deploy their backend on their own servers, enabling a personalized serverless architecture similar to Firebase. With the Agni SDK client-side library, users can perform CRUD operations effortlessly.

## Installation

To use Agni SDK in your Node.js project, you can install it via npm:

```shell
npm install agni-sdk
```

## Getting Started

To get started with Agni SDK, you need to have a running Django-based backend deployed in a Docker container. Once your backend is set up, you can use the following code snippet as an example to perform CRUD operations:

```javascript
const AgniSDK = require('agni-sdk');

// Create a new instance of the Agni SDK
const agni = new AgniSDK('http://your-backend-url');

// Perform CRUD operations
const createResponse = await agni.create('users', { name: 'John Doe', age: 30 });
const readResponse = await agni.read('users', 'user_id');
const updateResponse = await agni.update('users', 'user_id', { name: 'Jane Doe', age: 32 });
const deleteResponse = await agni.delete('users', 'user_id');
```

## API Documentation

For detailed information on the Agni SDK API and its available methods, refer to the [API Documentation](https://your-backend-url/docs).

## Contributing

If you would like to contribute to Agni SDK, please follow our [Contributing Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

We would like to express our gratitude to the following individuals and organizations for their contributions and support.

## 👏🌟 Special Thanks

We would like to express our gratitude to the following individuals and organizations for their contributions and support. 🙌
