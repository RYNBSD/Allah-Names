import { useEffect, useState } from "react";

import type { Names } from "../types/index";
import { readFile } from "../util/index";

export const useNames = () => {
  const [names, setNames] = useState<Names[]>([]);

  useEffect(() => {
    readFile<Names[]>("../assets/allah-names.json").then((value) => {
      setNames(value ?? []);
    });
  }, []);

  return names;
};
