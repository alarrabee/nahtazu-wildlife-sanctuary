const { gql } = require('apollo-server-express');

const animalTypeDefs = gql`
    type Query {
        animal(id: ID!): Animal
        animals: [Animal]
        searchAnimalInfo(name: String!): AnimalInfo
    }

    type Mutation {
        addAnimal(name: String!, species: String!, habitat: String, diet: String, lifespan: Int, status: String, description: String): Animal
        updateAnimal(id: ID!, name: String, species: String, habitat: String, diet: String, lifespan: Int, status: String, description: String): Animal
        deleteAnimal(id: ID!): Animal
    }

    type Animal {
        _id: ID
        name: String
        species: String
        habitat: String
        diet: String
        lifespan: Int
        status: String
        description: String
        imageUrl: String
    }

    type AnimalInfo {
        name: String
        apiData: String
        imageUrl: String
    }
`;

module.exports = animalTypeDefs;
///////////////////////////////////////////////////////////////////
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Animal {
    id: ID!
    name: String!
    species: String
    habitat: String
    diet: String
    lifespan: Int
    status: String
    description: String
    imageUrl: String
  }

  type Query {
    getAnimal(name: String!): Animal
  }

  type Mutation {
    addAnimal(
      name: String!,
      species: String,
      habitat: String,
      diet: String,
      lifespan: Int,
      status: String,
      description: String,
      imageUrl: String
    ): Animal
  }
`;

module.exports = typeDefs;