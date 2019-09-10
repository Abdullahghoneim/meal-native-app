import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";

const MealItem = ({
  onSelect,
  title,
  duration,
  complexity,
  image,
  affordability
}) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelect}>
        <View>
          <View style={{ ...styles.itemRow, ...styles.mealHeader }}>
            <ImageBackground
              style={{ height: "100%", width: "100%" }}
              source={{ uri: image }}
            >
              <Text style={styles.title}> {title} </Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.itemRow, ...styles.mealDetails }}>
            <Text>{duration} m</Text>
            <Text>{complexity}</Text>
            <Text>{affordability}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#ccc",
    marginBottom: 10
  },
  itemRow: {
    flexDirection: "row"
  },
  mealHeader: {
    height: "90%"
  },
  mealDetails: {
    paddingHorizontal: 10,
    justifyContent: "space-between"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    color: "white",
    backgroundColor: "rgba(0,0,0,0.5 )",
    paddingVertical: 5,
    paddingHorizontal: 21
  }
});

export default MealItem;
