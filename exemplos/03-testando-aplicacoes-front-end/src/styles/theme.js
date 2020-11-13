const SPACING = 15;

export default {
  colors: {
    white: '#FFF',
    black: '#000',
    terminal: {
      blue: {
        default: '#006CAD',
        light: '#4F93D5'
      },
      purple: '#696AC6',
      green: '#4FB06E',
      yellow: '#F8AB03',
      black: '#1F1E1E'
    },
    post: {
      color: '#DADADA',
      background: '#1F1F1F'
    },
    red: '#FF6347'
  },
  font: {
    size: {
      small: '12px',
      default: '14px',
      medium: '18px',
      big: '24px',
      biggest: '48px',
    }
  },
  spacing: {
    half: `${SPACING / 2}px`,
    default: `${SPACING}px`,
    onehalf: `${SPACING + (SPACING / 2)}px`,
    double: `${SPACING * 2}px`,
    triple: `${SPACING * 3}px`,
    quadruple: `${SPACING * 4}px`
  },
  transition: {
    default: '.2s ease-in-out'
  },
  radius: {
    default: '4px',
    half: '2px',
    rounded: '50%'
  },
  shadow: {
    default: '0 0 15px rgba(255, 255, 255, 0.3)',
    light: '0 0 5px rgba(255, 255, 255, 0.3)',
  }
}
