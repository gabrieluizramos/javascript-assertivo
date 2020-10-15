import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import logger from 'jsassertivo/src/utils/logger.js';

export const error = (err, req, res) => {
  debugger;
  logger.error(err.message);
  return res.status(500).json({ message: err.message });
}

export default [
  bodyParser.json(),
  cookieParser(),
]
