import { View, Text, StyleSheet, Platform } from "react-native";
import React, { useMemo, useState } from "react";
import { useAppTheme } from "../hooks/useAppTheme";
import { type AppTheme } from "../theme/index";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "../features/home/screens/HomeScreen";
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
export default function MainApp() {
  const { appTheme } = useAppTheme();
  const styles = useMemo(() => createStyles(appTheme), [appTheme]);
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 30000,
            retry: 1,
          },
        },
      }),
  );
  return (
    <View style={styles.container}>
      <SafeAreaProvider
        style={
          Platform.OS === "android"
            ? { paddingTop: appTheme.spacing.xl }
            : { paddingTop: 0 }
        }
      >
        <QueryClientProvider client={queryClient}>
          <HomeScreen />
        </QueryClientProvider>
      </SafeAreaProvider>
    </View>
  );
}

const createStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: theme.spacing.lg,
      backgroundColor: theme.colors.background,
    },
  });
