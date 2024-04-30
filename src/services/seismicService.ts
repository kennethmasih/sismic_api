import { faker } from "@faker-js/faker";

export const generateLondonSeismicData = (): SeismicData => {
  // Generate random Seismic data
  const generatedSeismicData = {
    magnitude: faker.number.int({ min: -15, max: 30 }),
    latitude: faker.number.int({ min: 79, max: 86 }),
    longitude: faker.number.int({ min: 2, max: 78 }),
  };

  // Return Seismic data
  return generatedSeismicData;
};

export const generateDublinSeismicData = (): SeismicData => {
  // Generate random Seismic data
  const generatedSeismicData: SeismicData = {
    magnitude: faker.number.int({ min: -15, max: 30 }),
    latitude: faker.number.int({ min: 79, max: 86 }),
    longitude: faker.number.int({ min: 2, max: 78 }),
  };

  // Return Seismic data
  return generatedSeismicData;
};
