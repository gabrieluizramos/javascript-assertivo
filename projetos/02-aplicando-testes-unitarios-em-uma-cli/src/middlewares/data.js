import { validateArgs } from '../utils/args.js';

// Valida valor de "data" para cada operação com seus campos necessários
export const validateDataMiddleware = fields => args => {
  const validation = validateArgs(args.data, fields);

  if (!validation.valid) {
    throw new Error(validation.message);
  }

  return args;
}
