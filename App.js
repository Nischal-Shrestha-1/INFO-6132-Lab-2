import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DashboardScreen from "./screens/DashboardScreen";
import AddTransactionScreen from "./screens/AddTransactionScreen";
import LoginScreen from "./screens/LoginScreen";
import TransactionDetailsScreen from "./screens/TransactionDetailsScreen";

const Stack = createStackNavigator();

export default function App() {
  const [transactions, setTransactions] = useState([
    {
      id: "1",
      date: "2025-03-06",
      amount: "$120",
      type: "Credit",
      category: "Shopping",
    },
  ]);

  const addTransaction = (newTransaction) => {
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      newTransaction,
    ]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard">
          {(props) => (
            <DashboardScreen {...props} transactions={transactions} />
          )}
        </Stack.Screen>
        <Stack.Screen name="AddTransaction">
          {(props) => (
            <AddTransactionScreen {...props} addTransaction={addTransaction} />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="TransactionDetails"
          component={TransactionDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
