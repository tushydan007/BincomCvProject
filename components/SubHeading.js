import { StyleSheet, View } from "react-native";
import React from "react";
import CustomText from "./CustomText";
import Separator from "./Separator";

const SubHeading = ({ name }) => {
  return (
    <View style={styles.container}>
      <CustomText style={styles.heading}>{name}</CustomText>
      <Separator />
    </View>
  );
};

export default SubHeading;

const styles = StyleSheet.create({
  heading: {
    fontWeight: "600",
  },
  container: {
    marginTop: 20,
  },
});
