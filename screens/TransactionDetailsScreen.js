import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function TransactionDetailsScreen({ route }) {
  const { transaction } = route.params;

  // Set the image source based on the transaction type
  const getImage = () => {
    if (transaction.type === "Credit") {
      return require("../assets/img/credit.png"); // Replace with actual image path
    } else if (transaction.type === "Debit") {
      return require("../assets/img/debit.png"); // Replace with actual image path
    } else if (transaction.type === "Refund") {
      return require("../assets/img/refund.png"); // Replace with actual image path
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction Details</Text>

      {/* Transaction Image */}
      <Image source={getImage()} style={styles.image} />

      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Date:</Text>
        <Text style={styles.value}>{transaction.date}</Text>

        <Text style={styles.label}>Amount:</Text>
        <Text style={styles.value}>{transaction.amount}</Text>

        <Text style={styles.label}>Type:</Text>
        <Text style={styles.value}>{transaction.type}</Text>

        <Text style={styles.label}>Category:</Text>
        <Text style={styles.value}>{transaction.category}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#343a40",
    marginBottom: 20,
    textAlign: "center",
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 20,
    resizeMode: "contain",
  },
  detailsContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#495057",
    marginBottom: 5,
  },
  value: {
    fontSize: 18,
    color: "#343a40",
    marginBottom: 15,
  },
});
