import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import RootStack from './src/screens/routes/root'

const App = () => {
  return (
    <NavigationContainer>
    <RootStack />
  </NavigationContainer>
  )
}

export default App