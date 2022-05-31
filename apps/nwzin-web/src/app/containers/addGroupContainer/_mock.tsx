import { faker } from '@faker-js/faker';
import { GetCurrentGroupAPIPayload } from './types';


export const getCurrentGroupSuccessMock = (payload: GetCurrentGroupAPIPayload) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        status: true,
        data: {
        usersCount: faker.phone.phoneNumber(),
        name: faker.name.lastName(),
        id: payload.groupId,
        },
        error: null,
      });
    }, 200)
  );
};
