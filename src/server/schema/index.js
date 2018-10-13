const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = require("graphql");
const { fromPromise } = require("rxjs");
const { map } = require("rxjs/operators");
const axios = require("axios");
const { pipe, find, prop } = require("ramda");

const TransactionType = new GraphQLObjectType({
  name: "Transaction",
  fields: {
    category: { type: GraphQLString },
    id: { type: GraphQLString },
    price: { type: GraphQLString },
    merchant: { type: GraphQLString }
  }
});

const RootQueryType = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    transactions: {
      args: { id: { type: GraphQLString } },
      type: TransactionType,
      resolve(parentVal, args) {
        return axios.get("http://localhost:3000/transactions").then(
          pipe(
            prop("data"),
            find(({ id }) => id === args.id)
          )
        );
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQueryType
});
