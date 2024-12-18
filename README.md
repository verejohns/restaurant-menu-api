# Restaurant Menu API

Node project to provide data to a restaurant menu application.


## Features

Provide Apis to get all menus, get a menu by id, add new menu, update a menu by id and delete a menu.


## Technical Skills

- GraphQL API with Query and Mutation support

- Sequelize ORM for database management

- MySQL as the database backend

- Migrations and seed data

- Jest for unit testing

- Supertest for API testing


## Prerequisites

Before starting, ensure you have the following installed:

- Node.js (v14 or higher)

- npm or yarn

- MySQL


## Setup Instructions

1. Clone the Repository

  ```bash
  $ git clone <repository_url>
  $ cd restaurant-menu-api
  ```

2. Install Dependencies

  ```
  npm install
  ```

3. Configure Environment Variables

  Copy the .env.example file, rename to .env and edit the content to set up your MySQL database credentials:

  ```bash
  PORT=4000
  DB_USERNAME=root
  DB_PASSWORD=<your_password>
  DB_HOST=127.0.0.1
  DB_DIALECT=mysql
  DB_NAME=restaurant_menu
  TEST_DB_NAME=restaurant_menu_test
  PROD_DB_NAME=restaurant_menu_production
  ```

4. Create database (restaurant_menu and restaurant_menu_test) in local MySQL and run Migrations and Seed Data

  ```bash
  $ npx sequelize-cli db:migrate
  $ npx sequelize-cli db:seed:all
  ```

5. Start the Server

  ```
  npm start
  ```

The server will start at http://localhost:4000/graphql.


## GraphQL API Endpoints

### Queries

- Fetch All Menus

  ```bash
  query {
    menus {
      id
      name
      type
      price
    }
  }
  ```

- Fetch a Menu by ID

  ```bash
  query {
    menu(id: 1) {
      id
      name
      type
      price
    }
  }
  ```

### Mutations

- Add a New Menu

  ```bash
  mutation {
    addMenu(name: "Iceberg Wedge Salad with House Cured Bacon – tomato salsa gorgonzola", type: "appetizers", price: 7.5) {
      id
      name
      type
      price
    }
  }
  ```

- Update a Menu

  ```bash
  mutation {
    updateMenu(id: 1, name: "Iceberg Wedge Salad with House Cured Bacon – tomato salsa gorgonzola", type: "appetizers", price: 7.5) {
      id
      name
      type
      price
    }
  }
  ```

- Delete a Menu

  ```bash
  mutation {
    deleteMenu(id: 1) {
      id
    }
  }
  ```


## Testing

Run Tests

```
npm test
```