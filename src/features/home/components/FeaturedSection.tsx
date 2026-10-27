import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import React, { useMemo } from "react";
import { useProducts } from "@/hooks/useProducts";
import ProductCard from "./ProductCard";
import { Ionicons } from "@expo/vector-icons";
import { useAppTheme } from "@/hooks/useAppTheme";
import { AppTheme } from "@/theme";
import FlatListHeader from "./FlatListHeader";

export default function FeaturedSection() {
  const {
    data: products,
    error,
    isError,
    isFetching,
    isPending,
    refetch,
  } = useProducts();
  const { appTheme } = useAppTheme();
  const FilteredProducts = useMemo(
    () => products?.filter((item) => item.isFeatured),
    [products],
  );
  return (
    <FlatList
      data={FilteredProducts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ProductCard {...item} />}
      numColumns={2}
      ItemSeparatorComponent={<View style={{ height: appTheme.spacing.lg }} />}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<FlatListHeader listLength={products?.length} />}
      //style={{paddingBottom:appTheme.spacing.lg}}
    />
  );
}
