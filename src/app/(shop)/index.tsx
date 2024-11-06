import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ProductListItem } from "../../components/product-list-item";
import { ListHeader } from "../../components/list-header";
import { getProductsAndCategories } from "../../api/api";
import { ActivityIndicator } from "react-native";

const Home = () => {
  //Dataları çek
  const { data, error, isLoading } = getProductsAndCategories();

  //Yükleniyor ise kullanıcıya göster
  if (isLoading) return <ActivityIndicator />;

  //Hata durumunda kullanıcıya hata mesajı göster
  if (error || !data)
    return <Text>Error {error?.message || "An error occured"}</Text>;

  return (
    <View>
      <FlatList
        data={data.products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        ListHeaderComponent={<ListHeader categories={data.categories} />}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.flatListColumn}
        style={{ paddingHorizontal: 10, paddingVertical: 5 }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  flatListContent: {
    paddingBottom: 20,
  },
  flatListColumn: {
    justifyContent: "space-between",
  },
});
