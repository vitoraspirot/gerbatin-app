import { NavigationContainer } from "@react-navigation/native";
import { RootStack } from "../../routes/stack.routes";

export const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
