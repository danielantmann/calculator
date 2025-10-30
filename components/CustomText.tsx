import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { StyleSheet, Text, type TextProps } from "react-native";

interface Props extends TextProps {
  variant?: "h1" | "h2";
}
const CustomText = ({ children, variant = "h1", ...props }: Props) => {
  const varianStyle =
    variant === "h1" ? globalStyles.mainResults : globalStyles.subResult;
  return (
    <Text
      style={[styles.text, varianStyle]}
      {...props}
      numberOfLines={1}
      adjustsFontSizeToFit
    >
      {children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    color: Colors.textPrimary,
    fontFamily: "SpaceMono",
  },
});
