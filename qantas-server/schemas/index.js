const { fileLoader, mergeTypes } = require('merge-graphql-schemas');
const { buildSchema } = require('graphql');

// Loads all schemas in the current directory
const typesArray = fileLoader(__dirname);

// Merges the schemas into a single root schema
module.exports = buildSchema(mergeTypes(typesArray, { all: true }));
