import CustomCalculatorButton from "@/components/CustomCalculatorButton";
import CustomText from "@/components/CustomText";
import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { View } from "react-native";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={globalStyles.innerContainer}>
        <CustomText variant="h1">50 x 50000000000</CustomText>
        <CustomText variant="h2">250</CustomText>
      </View>

      <View style={globalStyles.row}>
        <CustomCalculatorButton
          label="C"
          blackText
          color={Colors.lightGray}
          onPress={() => console.log("C")}
        />
        <CustomCalculatorButton
          label="+/-"
          blackText
          color={Colors.lightGray}
          onPress={() => console.log("+")}
        />
        <CustomCalculatorButton
          label="del"
          blackText
          color={Colors.lightGray}
          onPress={() => console.log("d")}
        />
        <CustomCalculatorButton
          label="÷"
          color={Colors.orange}
          onPress={() => console.log("÷")}
        />
      </View>

      <View style={globalStyles.row}>
        <CustomCalculatorButton label="7" onPress={() => console.log("7")} />
        <CustomCalculatorButton label="8" onPress={() => console.log("8")} />
        <CustomCalculatorButton label="9" onPress={() => console.log("9")} />
        <CustomCalculatorButton
          label="×"
          color={Colors.orange}
          onPress={() => console.log("×")}
        />
      </View>
      <View style={globalStyles.row}>
        <CustomCalculatorButton label="4" onPress={() => console.log("4")} />
        <CustomCalculatorButton label="5" onPress={() => console.log("5")} />
        <CustomCalculatorButton label="6" onPress={() => console.log("6")} />
        <CustomCalculatorButton
          label="-"
          color={Colors.orange}
          onPress={() => console.log("-")}
        />
      </View>
      <View style={globalStyles.row}>
        <CustomCalculatorButton label="1" onPress={() => console.log("1")} />
        <CustomCalculatorButton label="2" onPress={() => console.log("2")} />
        <CustomCalculatorButton label="3" onPress={() => console.log("3")} />
        <CustomCalculatorButton
          label="+"
          color={Colors.orange}
          onPress={() => console.log("+")}
        />
      </View>
    </View>
  );
};

export default CalculatorApp;
