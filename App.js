import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategorioesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

const StackScreens = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackScreens.Navigator
        screenOptions={{ headerStyle: { backgroundColor: "#cccccc" } }}
      >
        <StackScreens.Screen
          name="MealsCategories"
          options={{
            title: "All Categories",
          }}
          component={CategorioesScreen}
        />
        <StackScreens.Screen
          name="MealsOverview"
          component={MealsOverviewScreen}
          // options={({ route, navigation }) => {   ///Forma dinamica
          //   const categoryId = route.params.categoryId;
          //   return {
          //     title: categoryId,
          //   };
          // }}
        />
        <StackScreens.Screen
          name="MealDetailScreen"
          component={MealDetailScreen}
        />
      </StackScreens.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
