const COLORS = {
  DEFAULT: "\x1b[0m",
  GREEN: "\x1b[32m",
  RED: "\x1b[31m"
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
