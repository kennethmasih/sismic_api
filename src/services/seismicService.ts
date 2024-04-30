import { faker } from "@faker-js/faker";

export const generateLondonSeismicData = (): SeismicData => {
  // Generate random Seismic data
  const generatedSeismicData = {
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  // Return Seismic data
  return generatedSeismicData;
};

export const generateDublinSeismicData = (): SeismicData => {
  // Generate random Seismic data
  const generatedSeismicData: SeismicData = {
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  // Return Seismic data
  return generatedSeismicData;
};
