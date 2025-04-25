import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

import StackRoutes from "../09-atividades/src/routes/StackRoutes"




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