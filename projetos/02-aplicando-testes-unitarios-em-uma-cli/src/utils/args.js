import { toJSON } from '../database/parser.js';

// Mensagens de validação
const MESSAGES = {
  missingArgs: () => 'Você precisa fornecer os argumentos corretos para a CLI',
  missingArg: arg => `Você precisa informar o argumento ${arg}`
};

// Cria resultado de validação com mensagem
const reportValidation = ({ message = '', valid = false}) => ({
  message,
  valid,
});

// Valida se todos os argumentos foram enviados
const DEFAULT_FIELDS = ['username', 'password', 'operation', 'data'];
export const validateArgs = (args = {}, fields = DEFAULT_FIELDS) => {
  if (!Object.keys(args).length) return reportValidation({ message: MESSAGES.missingArgs() });
  if (typeof args === 'object') {
    const name = fields.find(field => !args[field])

    return reportValidation({
      valid: !name,
      message: name && MESSAGES.missingArg(name)
    });
  }

  return reportValidation({ valid: true })
};

// Recebe cada argumento como --nome=valor e retorna um objeto com { nome: valor }
const formatArg = ([firstDash, secondDash, ...rest]) => {
  const arg = rest.join('');
  let [key, value] = arg.split('=');
  value = key === 'data' ? toJSON(value) : value;

  return {
    [key]: value
  };
};

// Combina todos os argumentos em um único objeto
const combineArgs = (args) => args.reduce((args, arg) => ({...args, ...arg}), {});

// Faz o parse de args, pulando os dois primeiros valores que são do binário do node e da aplicação CLI
export default function parse ([_env, _bin, ...cliArgs]) {
  const formatted = cliArgs.map(formatArg);
  const parsed = combineArgs(formatted);

  return parsed;
};
