import { lazy } from "react";

export const Names = lazy(async () => await require("./Names.tsx"));
export const Name = lazy(async () => await require("./Name.tsx"));
