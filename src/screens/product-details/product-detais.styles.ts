import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  
  imageContainer: {
    alignItems: "center",
    marginVertical: 15,
  },
  productImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  infoContainer: {
    paddingHorizontal: 15,
  },
  productName: {
    fontSize: 16,
    fontWeight: "600",
  },
  brand: {
    fontSize: 14,
    color: "gray",
    marginTop: 5,
  },
  link: {
    color: "blue",
    marginTop: 10,
  },
  table: {
    margin: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  tableLabel: {
    fontWeight: "500",
  },
  tableValue: {
    color: "#000",
  },
  whatsappButton: {
    backgroundColor: "#25D366",
    marginHorizontal: 20,
    marginBottom: 30,
    padding: 15,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  whatsappText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
  },
});