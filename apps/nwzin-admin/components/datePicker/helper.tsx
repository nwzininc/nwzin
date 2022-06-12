import { parse, isValid } from 'date-fns';
import _replace from 'lodash/replace';
import { enIN } from 'date-fns/locale';

export const validateDate = (format: string) => async (value) => {
  const dateFnsYearFormated = _replace(format,  new RegExp('[Y]', 'g'),'y')
  const dateFnsMonthFormated = _replace(dateFnsYearFormated,  new RegExp('[m]', 'g'),'M')
  const dateFnsDateFormated = _replace(dateFnsMonthFormated,  new RegExp('[D]', 'g'),'d')
  const parsedDate = parse(value, dateFnsDateFormated, new Date(), { locale: enIN });

  const isValidDate = isValid(parsedDate);
  console.log(isValidDate, "isValidDate", parsedDate, dateFnsDateFormated, value)
  return isValidDate;
};
