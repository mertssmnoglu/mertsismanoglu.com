export interface License {
  name: string
  shortName: string
  url: string
}

export const LICENSES: Record<string, License> = {
  'CC-BY-SA-4.0': {
    name: 'Creative Commons Attribution-ShareAlike 4.0 International',
    shortName: 'CC BY-SA 4.0',
    url: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  'CC-BY-4.0': {
    name: 'Creative Commons Attribution 4.0 International',
    shortName: 'CC BY 4.0',
    url: 'https://creativecommons.org/licenses/by/4.0/',
  },
  'CC-BY-NC-4.0': {
    name: 'Creative Commons Attribution-NonCommercial 4.0 International',
    shortName: 'CC BY-NC 4.0',
    url: 'https://creativecommons.org/licenses/by-nc/4.0/',
  },
  'CC-BY-NC-SA-4.0': {
    name: 'Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International',
    shortName: 'CC BY-NC-SA 4.0',
    url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
  },
  'CC0-1.0': {
    name: 'Creative Commons Zero v1.0 Universal',
    shortName: 'CC0 1.0',
    url: 'https://creativecommons.org/publicdomain/zero/1.0/legalcode',
  },
  MIT: {
    name: 'MIT License',
    shortName: 'MIT',
    url: 'https://opensource.org/licenses/MIT',
  },
}

export const DEFAULT_CONTENT_LICENSE = 'CC-BY-SA-4.0'
