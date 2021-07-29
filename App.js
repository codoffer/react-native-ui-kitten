/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the UI Kitten template
 * https://github.com/akveo/react-native-ui-kitten
 *
 * Documentation: https://akveo.github.io/react-native-ui-kitten/docs
 *
 * @format
 */

import React from 'react'
import {StyleSheet, View} from 'react-native'
import {
  ApplicationProvider,
  Button,
  Icon,
  IconRegistry,
  Layout,
  Text,
  useStyleSheet,
  StyleService,
} from '@ui-kitten/components'
import {EvaIconsPack} from '@ui-kitten/eva-icons'
import * as eva from '@eva-design/eva'

import {ThemeContext} from './theme-context'

import Home from './Home'

/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */


export default () => {
  const [theme, setTheme] = React.useState('light')

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
  }

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <ApplicationProvider {...eva} theme={eva[theme]}>
          <Home/>
        </ApplicationProvider>
      </ThemeContext.Provider>
    </>
  )
}
