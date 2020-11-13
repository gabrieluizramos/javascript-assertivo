import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import logger from '@jsassertivo/cli/src/utils/logger.js';

export const error = (err, req, res, next) => {
  logger.error(err.message);
}

export default [
  cors(),
  bodyParser.json(),
  cookieParser(),
]
