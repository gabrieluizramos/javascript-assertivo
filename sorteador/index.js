import execute from './src/app.js';

const [,, amount = 1] = process.argv;
execute(amount);
