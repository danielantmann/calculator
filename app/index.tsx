import CustomText from "@/components/CustomText";
import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { View } from "react-native";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <CustomText variant="h1">50 x 50000000000</CustomText>

      <CustomText variant="h2">250</CustomText>
    </View>
  );
};

export default CalculatorApp;
