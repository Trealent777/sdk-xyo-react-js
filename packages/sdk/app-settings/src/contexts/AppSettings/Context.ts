import { createContext } from 'react'

import { WebAppNavigationType } from '../../WebAppNavigationType'
import { appSettingDefault } from './appSettingDefault'

export interface AppSettingsContextProps {
  darkMode?: boolean
  developerMode?: boolean
  enableDarkMode?: (value: boolean) => void
  enableDeveloperMode?: (value: boolean) => void
  changeNavigationType?: (value: WebAppNavigationType) => void
  navigationType?: WebAppNavigationType
}

export const AppSettingsContext = createContext<AppSettingsContextProps>(appSettingDefault())