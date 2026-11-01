import { View, FlatList, Pressable, RefreshControl } from "react-native";
import React, { useMemo } from "react";
import { useProducts } from "@/hooks/useProducts";
import ProductCard from "./ProductCard";
import { useAppTheme } from "@/hooks/useAppTheme";
import FlatListHeader from "./FlatListHeader";
import { useNavigation } from "@react-navigation/native";
import ProductCardSkeleton from "./ProductCardSkeleton";
import ErrorContainer from "@/components/ErrorContainer";
import ProductsList from "@/components/ProductsList";

export default function FeaturedSection() {
  const {
    data: products,
    error,
    isError,
    isFetching,
    isLoading,
    refetch,
  } = useProducts();
  const navigation = useNavigation<any>();
  const filteredProducts = useMemo(
    () => products?.filter((item) => item.isFeatured).slice(0, 4),
    [products],
  );
  return (
    <ProductsList
      productsList={filteredProducts}
      headerTitle="Featured Section"
      onPressSeeAll={() => navigation.navigate("browseProducts")}
      error={error}
      isError={isError}
      isLoading={isLoading}
      isFetching={isFetching}
      refetch={refetch}
      skeletonNum={[1, 2, 3, 4]}
    />
  );
}
