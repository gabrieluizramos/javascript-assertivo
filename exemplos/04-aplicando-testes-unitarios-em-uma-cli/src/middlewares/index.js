export * from './user.js';
export * from './data.js';

// Aplica lógica de Middlewares
const applyMiddlewares = (...fn) => arg => fn.reduce((returned, fn) => fn(returned), arg);
export default applyMiddlewares;
