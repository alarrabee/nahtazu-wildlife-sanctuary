const Animal = require('../models/animalData');
const { getAnimalData, getAnimalImage } = require('../utils/animalDataFetcher');

const resolvers = {
    Query: {
        animal: async (parent, { id }) => await Animal.findById(id),
        animals: async () => await Animal.find({}),
        searchAnimalInfo: async (parent, { name }) => {
            const apiData = await getAnimalData(name);
            const imageUrl = await getAnimalImage(name);
            return { name, apiData, imageUrl };
        },
    },
    Mutation: { 
        addAnimal: async (parent, { name, species, habitat, diet, lifespan, status, description }) => {
            const imageUrl = await getAnimalImage(name);
            const animal = new Animal({ name, species, habitat, diet, lifespan, status, description, imageUrl });
            return await animal.save();
        },
        updateAnimal: async (parent, { id, name, species, habitat, diet, lifespan, status, description }) => {
            const updateData = { name, species, habitat, diet, lifespan, status, description };

            if (name) updateData.imageUrl = await getAnimalImage(name);
            return await Animal.findByIdAndUpdate(id, updateData, { new: true });
        },
        deleteAnimal: async (parent, { id }) => await Animal.findByIdAndRemove(id),
    },
};

module.exports = resolvers;
// ////////////////////////////////////////////////////////////////////
const Animal = require('../models/Animal');
const { getAnimalData, getAnimalImage } = require('../utils/animalAPI');

const resolvers2 = {
  Query: {
    getAnimal: async (_, { name }) => {
      // Check if animal exists in the database
      let animal = await Animal.findOne({ name });

      // If not, fetch data from external APIs
      if (!animal) {
        const description = await getAnimalData(name);
        const imageUrl = await getAnimalImage(name);

        // Create a new animal record in the database
        animal = new Animal({
          name,
          description,
          imageUrl
        });

        await animal.save();
      }

      return animal;
    },
  },
  Mutation: {
    addAnimal: async (_, args) => {
      const animal = new Animal(args);
      await animal.save();
      return animal;
    },
  },
};

module.exports = resolvers2;