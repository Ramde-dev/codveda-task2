# Codveda Task 2: Simple REST API

## Project Overview
This project is a simple REST API built with Node.js and Express.js as part of the Codveda Technologies Full-Stack Development Internship.

The API performs CRUD (Create, Read, Update, Delete) operations on products.

## Technologies Used
- Node.js
- Express.js
- JavaScript
- Thunder Client for API testing

## Features
- Retrieve all products
- Retrieve a single product by ID
- Create a new product
- Update an existing product
- Delete a product
- Validate product data
- Handle missing products and unknown routes with appropriate HTTP status codes

## Getting Started

### Prerequisites
Install Node.js on your computer.

### Installation
Clone the repository, open the project folder in your terminal, and run:

```bash
npm install
```

### Run the Server

```bash
node server.js
```

The API will run at:

http://localhost:3000

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Welcome message |
| GET | `/api/products` | Retrieve all products |
| GET | `/api/products/:id` | Retrieve a product by ID |
| POST | `/api/products` | Create a product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |

## Example Product

```json
{
  "name": "Laptop",
  "price": 850000
}
```

For POST and PUT requests, send JSON data with the appropriate `Content-Type: application/json` header.

## Testing
The endpoints were tested using Thunder Client in Visual Studio Code.

## Data Storage
Products are stored in memory. Changes are not permanent and reset when the server restarts.

## Author
Ramadhani Ally Mbavu

GitHub: https://github.com/Ramde-dev
