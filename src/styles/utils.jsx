import { adjustHue } from 'polished'

export const makeGradient = (color) =>
  `linear-gradient(135deg, ${color}, ${adjustHue(40, color)})`

// ? standard paint palette row 2
export const palette = {
  dark: [
    '#FF6766',
    '#FF9968',
    '#FFCC66',
    '#FFFF67',
    '#CDFE67',
    '#9BFE66',
    '#66FF66',
    '#68FE9A',
    '#66FECB',
    '#66FEFF',
    '#66CBFF',
    '#6599FF',
    '#6867FF',
    '#9A67FF',
    '#CC68FF',
    '#FF67FF',
    '#FE66CB',
    '#FF669A',
  ],
  light: [
    '#009899',
    '#006697',
    '#003399',
    '#000098',
    '#320198',
    '#640199',
    '#990099',
    '#970165',
    '#990134',
    '#990100',
    '#993400',
    '#9A6600',
    '#979800',
    '#659800',
    '#339700',
    '#009800',
    '#019934',
    '#009965',
  ],
}
