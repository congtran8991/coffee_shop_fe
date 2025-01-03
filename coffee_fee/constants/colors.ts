const palette = {
  primary: {
    w50: '#ebfff6',
    w100: '#d5feeb',
    w200: '#a6fdd4',
    w300: '#74fdbc',
    w400: '#52fda7',
    w500: '#41fd9a',
    w600: '#38fe93',
    w700: '#2de27f',
    w800: '#20c970',
    w900: '#00ad5e',
  },
  secondary: {
    w50: '#FEEDEC',
    w100: '#FDDBD8',
    w200: '#FAB2AD',
    w300: '#F88E86',
    w400: '#F66A5F',
    w500: '#F44336',
    w600: '#F22112',
    w700: '#D0190B',
    w800: '#A91409',
    w900: '#871007',
  },
  blue: {
    w50: '#EBF4F9',
    w100: '#D7EAF4',
    w200: '#B0D4E8',
    w300: '#88BFDD',
    w400: '#61AAD1',
    w500: '#3995C5',
    w600: '#3283AE',
    w700: '#2C7196',
    w800: '#255F7F',
    w900: '#1E4D67',
  },
  warning: {
    w50: '#FFF5E5',
    w100: '#FFEBCC',
    w200: '#FFD699',
    w300: '#FFC266',
    w400: '#FFAD33',
    w500: '#FF9800',
    w600: '#E08700',
    w700: '#C27400',
    w800: '#A36200',
    w900: '#855000',
  },
  gray: {
    w25: '#EFEFEF',
    w50: '#DDDEDF',
    w100: '#C2C5C7',
    w200: '#A8ADAF',
    w300: '#8E9496',
    w400: '#747B7E',
    w500: '#686F72',
    w600: '#5C6366',
    w700: '#505759',
    w800: '#444A4D',
    w900: '#393E40',
  },
};

const brand = {
  primary: {
    dark: palette.primary.w700,
    normal: palette.primary.w500,
    light: palette.primary.w300,
  },
  secondary: {
    dark: palette.secondary.w700,
    normal: palette.secondary.w500,
    light: palette.secondary.w300,
  },
  blue: {
    dark: palette.blue.w700,
    normal: palette.blue.w500,
    light: palette.blue.w300,
  },
  normal: {
    dark: palette.gray.w900,
    normal: palette.gray.w100,
    light: palette.gray.w25,
  },
  warning: {
    dark: palette.warning.w700,
    normal: palette.warning.w500,
    light: palette.warning.w300,
  },
  info: {
    dark: palette.blue.w700,
    normal: palette.blue.w500,
    light: palette.blue.w300,
  },
  success: {
    dark: palette.primary.w700,
    normal: palette.primary.w500,
    light: palette.primary.w300,
  },
  danger: {
    dark: palette.secondary.w700,
    normal: palette.secondary.w500,
    light: palette.secondary.w300,
  },
  border: {
    dark: palette.gray.w200,
    normal: palette.gray.w50,
    light: palette.gray.w25,
  },
  gray: {
    dark: palette.gray.w900,
    normal: palette.gray.w600,
    light: palette.gray.w400,
  },
};

const KColors = {
  ...brand,
};

export default KColors;
