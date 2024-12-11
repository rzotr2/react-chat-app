import { ReactElement } from "react";

import { Button, HStack } from "@chakra-ui/react";
import { ColorModeButton } from "./components/ui/color-mode.tsx";

const App = (): ReactElement => {
    return (
        <HStack>
            <Button bg="blueviolet">Click me</Button>
            <Button>Click me</Button>
            <ColorModeButton>Change color theme</ColorModeButton>
        </HStack>
    )
}

export default App;