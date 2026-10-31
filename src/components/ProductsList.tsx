import { View, Text, FlatList, Pressable, RefreshControl } from "react-native";
import React from "react";
import { Product } from "@/types/products";
import FlatListHeader from "@/features/home/components/FlatListHeader";
import ProductCard from "@/features/home/components/ProductCard";
import ProductCardSkeleton from "@/features/home/components/ProductCardSkeleton";
import ErrorContainer from "./ErrorContainer";
import { useAppTheme } from "@/hooks/useAppTheme";
import { useNavigation } from "@react-navigation/native";

type ProductsListProps = {
  productsList?: Product[];
  isError: boolean;
  isFetching: boolean;
  error: Error | null;
  isLoading: boolean;
  refetch?: () => void;
  headerTitle: string;
  onPressSeeAll?: () => void;
  skeletonNum: number[];
  renderSeeAll?: boolean;
};
export default function ProductsList({
  productsList,
  isError,
  isFetching,
  isLoading,
  error,
  refetch,
  onPressSeeAll,
  skeletonNum,
  headerTitle,
  renderSeeAll = true,
}: ProductsListProps) {
  const { appTheme } = useAppTheme();
  const navigation = useNavigation<any>();
  if (isLoading)
    return (
      <FlatList
        data={skeletonNum}
        numColumns={2}
        renderItem={() => <ProductCardSkeleton />}
        ItemSeparatorComponent={() => (
          <View style={{ height: appTheme.spacing.lg }} />
        )}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <FlatListHeader renderSeeAll={false} headerTitle={headerTitle} />
        }
        refreshControl={
          <RefreshControl
            refreshing={isFetching}
            onRefresh={() => {
              refetch?.();
            }}
          />
        }
      ></FlatList>
    );

  if (isError)
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          marginBottom: 8,
        }}
      >
        <ErrorContainer error={error?.message}></ErrorContainer>
      </View>
    );

  return (
    <FlatList
      data={productsList}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable
          onPress={() =>
            navigation.navigate("productDetails", { prodId: item.id })
          }
        >
          <ProductCard {...item} />
        </Pressable>
      )}
      numColumns={2}
      ItemSeparatorComponent={() => (
        <View style={{ height: appTheme.spacing.lg }} />
      )}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <FlatListHeader
          headerTitle={headerTitle}
          renderSeeAll={renderSeeAll}
          onPressSeeAll={onPressSeeAll}
        />
      }
      refreshControl={
        <RefreshControl
          refreshing={isFetching}
          onRefresh={() => {
            refetch?.();
          }}
        />
      }
      //refrech control works on vertical lists only
    />
  );
}
