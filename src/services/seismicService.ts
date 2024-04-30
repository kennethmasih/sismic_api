import { faker } from '@faker-js/faker';


export const generateLondonSesmicData = (): SesmicData => {

  const generatedSesmicData = {
    city: "London",

    magnitude: faker.number.int({ min: 1, max: 30 }),
    latitude: faker.number.int({ min: 79, max: 86 }),
    longtitude: faker.number.int({ min: 2, max: 78 }),

  };




  return generatedSesmicData;
};

export const generateDublinSesmicData = (): SesmicData => {
 
  const generatedSesmicData: SesmicData = {
    city: "Dublin",
    magnitude: faker.number.int({ min: -15, max: 30 }),
    latitude: faker.number.int({ min: 79, max: 86 }),
    longtitude: faker.number.int({ min: 2, max: 78 }),

  };




  // Return weather data
  return generatedSesmicData;
};
[10:39 PM]
