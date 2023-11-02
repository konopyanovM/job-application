import { FieldErrors } from 'react-hook-form';
import { toTitleCase } from './toTitleCase';

export const getValidationMessage = (errors: FieldErrors): string[] => {
  const result: string[] = [];
  const keys = Object.keys(errors);

  keys.forEach(key => {
    switch (errors[key]?.type) {
      case 'required':
        result.push(`${toTitleCase(key)} is required field`);
        break;
      case 'minLength':
        result.push(`${toTitleCase(key)} minimum number of characters 8`);
        break;
      case 'maxLength':
        result.push(`${toTitleCase(key)} maximum number of characters exceed`);
        break;
      case 'pattern':
        result.push(`${toTitleCase(key)} field accepts only latin characters`);
        break;
      case 'validate':
        result.push('Password mismatch');
        break;
      default:
        result.push(`Something wrong with ${key} field`);
        break;
    }
  });

  return result;
};
