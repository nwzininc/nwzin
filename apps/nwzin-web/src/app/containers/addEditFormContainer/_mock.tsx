import { faker } from '@faker-js/faker';
import { GetCurrentFormAPIPayload } from './types';


export const getCurrentFormSuccessMock = (payload: GetCurrentFormAPIPayload) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        status: true,
        data: {
        usersCount: faker.phone.phoneNumber(),
        name: faker.name.lastName(),
        id: payload.formId,
        },
        error: null,
      });
    }, 200)
  );
};
