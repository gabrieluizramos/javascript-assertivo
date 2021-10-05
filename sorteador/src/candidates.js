import { promises } from 'fs';
import { createRequire } from 'module';
import { toString } from '@jsassertivo/cli/src/database/parser.js';

const require = createRequire(import.meta.url);

export const getCandidates = () => require('../data/input.json');
export const writeWinners = winners => promises.writeFile('./data/output.json', toString(winners));
