import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 16,
  },
  categoriesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 16,
  },
  productsContainer: {
    marginTop: 16,
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  productsList: {
    flex: 1,
    marginBottom: 16,
    width: "100%",
  },
});
