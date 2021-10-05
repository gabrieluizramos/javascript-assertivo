import cli from './src/cli.js';

const [,, amount = 1] = process.argv;
cli(amount);
