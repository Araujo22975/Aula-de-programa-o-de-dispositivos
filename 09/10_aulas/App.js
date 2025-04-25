import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

import StackRoutes from "./SRC/Routes/StackRoutes";




export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>


        {/* Stack */}
        <StackRoutes />

      </NavigationContainer>
    </PaperProvider>


  );
}


