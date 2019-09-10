import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
const CategoresMealsScreen = props => {
  const id = props.navigation.getParam("categoryId");
  const desplayedmeal = MEALS.filter(meal => meal.categoryIds.indexOf(id) >= 0);

  const renderMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        image={itemData.item.imageUrl}
        complexity={itemData.item.complexity.toUpperCase()}
        affordability={itemData.item.affordability}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "MealDetails",
            params: {
              mealId: itemData.item.id
            }
          });
        }}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={desplayedmeal}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%", padding: 10 }}
      />
    </View>
  );
};

CategoresMealsScreen.navigationOptions = navData => {
  const id = navData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(cat => cat.id === id);
  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({});

export default CategoresMealsScreen;
