import "@total-typescript/ts-reset";
import type {
  NavigationProp,
  RouteProp,
  ParamListBase,
} from "@react-navigation/native";

export type Navigation = {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<ParamListBase>;
};

export type Name = {
  name: string;
  desc: string;
  transliteration: string;
  en: {
    meaning: string;
    desc: string;
  };
  fr: {
    meaning: string;
    desc: string;
  };
};

export type Config = {
  /** Second Language */
  isEn: boolean;
  /** Theme */
  isDark: boolean;
};
