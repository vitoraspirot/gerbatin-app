import { ROUTES } from "../types/routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/home/home.screen";
import { CategoryListScreen } from "../screens/category-list/category-list.screen";
import { ProductDetaisScreen } from "../screens/product-details/product-details.screen";
import { View, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export type RootStackParamList = {
  Home: undefined;
  Details: { id: string };
};

const Stack = createNativeStackNavigator();
const logoImg = require("../assets/logo.jpg");

export const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.HOME_SCREEN}>
      <Stack.Screen
        name={ROUTES.HOME_SCREEN}
        component={HomeScreen}
        options={{
          header: () => {
            return (
              <View
                style={[
                  {
                    height: useSafeAreaInsets().top + 69,
                    paddingTop: useSafeAreaInsets().top,
                    backgroundColor: "black",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
              >
                <Image source={logoImg} style={{ height: 69, width: 69 }} />
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        name={ROUTES.CATEGORY_LIST}
        component={CategoryListScreen}
        options={{
          headerTitle: "",
          headerBackTitle: "",
        }}
      />
      <Stack.Screen
        name={ROUTES.PRODUCT_DETAILS}
        component={ProductDetaisScreen}
        options={{
          headerTitle: "",
          headerBackTitle: "",
        }}
      />
    </Stack.Navigator>
  );
};
