import theme from '../../components/layout/theme/config';
const { colors } = theme;

export default {
  success: {
    text: 'Prontinho! Agora é só confirmar sua inscrição no email que você vai receber em instantes.',
    color: colors.terminal.green
  },
  error: {
    text: 'Ops! Parece que que tivemos algum erro... Por favor, tente novamente.',
    color: colors.terminal.yellow
  },
  warning: {
    text: 'Você deve ter recebido um email para confirmar sua inscrição. Caso não receba, tente novamente em alguns instantes por favor.' ,
    color: colors.terminal.green
  }
}
