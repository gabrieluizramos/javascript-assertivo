import Reset from '../src/styles/reset'
import ThemeProvider from '../src/providers/theme'
import theme from '../src/styles/theme'

export const parameters = {
  backgrounds: {
    default: 'black',
    values: [
      { name: 'black', value: theme.colors.post.background },
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Reset />
      <Story />
    </ThemeProvider>
  )
]
