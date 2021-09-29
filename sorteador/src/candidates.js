import { toString } from '@jsassertivo/cli/src/database/parser.js';
import { promises } from 'fs';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const files = {
  input: 'input.json',
  output: 'output.json'
};

export const getCandidates = () => require(`../data/${files.input}`);
export const writeWinners = winners => promises.writeFile(`./data/${files.output}`, toString(winners));
