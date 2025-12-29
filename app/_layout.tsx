import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useEffect } from 'react';

import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useColorScheme } from '@/presentation/theme/hooks/useColorSchemeWeb';
import { useThemeColor } from '@/presentation/theme/hooks/useThemeColor';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const backgroundColor = useThemeColor({}, 'background')

  const [fontsLoaded, error] = useFonts({
    "Kanit-Bold": require('../assets/fonts/Kanit-Bold.ttf'),
    "Kanit-Regular": require('../assets/fonts/Kanit-Regular.ttf'),
    "Kanit-Thin": require('../assets/fonts/Kanit-Thin.ttf'),
  })

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();

  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor }}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{
          headerShown: false
        }}></Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
