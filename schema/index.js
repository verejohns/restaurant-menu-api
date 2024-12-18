const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLSchema, GraphQLFloat } = require('graphql');
const { Menu } = require('../models');

// Define the Menu Type
const MenuType = new GraphQLObjectType({
  name: 'Menu',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    type: { type: GraphQLString },
    price: { type: GraphQLFloat },
  },
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    menus: {
      type: new GraphQLList(MenuType),
      async resolve() {
        return await Menu.findAll();
      },
    },
    menu: {
      type: MenuType,
      args: { id: { type: GraphQLInt } },
      async resolve(parent, args) {
        return await Menu.findByPk(args.id);
      },
    },
  },
});

// Mutation
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      // Add new menu
      addMenu: {
        type: MenuType,
        args: {
          name: { type: GraphQLString },
          type: { type: GraphQLString },
          price: { type: GraphQLFloat },
        },
        async resolve(parent, args) {
          return await Menu.create({
            name: args.name,
            type: args.type,
            price: args.price,
          });
        },
      },

      // delete menu
      deleteMenu: {
        type: MenuType,
        args: { id: { type: GraphQLInt } },
        async resolve(parent, args) {
          const menu = await Menu.findByPk(args.id);

          if (menu) {
            await menu.destroy();
            
            return menu;
          }

          return null;
        },
      },

      // update menu
      updateMenu: {
        type: MenuType,
        args: {
          id: { type: GraphQLInt },
          name: { type: GraphQLString },
          type: { type: GraphQLString },
          price: { type: GraphQLFloat },
        },
        async resolve(parent, args) {
          const { id, name, type, price } = args;
          const menu = await Menu.findByPk(id);

          if (!menu) {
            throw new Error('Menu not found');
          }

          await menu.update({ name, type, price });

          return menu;
        },
      },
    },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});