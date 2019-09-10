import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomeHeaderButton from "../components/HeaderButton";
const MealsDetailsScreen = props => {
  const mealid = props.navigation.getParam("mealId");
  const selectedMeal = MEALS.find(meal => meal.id === mealid);
  return (
    <View>
      <Text>MealsDetailsScreen</Text>
    </View>
  );
};

MealsDetailsScreen.navigationOptions = navData => {
  const mealId = navData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomeHeaderButton}>
        <Item
          title="Fav"
          iconName="ios-star-outline"
          onPress={() => {
            console.log("mark faveroit ");
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({});

export default MealsDetailsScreen;
