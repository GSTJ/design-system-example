import { makeTheme } from 'dripsy'

export const baseColors = {
  $white: '#FFF',
  $gray100: '#F8F8F8',
  $gray200: '#F3F3F3',
  $gray400: '#A0A0A0',
  $gray500: '#505050',
  $black700: '#2A2A2A',
  $black800: '#1A1A1A',
  $black900: '#0A0A0A',
  $yellow800: '#FBC710',
}

export const lightTheme: Parameters<typeof makeTheme>[0] = {
  colors: {
    $primary: baseColors.$yellow800,
    $background: baseColors.$white,
    $secondaryBackground: baseColors.$gray200,
    $border: baseColors.$gray200,
    $text: baseColors.$black900,
    $secondaryText: baseColors.$gray500,
    $placeholder: baseColors.$gray400,
    $buttonText: baseColors.$black900,
  },
}

export const darkTheme: Parameters<typeof makeTheme>[0] = {
  colors: {
    $primary: baseColors.$yellow800,
    $background: baseColors.$black800,
    $secondaryBackground: baseColors.$gray200,
    $border: baseColors.$black700,
    $text: baseColors.$gray100,
    $secondaryText: baseColors.$gray400,
    $placeholder: baseColors.$gray400,
    $buttonText: baseColors.$black900,
  },
}

export const defaultThemeProps: Parameters<typeof makeTheme>[0] = {}