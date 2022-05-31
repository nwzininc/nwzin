import { faker } from '@faker-js/faker';
import { GetCurrentDataStoreAPIPayload } from './types';


export const getCurrentGroupSuccessMock = (payload: GetCurrentDataStoreAPIPayload) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        status: true,
        data: {
        name: faker.name.lastName(),
        id: payload.dataStoreId,
        },
        error: null,
      });
    }, 200)
  );
};
