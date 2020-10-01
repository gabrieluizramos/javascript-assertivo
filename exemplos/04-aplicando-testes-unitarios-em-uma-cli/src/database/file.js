import { promises } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

import logger from '../utils/logger.js';
import { toJSON, toString } from './parser.js'

// Arquivo com dados
const databasePath = resolve(__dirname, '../../database.json');

export const loadDatabase = async () => {
  try {
    const buffer = await promises.readFile(databasePath);
    const database = buffer.toString();

    return toJSON(database);
  } catch (err) {
    logger.error('Erro ao carregar dados da base \n', err.message);
  }
};

export const saveDatabase = async data => {
  await promises.writeFile(databasePath, toString(data));
}
