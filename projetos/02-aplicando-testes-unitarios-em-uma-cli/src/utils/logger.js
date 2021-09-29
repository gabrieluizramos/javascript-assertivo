const RESET = '\x1b[0m';
const TEXT = '%s';
const resetAfterLog = color => `${color}${TEXT}${RESET}`;

export const COLORS = {
  DEFAULT: resetAfterLog('\x1b[0m'),
  GREEN: resetAfterLog('\x1b[32m'),
  RED: resetAfterLog('\x1b[31m')
};

const log = (msg, ...args) => {
  console.log(COLORS.DEFAULT, msg, ...args);
};

const success = (msg, ...args) => {
  console.log(COLORS.GREEN, `✅ ${msg}`, ...args);
};

const error = (msg, ...args) => {
  console.error(COLORS.RED, `🚨 ${msg}`, ...args);
};

export default {
  log,
  success,
  error,
}
