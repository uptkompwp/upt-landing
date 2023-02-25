
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
const dark = "#19181e";
const light = "#f0f0f0";

export const theme = extendTheme({
    styles: {
        global: (props: any) => ({
            body: {
                bg: mode(dark, light)(props)
            }
        })
    }
});