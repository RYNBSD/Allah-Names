import { lazy } from "react";

export const ThemeProvider = lazy(async () => await require("./Theme"));
