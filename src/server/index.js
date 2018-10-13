const express = require("express");
const app = express();
const expressGraphQL = require("express-graphql");
const schema = require("./schema");
const PORT = process.env.PORT || 4000;

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => console.log(`listening on port ${PORT}`));
