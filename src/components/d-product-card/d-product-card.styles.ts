import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 180,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 110,
  },
  textContainer: {
    flex: 2,
    height: "100%",
    paddingLeft: 16,
    paddingTop: 32,
  },
});
