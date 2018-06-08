import Color from 'tinycolor2'

const primary = '#9f3a38'

const colorOptions = {
  primary,
  primaryLight: Color(primary)
    .lighten(7)
    .toString(),
  primaryLighter: Color(primary)
    .lighten(15)
    .toString(),
  primaryDark: Color(primary)
    .darken(7)
    .toString(),
  primaryDarker: Color(primary)
    .darken(15)
    .toString(),
  primaryDarkest: Color(primary)
    .darken(20)
    .saturate(100)
    .toString(),
  white: 'white',
}

export default {
  colors: {
    ...colorOptions,
  },
  sizes: {
    h1: 3,
    h2: 2.5,
    h3: 2,
    h4: 1.6,
    h5: 1.3,
    h6: 1.2,
  },
  weights: {
    lighter: 100,
    light: 300,
    regular: 400,
    bold: 700,
    bolder: 900,
  },
}
