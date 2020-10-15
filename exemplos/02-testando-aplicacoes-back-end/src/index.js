import express from 'express';
import logger from 'jsassertivo/src/utils/logger.js';

// Rotas principais
import routes from './routes/index.js';

// Middlewares principais
import middlewares, { error } from './middlewares/index.js';

// Função que inicia o servidor
export default function start (port = 8080) {
  // Instancia a aplicação
  const app = express();

  // Aplica middlewares principais
  app.use(middlewares);

  // Aplica rotas
  app.use(routes.route, routes.router);

  // Aplica middleware de erro final
  app.use(error);

  // Loga inicio e armazena retorno
  const server = app.listen(port, () => {
    logger.success(`Servidor rodando na porta ${port}`)
  });

  // Retorna instância do servidor que pode ser encerrada posteriormente
  return server;
}
