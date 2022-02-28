import React from 'react'
import theme from './src/global/styles/theme'
import AppLoading from 'expo-app-loading'
import { ThemeProvider } from 'styled-components'
import { Dashboard } from './src/screens/Dashboard'
import { Register } from './src/screens/Register'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  // segurar a tela de splash enquanto carrega as fonts
  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Register />
    </ThemeProvider>
  )
}