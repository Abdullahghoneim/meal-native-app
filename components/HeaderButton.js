import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

const CustomeHeaderButton = props => {
  return (
    <HeaderButton
      color="#fff"
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
    />
  );
};

export default CustomeHeaderButton;
