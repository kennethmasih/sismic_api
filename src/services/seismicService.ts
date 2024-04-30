import { faker } from "@faker-js/faker";

export const generateLondonseismicData = (): seismicData => {
  // Generate random weather data
  const generatedseismicData = {
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  // Return weather data
  return generatedseismicData;
};

export const generateDublinseismicData = (): seismicData => {
  // Generate random weather data
  const generatedseismicData: seismicData = {
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  // Return seismic data
  return generatedseismicData;
};
