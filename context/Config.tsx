import AsyncStorage from "@react-native-async-storage/async-storage";
import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useState } from "react";

import type { Config } from "../types";
type TConfig = Config | null;

const ConfigContext = createContext<TConfig>(null);
const CONFIG = "config";

export default function ConfigProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<Config>({ isEn: true, isDark: true });

  useEffect(() => {
    AsyncStorage.getItem(CONFIG).then((storage) => {
      if (typeof storage === "string") {
        const parse = JSON.parse(storage) as Config;
        setConfig(parse);
      }
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(CONFIG, JSON.stringify(config));
  }, [config]);

  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
}

export const useConfig = () => useContext(ConfigContext);
