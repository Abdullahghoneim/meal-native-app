import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoresMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";

const MealNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: { title: "Meal Categorys" }
    },
    CategoryMeals: { screen: CategoryMealsScreen },
    MealDetails: MealDetailsScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#6B52AE"
      },
      headerTintColor: "white"
    }
  }
);

export default createAppContainer(MealNavigator);
