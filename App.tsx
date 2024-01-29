import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/redux";
import { AppBottomTab } from "./src/navigation";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar style="dark" />
      <NavigationContainer>
        <AppBottomTab />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
