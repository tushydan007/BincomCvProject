import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Octicons } from "@expo/vector-icons";
import CustomText from "./CustomText";

const Inner = ({ organization, dateRange, school }) => {
  return (
    <View style={styles.container}>
      <View style={styles.octykon}>
        <Octicons name="dot" size={24} color="white" style={styles.icon} />
        <CustomText style={styles.nysc}>{organization}</CustomText>
        <CustomText>{dateRange}</CustomText>
      </View>
      <CustomText>{school}</CustomText>
    </View>
  );
};

export default Inner;

const styles = StyleSheet.create({
  octykon: {
    flexDirection: "row",
  },
  nysc: {
    flex: 1,
  },
  icon: {
    marginRight: 8,
  },
  container: {
    marginBottom: 30,
  },
});
