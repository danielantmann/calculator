import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { Pressable, Text } from "react-native";

interface Props {
  label: string;
  color?: string;
  blackText?: boolean;
  onPress: () => void;
}
const CustomCalculatorButton = ({
  label,
  color = Colors.darkGrey,
  blackText = false,
  onPress,
}: Props) => {
  const textColor = blackText ? Colors.blackText : Colors.textPrimary;

  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
      })}
      onPress={onPress}
    >
      <Text style={[globalStyles.buttonText, { color: textColor }]}>
        {label}
      </Text>
    </Pressable>
  );
};

export default CustomCalculatorButton;
