import { faker } from '@faker-js/faker';


export const generateLondonSeismicData = (): SeismicData => {

  const generatedSeismicData = {
    city: "London",

    magnitude: faker.number.int({ min: 1, max: 30 }),
    latitude: faker.number.int({ min: 79, max: 86 }),
    longtitude: faker.number.int({ min: 2, max: 78 }),

  };




  return generatedSeismicData;
};

export const generateDublinSeismicData = (): SeismicData => {
 
  const generatedSeismicData: SeismicData = {
    city: "Dublin",
    magnitude: faker.number.int({ min: -15, max: 30 }),
    latitude: faker.number.int({ min: 79, max: 86 }),
    longtitude: faker.number.int({ min: 2, max: 78 }),

  };




  // Return weather data
  return generatedSeismicData;
};
[10:39 PM]
