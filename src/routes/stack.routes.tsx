import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ROUTES } from "../types/routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/home/home.screen";
import { CategoryListScreen } from "../screens/category-list/category-list.screen";
import { ProductDetaisScreen } from "../screens/product-details/product-details.screen";

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.HOME_SCREEN}
      screenOptions={{
        title: "Gerbatin",
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name={ROUTES.HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen
        name={ROUTES.CATEGORY_LIST}
        component={CategoryListScreen}
      />
      <Stack.Screen
        name={ROUTES.PRODUCT_DETAILS}
        component={ProductDetaisScreen}
      />
    </Stack.Navigator>
  );
};
