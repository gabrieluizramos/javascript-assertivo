import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import logger from 'jsassertivo/src/utils/logger.js';

export const error = (err, req, res, next) => {
  logger.error(err.message);
}

export default [
  bodyParser.json(),
  cookieParser(),
]
