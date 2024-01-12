import AsyncStorage from "@react-native-async-storage/async-storage";
import type { ReactNode } from "react";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

import type { Config } from "../types";

const ConfigContext = createContext<Config>({ isEn: true, isDark: true });
const CONFIG = "config";

export default function ConfigProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<Config>({ isEn: true, isDark: true });

  useEffect(() => {
    AsyncStorage.getItem(CONFIG).then((config) => {
      if (typeof config === "string") {
        const parse = JSON.parse(config) as Config;
        setConfig(parse);
      }
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(CONFIG, JSON.stringify(config));
  }, [config]);

  const toggleLanguage = useCallback(
    () => setConfig((prev) => ({ ...prev, isEn: !prev.isEn })),
    [],
  );
  const toggleTheme = useCallback(
    () => setConfig((prev) => ({ ...prev, isDark: !prev.isDark })),
    [],
  );

  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
}

export const useConfig = () => useContext(ConfigContext);
