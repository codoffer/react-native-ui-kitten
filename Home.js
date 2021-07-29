import React from 'react'
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

import {ThemeContext} from './theme-context'

const HeartIcon = props => <Icon {...props} name='heart' />

const Home = () => {
  const styles = useStyleSheet(themedStyles)

  const themeContext = React.useContext(ThemeContext)
  return (
    <Layout style={styles.container}>
      <Layout style={{justifyContent: 'center', alignItems: 'center'}}>
        <Button style={{marginVertical: 4}} onPress={themeContext.toggleTheme}>
          TOGGLE THEME
        </Button>
      </Layout>
      <Layout style={styles.innerContainer}>
        <Text style={{fontSize: 22}}>Inner Container</Text>
      </Layout>
      <Text style={styles.text} category='h1'>
        Welcome to UI Kitten 😻
      </Text>
      <Text style={styles.text} category='s1'>
        Start with editing App.js to configure your App
      </Text>
      <Text style={styles.text} appearance='hint'>
        For example, try changing theme to Dark by using eva.dark
      </Text>
      <Button style={styles.likeButton} accessoryLeft={HeartIcon}>
        LIKE
      </Button>
    </Layout>
  )
}

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
      /* backgroundColor: 'grey', */
    backgroundColor: 'background-basic-color-2',
    padding: 20,
    margin: 10
  },
  text: {
    textAlign: 'center',
  },
  likeButton: {
    marginVertical: 16,
  },
})

export default Home
