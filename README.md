# Book Management System Backend

![GitHub package.json version](https://img.shields.io/github/package-json/v/rodnierbc/book-management-system-frontend)
![GitHub](https://img.shields.io/github/license/rodnierbc/book-management-system-frontend)

## Description

This project is the frontend for a Book Management System. It allows users to perform CRUD operations on books.

## Features

- Get all books:
  - Retrieves all books from the Book Management System API and displays them.

- Create a new book:
  - Provides a form to enter book details and add a new book to the system.

- Update an existing book:
  - Allows to modify the details of an existing book, such as its title, author and other attributes.

- Delete a book:
  - Allows to remove a book from the system permanently.

## Technologies Used

- React
- Apollo Client
- GraphQL
- Tailwind CSS

## Installation

To get a local copy up and running, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/your-username/book-management-system-frontend.git
cd book-management-system-frontend
```
2. Install the dependencies:

```bash
npm install
```

## Environment Variables

For the application to run, it needs a connection to the backend API. This is specified using the environment variable BOOK_MANAGEMENT_SYSTEM_URI. Create a .env file in the root directory of your project and add the following:

```
BOOK_MANAGEMENT_SYSTEM_URI="http://localhost:8000/graphql"
```

## Usage

To start the development server:
```
npm run start
```

## Author

Rodnier Borrego



