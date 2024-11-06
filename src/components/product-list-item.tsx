import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Tables } from "../types/database.types";

export const ProductListItem = ({
  product,
}: {
  product: Tables<"product">;
}) => {
  return (
    <Link asChild href={`/product/${product.slug}`}>
      <Pressable style={styles.item}>
        <View style={styles.itemImageContainer}>
          <Image source={{ uri: product.heroImage }} style={styles.itemImage} />
        </View>
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemTitle}>{product.title}</Text>
          <Text style={styles.itemPrice}>${product.price.toFixed(2)}</Text>
        </View>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  item: {
    width: "48%",
    backgroundColor: "white",
    marginVertical: 8,
    borderRadius: 10,
    overflow: "hidden",
  },
  itemImageContainer: {
    borderRadius: 10,
    width: "100%",
    height: 150,
  },
  itemImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  itemTextContainer: {
    padding: 8,
    alignItems: "flex-start",
    gap: 4,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: "bold",
  },
});