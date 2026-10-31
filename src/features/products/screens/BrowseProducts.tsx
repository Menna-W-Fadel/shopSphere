import { View, StyleSheet } from "react-native";
import React, { useMemo } from "react";
import { useProducts } from "@/hooks/useProducts";
import ProductsList from "@/components/ProductsList";
import { useAppTheme } from "@/hooks/useAppTheme";
import { AppTheme } from "@/theme";

export default function BrowseProducts() {
    const { appTheme } = useAppTheme();
    const styles = useMemo(() => createStyles(appTheme), [appTheme]);
  const {
    data: products,
    error,
    isError,
    isFetching,
    isLoading,
    refetch,
  } = useProducts();
  return (
    <View style={styles.container}>
      <ProductsList
        productsList={products}
        headerTitle="Browse Products"
        renderSeeAll={false}
        error={error}
        isError={isError}
        isLoading={isLoading}
        isFetching={isFetching}
        refetch={refetch}
        skeletonNum={[1, 2, 3, 4]}
      />
    </View>
  );
}
const createStyles = (appTheme:AppTheme)=>StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical:appTheme.spacing.md,
    backgroundColor:appTheme.colors.background,
  },
});
