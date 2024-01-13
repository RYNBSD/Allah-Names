import AsyncStorage from "@react-native-async-storage/async-storage";
import type { ReactNode } from "react";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

type Config = {
  isEn: boolean;
  isDark: boolean;
  toggleLanguage: () => void;
  toggleTheme: () => void;
};

type TConfig = Config | null;

const ConfigContext = createContext<TConfig>(null);
const CONFIG = "config";

type StateConfig = Omit<Omit<Config, "toggleLanguage">, "toggleTheme">;

export default function ConfigProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<StateConfig>({
    isEn: true,
    isDark: true,
  });

  useEffect(() => {
    AsyncStorage.getItem(CONFIG).then((config) => {
      if (typeof config === "string") {
        const parse = JSON.parse(config) as StateConfig;
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
    <ConfigContext.Provider
      value={{
        ...config,
        toggleLanguage,
        toggleTheme,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}

export const useConfig = () => useContext(ConfigContext);
