import CustomCalculatorButton from "@/components/CustomCalculatorButton";
import CustomText from "@/components/CustomText";
import { Colors } from "@/constants/Colors";
import { useCalculator } from "@/hooks/useCalculator";
import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { View } from "react-native";

const CalculatorApp = () => {
  const {
    formula,
    previousNumber,
    Operator,
    operations,
    buildNumber,
    clean,
    toggleSing,
    deleteLast,
    calculateResult,
  } = useCalculator();
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <CustomText variant="h1">{formula}</CustomText>
        {formula === previousNumber ? (
          <CustomText variant="h2"> </CustomText>
        ) : (
          <CustomText variant="h2">{previousNumber}</CustomText>
        )}
      </View>

      <View style={globalStyles.row}>
        <CustomCalculatorButton
          label="C"
          blackText
          color={Colors.lightGray}
          onPress={clean}
        />
        <CustomCalculatorButton
          label="+/-"
          blackText
          color={Colors.lightGray}
          onPress={toggleSing}
        />
        <CustomCalculatorButton
          label="del"
          blackText
          color={Colors.lightGray}
          onPress={deleteLast}
        />
        <CustomCalculatorButton
          label="÷"
          color={Colors.orange}
          onPress={() => operations(Operator.divide)}
        />
      </View>

      <View style={globalStyles.row}>
        <CustomCalculatorButton label="7" onPress={() => buildNumber("7")} />
        <CustomCalculatorButton label="8" onPress={() => buildNumber("8")} />
        <CustomCalculatorButton label="9" onPress={() => buildNumber("9")} />
        <CustomCalculatorButton
          label="×"
          color={Colors.orange}
          onPress={() => operations(Operator.multiply)}
        />
      </View>
      <View style={globalStyles.row}>
        <CustomCalculatorButton label="4" onPress={() => buildNumber("4")} />
        <CustomCalculatorButton label="5" onPress={() => buildNumber("5")} />
        <CustomCalculatorButton label="6" onPress={() => buildNumber("6")} />
        <CustomCalculatorButton
          label="-"
          color={Colors.orange}
          onPress={() => operations(Operator.substract)}
        />
      </View>
      <View style={globalStyles.row}>
        <CustomCalculatorButton label="1" onPress={() => buildNumber("1")} />
        <CustomCalculatorButton label="2" onPress={() => buildNumber("2")} />
        <CustomCalculatorButton label="3" onPress={() => buildNumber("3")} />
        <CustomCalculatorButton
          label="+"
          color={Colors.orange}
          onPress={() => operations(Operator.add)}
        />
      </View>
      <View style={globalStyles.row}>
        <CustomCalculatorButton
          label="0"
          doubleSize
          onPress={() => buildNumber("0")}
        />
        <CustomCalculatorButton label="." onPress={() => buildNumber(".")} />

        <CustomCalculatorButton
          label="="
          color={Colors.orange}
          onPress={calculateResult}
        />
      </View>
    </View>
  );
};

export default CalculatorApp;
