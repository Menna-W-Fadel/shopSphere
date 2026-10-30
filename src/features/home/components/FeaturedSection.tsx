import { View, FlatList, Pressable, RefreshControl } from "react-native";
import React, { useMemo } from "react";
import { useProducts } from "@/hooks/useProducts";
import ProductCard from "./ProductCard";
import { useAppTheme } from "@/hooks/useAppTheme";
import FlatListHeader from "./FlatListHeader";
import { useNavigation } from "@react-navigation/native";
import ProductCardSkeleton from "./ProductCardSkeleton";
import ErrorContainer from "@/components/ErrorContainer";

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
  const { appTheme } = useAppTheme();
  const FilteredProducts = useMemo(
    () => products?.filter((item) => item.isFeatured).slice(0,4),
    [products],
  );
  
  if (isLoading)
    return (
      <FlatList
        data={[1, 2, 3, 4]}
        numColumns={2}
        renderItem={() => <ProductCardSkeleton />}
        ItemSeparatorComponent={()=><View style={{ height: appTheme.spacing.lg }} />
        }
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<FlatListHeader renderSeeAll={false} headerTitle="Featured Products"/>}
        refreshControl={
          <RefreshControl
            refreshing={isFetching}
            onRefresh={() => {
              refetch();
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
          marginBottom:8
        }}
      >
        <ErrorContainer error={error.message}></ErrorContainer>
      </View>
    );

  return (
    <FlatList
      data={FilteredProducts}
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
      ItemSeparatorComponent={()=><View style={{ height: appTheme.spacing.lg }} />}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<FlatListHeader headerTitle="Featured Products" listLength={products?.length} onPressSeeAll={()=>navigation.navigate("browseProducts")} />}
      refreshControl={
        <RefreshControl
          refreshing={isFetching}
          onRefresh={() => {
            refetch();
          }}
        />
      }
      //refrech control works on vertical lists only
    />
  );
}
