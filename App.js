import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  View,
  ScrollView,
} from "react-native";
import CustomText from "./components/CustomText";
import Achievements from "./components/Achievements";
import SubHeading from "./components/SubHeading";

export default function App() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <CustomText style={styles.text}>Ezeh Cornelius Samuel</CustomText>
          <CustomText>Alhaji Jimoh Street, Ilasamaja, Lagos State</CustomText>
          <CustomText>Tel: 07068855314, 08126163064</CustomText>
          <CustomText>Email: cornzeh@gmail.com</CustomText>
        </View>
        <View>
          <View style={styles.octykon}>
            <SubHeading name="CAREER OBJECTIVE" />
            <CustomText>
              To work in a learning and challenging environment, utilizing my
              skills and knowledge to the best of my abilities and contributing
              positively to the growth of the organization.
            </CustomText>
          </View>
        </View>
        <Achievements />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1a1a1a",
    padding: 20,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "800",
    fontSize: 30,
  },
});
