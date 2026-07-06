import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import AppTabs from '@/components/app-tabs';

// Prevents the splash screen from automatically disappearing
// until the application has finished loading.
SplashScreen.preventAutoHideAsync();

/**
 * Root layout for the application.
 * This component applies the correct light or dark theme,
 * displays the animated splash screen, and loads the
 * application's bottom tab navigation.
 */
export default function TabLayout() {
  // Detects whether the device is using light or dark mode.
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* Displays the animated splash screen when the app starts */}
      <AnimatedSplashOverlay />

      {/* Displays the Home and Tasks navigation tabs */}
      <AppTabs />
    </ThemeProvider>
  );
}