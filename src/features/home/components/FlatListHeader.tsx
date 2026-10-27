import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useMemo } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useAppTheme } from "@/hooks/useAppTheme";
import { AppTheme } from "@/theme";

type FlatListProp={
    listLength?:number,
}

export default function FlatListHeader({ listLength }: FlatListProp) {
  const { appTheme } = useAppTheme();
  const styles = useMemo(() => createStyles(appTheme), [appTheme]);
  return (
    <View style={{paddingTop:appTheme.spacing.md}}>
      <View style={styles.row}>
        <View>
          <Text style={styles.primaryText}>Featured Products</Text>
          <Text style={styles.secondaryText}>Mindfully picked for your interior</Text>
        </View>
        <View style={styles.row}>
          {/* onPress navigation */}
          <Pressable>
            <Text style={styles.seeAllText}>See All </Text>
          </Pressable>
          <Text style={styles.seeAllText}>{`(${listLength})`}</Text>
          <Ionicons name="chevron-forward" style={styles.icon} size={20}></Ionicons>
        </View>
      </View>
    </View>
  );
}

const createStyles = (appTheme: AppTheme) =>
  StyleSheet.create({
    icon: {
      marginLeft: appTheme.spacing.xs,
      color:appTheme.colors.primaryAction,
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginVertical: appTheme.spacing.md,
      alignItems: "center",
    },
    primaryText: {
      color: appTheme.colors.textPrimary,
      fontSize: appTheme.typography.fontSize.lg,
      fontWeight: appTheme.typography.fontWeight.bold,
    },
    secondaryText: {
      color: appTheme.colors.textSecondary,
      fontSize: appTheme.typography.fontSize.xs,
      fontWeight: appTheme.typography.fontWeight.regular,
    },
    seeAllText:{
        color:appTheme.colors.primaryAction,
        fontSize:appTheme.typography.fontSize.sm,
        fontWeight: appTheme.typography.fontWeight.semibold,
    }
  });
