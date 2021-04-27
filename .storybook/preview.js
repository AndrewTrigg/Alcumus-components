import { createMuiTheme, ThemeProvider, StylesProvider } from '@material-ui/core/styles';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#000000',
    }
  },
  typography: {
    button: {
      fontSize: '1em',
    }
  },
  overrides: {
    
    MuiButton: {
      root: {
        color: 'red'
      }
    }, 
  },
})


export const decorators = [
  (Story) => (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </StylesProvider>
  )
]