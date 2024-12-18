const request = require('supertest');
const { sequelize, Menu } = require('../models');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('../schema');
const app = express();

app.use('/graphql', graphqlHTTP({ schema, graphiql: false }));

beforeAll(async () => {
  await sequelize.sync({ force: true });
  await Menu.bulkCreate([
    { name: 'test menu1', type: 'test type1', price: 3.1 },
    { name: 'test menu2', type: 'test type2', price: 2.5 },
  ]);
});

afterAll(async () => {
  await sequelize.close();
});

describe('GraphQL API', () => {
  it('should fetch all menus', async () => {
    const query = `
      query {
        menus {
          id
          name
          type
          price
        }
      }
    `;

    const response = await request(app)
      .post('/graphql')
      .send({ query });

    expect(response.status).toBe(200);
    expect(response.body.data.menus).toHaveLength(2);
    expect(response.body.data.menus[0].name).toBe('test menu1');
  });

  it('should fetch a single menu by ID', async () => {
    const query = `
      query {
        menu(id: 1) {
          id
          name
          type
          price
        }
      }
    `;

    const response = await request(app)
      .post('/graphql')
      .send({ query });

    expect(response.status).toBe(200);
    expect(response.body.data.menu.name).toBe('test menu1');
  });

  it('should create a new menu', async () => {
    const mutation = `
      mutation {
        addMenu(name: "test menu3", type: "test type3", price: 2.8) {
          id
          name
          type
          price
        }
      }
    `;

    const response = await request(app)
      .post('/graphql')
      .send({ query: mutation });

    expect(response.status).toBe(200);
    expect(response.body.data.addMenu.name).toBe('test menu3');
    expect(response.body.data.addMenu.type).toBe('test type3');
  });

  it('should delete a menu', async () => {
    const mutation = `
      mutation {
        deleteMenu(id: 1) {
          id
        }
      }
    `;

    const response = await request(app)
      .post('/graphql')
      .send({ query: mutation });

    expect(response.status).toBe(200);
    expect(response.body.data.deleteMenu.id).toBe(1);

    const query = `
      query {
        menu(id: 1) {
          id
          name
          type
          price
        }
      }
    `;

    const checkResponse = await request(app)
      .post('/graphql')
      .send({ query });

    expect(checkResponse.status).toBe(200);
    expect(checkResponse.body.data.menu).toBeNull();
  });

  it('should update a menu', async () => {
    const mutation = `
      mutation {
        updateMenu(id: 2, name: "test menu21", type: "test type21", price: 2.7) {
          id
          name
          type
          price
        }
      }
    `;

    const response = await request(app)
      .post('/graphql')
      .send({ query: mutation });

    expect(response.status).toBe(200);
    expect(response.body.data.updateMenu.name).toBe('test menu21');
    expect(response.body.data.updateMenu.type).toBe('test type21');
    expect(response.body.data.updateMenu.price).toBe(2.7);
  });
});