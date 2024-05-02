import { faker } from '@faker-js/faker';
import { storeSeismcData } from '../helpers/helper.js';


export const generateLondonSeismicData = (): SeismicData => {

  const generatedSeismicData = {
    city: "London",

    magnitude: faker.number.int({ min: 0.1, max: 10 }),
    latitude: faker.number.int({ min: 79, max: 86 }),
    longitude: faker.number.int({ min: 93, max: 104 }),

  };

  storeSeismcData(generatedSeismicData).catch(console.error);

  return generatedSeismicData;
};

export const generateDublinSeismicData = (): SeismicData => {
 
  const generatedSeismicData: SeismicData = {
    city: "Dublin",
    magnitude: faker.number.int({ min: 0.1, max: 10 }),
    latitude: faker.number.int({ min: 79, max: 86 }),
    longitude: faker.number.int({ min: 93, max: 104 }),

  };

  storeSeismcData(generatedSeismicData).catch(console.error);

  // Return weather data
  return generatedSeismicData;
};
