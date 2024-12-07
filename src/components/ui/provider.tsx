import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode";
import {FC} from "react";

export const Provider: FC<ColorModeProviderProps> = (props) => {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
};
