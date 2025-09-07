import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const insets = useSafeAreaInsets();

export const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: insets.top + 200,
  },
  logo: {
    height: 60,
  },
});
