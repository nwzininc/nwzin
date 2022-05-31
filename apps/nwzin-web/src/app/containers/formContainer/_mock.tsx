import { faker } from '@faker-js/faker';
import { Form, FormSuccessAPISchema } from './types';


const forms = Array(10)
  .fill(1)
  .map((item, index) => ({
     id: faker.finance.amount(),
     name: faker.finance.accountName(),
     description: faker.lorem.sentence(),
     formSchema: []
  } as Form));

const getFormSuccessResponse = () => {
  return {
    forms: forms,
    count: forms.length,
  } as FormSuccessAPISchema
}

export const getFormSuccessMock = () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        status: true,
        data: getFormSuccessResponse(),
        error: null,
      });
    }, 200)
  );
};
