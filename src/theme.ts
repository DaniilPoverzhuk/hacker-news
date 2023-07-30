const theme = {
  primary: `#1A202C`,
  secondary: `#5B6068`,
  background_primary: '#F56565',
  background_secondary: '#fff',
};

declare module 'styled-components' {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}

export default theme;
